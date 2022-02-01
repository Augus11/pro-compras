import React from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import * as Font from "expo-font";
import { Surface, Button, Caption } from 'react-native-paper';
import { IconButton } from "react-native-paper";
import { useState } from "react";

const getFonts = () => Font.loadAsync({
  "blooming-elegant-hand": require("../../../assets/fonts/Blooming Elegant Hand.otf"),
  "blooming-elegant-hand-sans": require("../../../assets/fonts/Blooming Elegant Sans.otf"),
})

export default function Puntos(props) {
    const { user } = props;
    const [fontsLoaded, setFontsLoaded] = useState(false);

    return (     
      <View>
        <Text style={styles.text1}>Mis Puntos</Text>
        <Text style={styles.text2}>Mi Dinero</Text>

        <Text style={styles.text3}>Mis Deudas</Text>
        <Text style={styles.text4}>Mis Puntos</Text>

        <View style={styles.container}>
          <Button icon="star" mode="contained" style={styles.button}>4546</Button>
          <Button icon="credit-card" mode="contained" style={styles.button}>10357</Button>
        </View>

        <View style={styles.container}>
          <Button icon="star" mode="contained" style={styles.buttonDown}>17957</Button>
          <Button icon="credit-card" mode="contained" style={styles.buttonDown}>7567</Button>
        </View>

      </View>
    );

    if(fontsLoaded){
      
    } else {
      return (
        <AppLoading>
          startAsync={getFonts}
          onFinish={() => setFontsLoaded(true)}
        </AppLoading>
      )
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center'
    },
    title: {
      fontSize: 17,
      textAlign: "center",
      top: 30,
      color: '#FFFFFF'
    },
    points: {
      fontSize: 25,
      textAlign: "center",
      fontWeight: "bold",
      top: 30,
      color: '#FFFFFF',
    },

    button: {
      height: 40,
      width: 122,
      margin: 20,
      padding: 0,
      top: 100,
      textAlign: "center",
      fontSize: 2,
      backgroundColor: "#15212b",
    },

    buttonDown: {
      height: 40,
      width: 122,
      margin: 20,
      padding: 0,
      top: 190,
      textAlign: "center",
      fontSize: 2,
      backgroundColor: "#15212b",
    },

    text1: {
      top: 174,
      left: 59,
      fontWeight: "bold",
    },

    text2: {
      top: 154,
      left: 227,
      fontWeight: "bold",
    },


    text3: {
      top: 224,
      left: 220,
      fontWeight: "bold",
    },

    text4: {
      top: 203,
      left: 59,
      fontWeight: "bold",
    },

    surface: {
      margin: 0,
    },

    banner: {
        backgroundColor: "#15212b",
        height: "50%",
        borderBottomLeftRadius: 11,
        borderBottomRightRadius: 11,
        top: 0,
      },

      surface: {
        padding: 8,
        height: "55%",
        width: "90%",
        left: 17,
        bottom: -100,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
      },

      surfaceText: {
        fontSize: 15,
        fontWeight: "bold",
      },
  
  });