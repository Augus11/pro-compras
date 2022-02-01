import React, { useState } from "react";
import { View, StyleSheet, StatusBar} from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from "yup";
import Toast from "react-native-root-toast";
import { sellApi } from "../../api/sell";
import { formStyle } from "../../styles";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SellSucces(props) {
  const { setShowLogin } = props;
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const showLogin = () => setShowLogin((prevState) => !prevState);



  return (
    <>
    <StatusBar backgroundColor="#00a651" barStyle="light-content" />
    <View style={styles.container}>
      <View style={styles.green}>
        <Icon name="check-circle" color="#FFFFFF" size={58} style={styles.icon}></Icon>
        <Text style={styles.title}>¡Tu producto ya esta publicado!</Text>
      </View>

      <Text style={styles.sub}>Asegurate de brindar la mejor experiencia y buenas condiciones de venta</Text>
      <Button onPress={() => navigation.navigate("sell-form")} mode="contained" style={styles.button}>Volver al Inicio</Button>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
      margin: 15,
    },

    title: {
        textAlign: "center",
        top: 50,
        fontSize: 18,
        color: "#FFFFFF",
      },

      sub: {
        textAlign: "center",
        top: 90,
        fontSize: 17,
        color: "#000",
        margin: 10,
      },

      button: {
        margin: 15,
        top: 370,
        backgroundColor: "#00a651",
      },

    container: {
        backgroundColor: "#00a651",
        width: 360,
        height: 150,
      },

    icon: {
        top: 30,
        textAlign: "center",
      },
  });
