import React from "react";
import { StyleSheet,TouchableOpacity, Text } from "react-native";
import { Button } from "react-native-paper";
import Toast from "react-native-root-toast";
import { addProductCartApi } from "../../api/cart";

export default function Actions(props) {
  const { product, quantity } = props;

  const addProductCart = async () => {
    const response = await addProductCartApi(product._id, quantity);
    if (response) {
      console.log(product.title);
      console.log(quantity);
      Toast.show("Producto añadido al carrito", {
        position: Toast.positions.CENTER,
      });
    } else {
      Toast.show("Error al añadir el producto al carrito", {
        position: Toast.positions.CENTER,
      });
    }
  };

  return (
    <TouchableOpacity style={styles.buyNowButton} onPress={addProductCart}>
      <Text style={styles.buttonText}>Añadir al Carrito</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnLabel: {
    fontSize: 14,
  },
  btn: {
    marginTop: 20,
  },
  btnBuyContent: {
    backgroundColor: "#16222b",
    paddingVertical: 3,
    height: 45,
  },

  buyNowButton: {
    flex: 1,
    backgroundColor: '#111',
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  addToCartButton: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 6,
    borderWidth: 1,
    borderColor: '#111',
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'MontserratBold',
  },
});
