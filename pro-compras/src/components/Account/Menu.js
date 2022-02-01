import React from "react";
import { Alert, View, Text, StyleSheet } from "react-native";
import { List, Button, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../../hooks/useAuth";

export default function Menu() {
  const navigation = useNavigation();
  const { logout } = useAuth();

  const logoutAccount = () => {
    Alert.alert(
      "Cerrar sesión",
      "¿Estas seguro de que quieres salir de tu cuenta?",
      [
        {
          text: "NO",
        },
        { text: "SI", onPress: logout },
      ],
      { cancelable: false }
    );
  };

  return (
    <>

      <Button onPress={() => navigation.navigate("sell-main")} mode="contained" style={styles.buttonSell}>Vender</Button>  
      <Button onPress={() => navigation.navigate("delivery-status")} mode="contained" style={styles.buttonRep}>Repartir</Button>  

      <List.Section>
      <List.Subheader>Mis Cosas</List.Subheader>
        <List.Item
          title="Mis Cosas"
          description="Ver mis puntos acumulados"
          left={(props) => <List.Icon {...props} icon="star" />}
          onPress={() => navigation.navigate("puntos-main")}
        />

        

        <List.Subheader>Mi cuenta</List.Subheader>

        <List.Item
          title="Pedidos"
          description="Listado de todos los pedidos"
          left={(props) => <List.Icon {...props} icon="clipboard-list" />}
          onPress={() => navigation.navigate("orders")}
        />
        <List.Item
          title="Lista de deseos"
          description="Listado de todos los productos que te quieres comprar"
          left={(props) => <List.Icon {...props} icon="heart" />}
          onPress={() => navigation.navigate("favorites")}
        />
        <List.Item
          title="Cambiar nombre"
          description="Cambia el nombre de tu cuenta"
          left={(props) => <List.Icon {...props} icon="face" />}
          onPress={() => navigation.navigate("change-name")}
        />
        <List.Item
          title="Cambiar email"
          description="Cambia el email de tu cuenta"
          left={(props) => <List.Icon {...props} icon="at" />}
          onPress={() => navigation.navigate("change-email")}
        />
        <List.Item
          title="Cambiar nombre de usuario"
          description="Cambia el nombre de usuario de tu cuenta"
          left={(props) => <List.Icon {...props} icon="sim" />}
          onPress={() => navigation.navigate("change-username")}
        />
        <List.Item
          title="Cambiar contraseña"
          description="Cambia el contraseña de tu cuenta"
          left={(props) => <List.Icon {...props} icon="key" />}
          onPress={() => navigation.navigate("change-password")}
        />
        <List.Item
          title="Mis direcciones"
          description="Administra tus direcciones de envio"
          left={(props) => <List.Icon {...props} icon="map" />}
          onPress={() => navigation.navigate("addresses")}
        />
      </List.Section>

      <List.Section>
        <List.Subheader>App</List.Subheader>


        <List.Item
          title="Ayuda"
          left={(props) => <List.Icon {...props} icon="info" />}
          onPress={() => navigation.navigate("help")}
        />

        <List.Item
          title="Cerrar sesión"
          description="Cierra esta sesion y inicia con otra"
          left={(props) => <List.Icon {...props} icon="logout" />}
          onPress={logoutAccount}
        />
      </List.Section>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
  },
  titleName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  surface: {
    padding: 0,
    height: 1,
    width: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },

  buttonRep: {
    width: 328,
    textAlign: "center",
    left: 15,
    backgroundColor: "#c2303f",
    borderRadius: 3,
  },

  buttonSell: {
    width: 328,
    textAlign: "center",
    left: 15,
    backgroundColor: "#c2303f",
    top: -8,
    borderRadius: 3,
  },
});

