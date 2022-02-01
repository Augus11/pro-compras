import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from "yup";
import Toast from "react-native-root-toast";
import { sellApi } from "../../api/sell";
import { formStyle } from "../../styles";
import { useNavigation } from "@react-navigation/native";

export default function SellForm(props) {
  const { setShowLogin } = props;
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const showLogin = () => setShowLogin((prevState) => !prevState);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      try {
        await sellApi(formData);
        console.log(formData);
        navigation.navigate("sell-success")

      } catch (error) {
        Toast.show("Error al registrar el usuario", {
          position: Toast.positions.CENTER,
        });
        setLoading(false);
      }
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        label="Nombre del producto"
        style={formStyle.input}
        onChangeText={(text) => formik.setFieldValue("title", text)}
        value={formik.values.title}
        error={formik.errors.title}
      />
      <TextInput
        label="Descripción"
        style={formStyle.input}
        onChangeText={(text) => formik.setFieldValue("description", text)}
        value={formik.values.description}
        error={formik.errors.description}
      />
      <TextInput
        label="Precio"
        style={formStyle.input}
        onChangeText={(text) => formik.setFieldValue("price", text)}
        value={formik.values.price}
        error={formik.errors.price}
      />
      <TextInput
        label="Descuento"
        style={formStyle.input}
        onChangeText={(text) => formik.setFieldValue("discount", text)}
        value={formik.values.discount}
        error={formik.errors.discount}
      />

      <TextInput
        label="Dirección del local (Especificar localidad)"
        style={formStyle.input}
        onChangeText={(text) => formik.setFieldValue("ShopAddress", text)}
        value={formik.values.ShopAddress}
        error={formik.errors.ShopAddress}
      />

      <TextInput
        label="Nombre del local"
        style={formStyle.input}
        onChangeText={(text) => formik.setFieldValue("ShopName", text)}
        value={formik.values.ShopName}
        error={formik.errors.ShopName}
      />
      <TextInput
        label="Tags"
        style={formStyle.input}
        onChangeText={(text) => formik.setFieldValue("tags", text)}
        value={formik.values.tags}
        error={formik.errors.tags}
      />
      <Button
        mode="contained"
        style={formStyle.btnSucces}
        onPress={formik.handleSubmit}
        loading={loading}
      >
        Publicar
      </Button>
    </View>
  );
}

function initialValues() {
  return {
    title: "",
    description: "",
    price: "",
    discount: "",
    tags: "",
    ShopName: "",
    ShopAddress: "",
  };
}

function validationSchema() {
  return {
    title: Yup.string().required(true),
    description: Yup.string().required(true),
    price: Yup.string().required(true),
    discount: Yup.string().required(true),
    tags: Yup.string().required(true),
    ShopName: Yup.string().required(true),
    ShopAddress: Yup.string().required(true),
  };
}

const styles = StyleSheet.create({
    container: {
      margin: 15,
    },
  });
