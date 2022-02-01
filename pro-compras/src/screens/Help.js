import React from "react";
import { StyleSheet, View, Text, Image, ImageBackground, ScrollView } from "react-native";
import { Surface, Button, Caption, Searchbar } from 'react-native-paper';
import { IconButton } from "react-native-paper";
import { useState } from "react";
import colors from "../styles/colors";


export default function Help(props) {
    const { user } = props;

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (     
      <View>
        <ScrollView>
        <Text></Text>
        <Text style={styles.textt}>¿En que podemos ayudarte?</Text>
        <Searchbar style={styles.search}
            placeholder="Describenos tu problema"
            onChangeText={onChangeSearch}
            value={searchQuery}        
        />
        <Text></Text>

        <Text style={styles.compras}>Compras</Text>
        <View style={styles.ButtonPaddings}>
        <Button mode="contained" style={styles.comprasInfo}>¿Como pagar?</Button>
        <Button mode="contained" style={styles.comprasInfo}>¿Como comprar?</Button>
        <Button mode="contained" style={styles.comprasInfo}>¿Como elegir hora y lugar de llegada?</Button>
        <Button mode="contained" style={styles.comprasInfo}>¿Como obtener beneficios con ProPuntos?</Button> 
        <Text style={styles.ventas}>Ventas</Text>
        <Button mode="contained" style={styles.ventasInfo}>¿Como cobrar y que medios?</Button>
        <Button mode="contained" style={styles.ventasInfo}>¿Como editar un producto?</Button> 
        <Button mode="contained" style={styles.ventasInfo}>¿Como retirar de stock un producto?</Button>
        <Button mode="contained" style={styles.ventasInfo}>¿Como despublicar un producto?</Button>
        <Text style={styles.jobs}>Mis Trabajos</Text>
        <Button mode="contained" style={styles.jobsInfo}>¿Como convertirme en repartidor?</Button>
        <Button mode="contained" style={styles.jobsInfo}>¿Como ganar ProPuntos y dinero extra?</Button>
        <Button mode="contained" style={styles.jobsInfo}>¿Como aplicar todos los servicios?</Button>
        <Button mode="contained" style={styles.jobsInfo}>¿Como usar la opcion de repartidor?</Button>
        <Text style={styles.cuenta}>Mi Cuenta</Text>
        <Button mode="contained" style={styles.cuentaInfo}>¿Que hacer si olvido mi clave?</Button>
        <Button mode="contained" style={styles.cuentaInfo}>¿Como resguardar mi cuenta?</Button>
        <Button mode="contained" style={styles.cuentaInfo}>¿Como eliminar mi cuenta?</Button>
        <Button mode="contained" style={styles.cuentaInfo}>¿Como usar la opcion de repartidor?</Button>
        <Button mode="text" style={styles.frecuent}>PREGUNTAS FRECUENTES</Button>

        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>

        </View>
        </ScrollView>

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

    textt: {
      fontSize: 20,
      textAlign: "center",
      fontWeight: "bold",
    },

    search: {
        top: 10,

      },

    ButtonPadding: {
        margin: 10,
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
      top: 10,
      fontSize: 20,
      textAlign: "center",
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

    compras: {
        top: 30,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
      },
      ventas: {
        top: 57,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
      },

      jobs: {
        top: 84,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
      },

      cuenta: {
        top: 115,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
      },

      comprasInfo: {
        top: 40,
        left: 0,
        fontSize: 10,
        textAlign: "left",
        margin: 2,
        backgroundColor: colors.bgDark,
      },

      ventasInfo: {
        top: 70,
        left: 0,
        fontSize: 10,
        textAlign: "left",
        margin: 2,
        backgroundColor: colors.bgDark,
      },

      
      jobsInfo: {
        top: 97,
        left: 0,
        fontSize: 10,
        textAlign: "left",
        margin: 2,
        backgroundColor: colors.bgDark,
      },

      
      cuentaInfo: {
        top: 130,
        left: 0,
        fontSize: 10,
        textAlign: "left",
        margin: 2,
        backgroundColor: colors.bgDark,
      },

      frecuent: {
        top: 140,
        left: 0,
        fontSize: 10,
        textAlign: "left",
        margin: 2,
        color: "red",
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