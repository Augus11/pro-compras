import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, List, Text } from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from "yup";
import Toast from "react-native-root-toast";
import { sellApi } from "../../api/sell";
import { formStyle } from "../../styles";
import { useNavigation } from "@react-navigation/native";

export default function SellProduct(props) {
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
    <View>
        <Text style={styles.text}>¿Que quieres publicar?</Text>
        <View style={styles.container}>
            <List.Item
            title="Productos"
            description="Objetos, Herramientas, Libreria"
            left={(props) => <List.Icon {...props} icon="toolbox"/>}
            onPress={() => navigation.navigate("sell-images")}
            />

            <List.Item
            title="Electrodomesticos"
            description="Lavarropas, Heladeras, TVs"
            left={(props) => <List.Icon {...props} icon="home"/>}
            onPress={() => navigation.navigate("sell-form")}
            />

            <List.Item
            title="Muebles"
            description="Sillones, Camas, Mesas"
            left={(props) => <List.Icon {...props} icon="bed"/>}
            onPress={() => navigation.navigate("sell-form")}
            />

            <List.Item
            title="Servicios"
            description="¿Que tipo de servicio ofreces?"
            left={(props) => <List.Icon {...props} icon="tools"/>}
            onPress={() => navigation.navigate("sell-form")}
            />
        </View>

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
  };
}

function validationSchema() {
  return {
    title: Yup.string().required(true),
    description: Yup.string().required(true),
    price: Yup.string().required(true),
    discount: Yup.string().required(true),
    tags: Yup.string().required(true),
  };
}

const styles = StyleSheet.create({
    container: {
      margin: 0,
      top: 110,
    },

    text: {
        textAlign: "center",
        top: 50,
        fontSize: 22,
      },
  });
