import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Puntos from "../screens/ProPuntos/Puntos";
import PuntosMain from "../screens/ProPuntos/PuntosMain";
import UploadOrders from "../components/Auth/UploadOrders";
import Account from "../screens/Account/Account";
import ChangeName from "../screens/Account/ChangeName";
import ChangeEmail from "../screens/Account/ChangeEmail";
import ChangeUsername from "../screens/Account/ChangeUsername";
import ChangePassword from "../screens/Account/ChangePassword";
import ChatScreenLogin from "../screens/Chat/LoginScreen";
import Chat from "../screens/Chat/ChatScreen";
import Help from "../screens/Help";
import Sell from "../screens/Vender/Sell";
import SellProduct from "../screens/Vender/SellProduct";
import SellImages from "../screens/Vender/SellImages";
import SellForm from "../screens/Vender/SellForm";
import SellSuccess from "../screens/Vender/SellSuccess";
import Addresses from "../screens/Account/Addresses";
import AddAddress from "../screens/Account/AddAddress";
import Orders from "../screens/Account/Orders";
import colors from "../styles/colors";
import MyStatus from "../components/AOrders/MyStatus";
import DeliveryRequirements from "../components/AOrders/DeliveryRequirements";
import Maps from "../components/AMaps/Map";

const Stack = createStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.fontLight,
        headerStyle: { backgroundColor: "#c2303f" },
        cardStyle: {
          backgroundColor: "#fff",
        },
      }}
    >
      <Stack.Screen
        name="account"
        component={Account}
        options={{ title: "Cuenta", headerShown: false }}
      />
      <Stack.Screen
        name="puntos"
        component={Puntos}
        options={{ title: "Mis Puntos", headerShown: false }}
      />
      
      <Stack.Screen
        name="puntos-main"
        component={PuntosMain}
        options={{ title: ""}}
      />

      <Stack.Screen
        name="ChatScreen"
        component={ChatScreenLogin}
        options={{ title: "ChatScreen", headerShown: false }}
      />

      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{ title: "Chat", headerShown: false }}
      />

      <Stack.Screen
        name="delivery-main"
        component={UploadOrders}
        options={{ title: "Repartir"  }}
      />

      <Stack.Screen
        name="delivery-status"
        component={MyStatus}
        options={{ title: "Estado"  }}
      />

      <Stack.Screen
        name="delivery-requirements"
        component={DeliveryRequirements}
        options={{ title: "Estado"  }}
      />

      <Stack.Screen
        name="maps"
        component={Maps}
        options={{ title: "Maps"  }}
      />

      <Stack.Screen
        name="sell-main"
        component={Sell}
        options={{ title: "Vender", headerShown: false }}
      />

      <Stack.Screen
        name="sell-product"
        component={SellProduct}
        options={{ title: "Producto a vender", headerShown: false }}
      />

      
      <Stack.Screen
        name="sell-images"
        component={SellImages}
        options={{ title: "Imagenes", headerShown: false }}
      />

      <Stack.Screen
        name="sell-form"
        component={SellForm}
        options={{ title: "Vender Form", headerShown: false }}
      />

      <Stack.Screen
        name="sell-success"
        component={SellSuccess}
        options={{ title: "Producto Publicado", headerShown: false }}
      />
      
      <Stack.Screen
        name="change-name"
        component={ChangeName}
        options={{
          title: "Cambiar nombre y apellidos",
        }}
      />
      <Stack.Screen
        name="change-email"
        component={ChangeEmail}
        options={{
          title: "Cambiar email",
        }}
      />
      <Stack.Screen
        name="change-username"
        component={ChangeUsername}
        options={{
          title: "Cambiar nombre de usuario",
        }}
      />
      <Stack.Screen
        name="change-password"
        component={ChangePassword}
        options={{
          title: "Cambiar contraseña",
        }}
      />
      <Stack.Screen
        name="addresses"
        component={Addresses}
        options={{
          title: "Mis direcciones",
        }}
      />
      <Stack.Screen
        name="add-address"
        component={AddAddress}
        options={{
          title: "Nueva dirección",
        }}
      />
      <Stack.Screen
        name="orders"
        component={Orders}
        options={{
          title: "Mis pedidos",
        }}
      />

        <Stack.Screen
        name="help"
        component={Help}
        options={{
          title: "Ayuda",
        }}
      />
    </Stack.Navigator>
  );
}
