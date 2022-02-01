import React from "react";
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity, SafeAreaView } from "react-native";
import * as Font from "expo-font";
import { Surface, Button, Caption  } from 'react-native-paper';
import { IconButton } from "react-native-paper";
import { useState } from "react";
import colors from "../../styles/colors"
import { useNavigation } from "@react-navigation/native";




export default function Puntos(props) {
    const [shouldShow, setShouldShow] = useState(true);
    const { user } = props;
    const navigation = useNavigation();
    const [fontsLoaded, setFontsLoaded] = useState(false);

    return (     
      <View>

          <Text style={styles.text1}>¡Bienvenido a Pro Ventas!</Text>
          <Text style={styles.subheader}>¿Que tipo de vendedor sos?</Text>

        <Text></Text>
        {shouldShow ? (
          <View style={styles.container}>
            <TouchableOpacity style={styles.opacity} onPress={() => navigation.navigate("sell-product")}>
              <Text style={styles.opacitytext}>Minorista</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.opacity} onPress={() => navigation.navigate("sell-product")}>
              <Text style={styles.opacitytext}>Distribuidor</Text>
            </TouchableOpacity>
          </View>      
        ) : null}

        {shouldShow ? (
          <View style={styles.containerr}>
            <TouchableOpacity style={styles.opacity} onPress={() => navigation.navigate("sell-product")}>
              <Text style={styles.opacitytext}>Fabricante</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.opacity} onPress={() => navigation.navigate("sell-product")}>
              <Text style={styles.opacitytext}>Yo mismo</Text>
            </TouchableOpacity>
          </View>      
        ) : null}

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

    containerr: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      top: 100,
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
      height: 100,
      width: 122,
      margin: 10,
      padding: 0,
      top: 50,
      textAlign: "center",
      fontSize: 2,
      backgroundColor: "#15212b",
    },

    buttonDown: {
      height: 100,
      width: 122,
      margin: 10,
      padding: 0,
      top: 170,
      textAlign: "center",
      fontSize: 2,
      backgroundColor: "#15212b",
      borderRadius: 200,
    },

    text1: {
      fontWeight: "bold",
      textAlign: "center",
      padding: 20,
      fontSize: 20,
    },

    subheader: {

      textAlign: "center",
      padding: 18,
      fontSize: 20,
      top: -25,
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
  

      opacity: {
        margin: 5,
        width: 130,
        height: 90,
        backgroundColor: colors.bgDark,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },

      opacity2: {
        margin: 5,
        width: 130,
        height: 90,
        top: 200,
        backgroundColor: colors.bgDark,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },

      opacitytext: {
        color: "#FFFFFF",
        fontSize: 15,
      },
  });