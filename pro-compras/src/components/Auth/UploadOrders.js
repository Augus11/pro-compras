import React, { useState, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Text, ScrollView } from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from "yup";
import Toast from "react-native-root-toast";
import { orderApi } from "../../api/order";
import { getOrderApi } from "../../api/order";
import { formStyle } from "../../styles";
import { map } from "lodash";
import useAuth from "../../hooks/useAuth";
import { useFocusEffect } from "@react-navigation/native";
import OrderInfo from "../Cart/OrderInfo";
import { getMeApi, updateUserApi } from "../../api/user";


import { Image} from "react-native";
import MapView from "react-native-maps";
import Geocoder from "react-native-geocoder";
import Map from "../AMaps/Map";

export default function RegisterForm(props) {
  
  const { setShowLogin } = props;
  const [loading, setLoading] = useState(false);
  const { auth } = useAuth();

  const [order, setOrder] = useState(null);

  //console.log(auth);

  const { orders } = props;


  const showLogin = () => setShowLogin((prevState) => !prevState);

  
  useFocusEffect(
    useCallback(() => {
      (async () => {
        const response = await getOrderApi(auth.token);
        setOrder(response);
      })();
    }, [])
  );

  const formik = useFormik({
    validationSchema: Yup.object(validationSchema()),
    initialValues: initialValues(),
    onSubmit: async (formData) => {
      setLoading(true);
      try {

        const responsee = await getMeApi(auth.token);

        await orderApi(formData);
        console.log(formData);
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
      <TextInput
        label="Shop Name"
        style={formStyle.input}
        onChangeText={(text) => formik.setFieldValue("ShopName", text)}
        value={formik.values.ShopName}
        error={formik.errors.ShopName}
      />

      <TextInput
        label="Shop Name"
        style={formStyle.input}
        onChangeText={(text) => formik.setFieldValue("ShopAdress", text)}
        value={formik.values.ShopAdress}
        error={formik.errors.ShopAdress}
      />

      <TextInput
        label="Shop Name"
        style={formStyle.input}
        onChangeText={(text) => formik.setFieldValue("BuyerUsername", text)}
        value={formik.values.BuyerUsername}
        error={formik.errors.BuyerUsername}
      />

      <TextInput
        label="Shop Name"
        style={formStyle.input}
        onChangeText={(text) => formik.setFieldValue("BuyerAdress", text)}
        value={formik.values.BuyerAdress}
        error={formik.errors.BuyerAdress}
      />

      <Button mode="contained" onPress={formik.handleSubmit}>Submit</Button>
      <OrderInfo order={order}></OrderInfo>
    </View>
  );
}

function initialValues() {
  return {
    ShopName: "ed",
    ShopAddress: "ed",
    BuyerUsername: "ed",
    BuyerAdress: "ed",
  };
}

function validationSchema() {
  return {
    ShopName: Yup.string().required(true),
    ShopAddress: Yup.string().required(true),
    BuyerUsername: Yup.string().required(true),
    BuyerAdress: Yup.string().required(true),
  };
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  view: {
    borderWidth: 0.9,
    borderRadius: 5,
    borderColor: "#ddd",
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 15,
    backgroundColor: "#80BDAE",
  },
});