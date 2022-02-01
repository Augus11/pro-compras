import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { Button } from "react-native-paper";
import { size } from "lodash";
import useAuth from "../../hooks/useAuth";
import {
  addFavoriteApi,
  isFavoriteApi,
  deleteFavoriteApi,
} from "../../api/favorite";

export default function Actions(props) {
  const { product } = props;
  const { auth } = useAuth();
  const [isFavorite, setIsFavorite] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [reloadFavorite, setReloadFavorite] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await isFavoriteApi(auth, product._id);
      if (size(response) === 0) setIsFavorite(false);
      else setIsFavorite(true);

      setReloadFavorite(false);
      setLoading(false);
    })();
  }, [product, reloadFavorite]);

  const addFavorite = async () => {
    if (!loading) {
      setLoading(true);
      await addFavoriteApi(auth, product._id);
      setReloadFavorite(true);
    }
  };

  const deleteFavorite = async () => {
    if (!loading) {
      setLoading(true);
      await deleteFavoriteApi(auth, product._id);
      setReloadFavorite(true);
    }
  };

  if (isFavorite === undefined) return null;

  return (
    <TouchableOpacity
      contentStyle={
        isFavorite
          ? styles.btnDeleteFavoritesContent
          : styles.btnAddFavoritesContent
      }
      style={styles.addToCartButton}
      onPress={isFavorite ? deleteFavorite : addFavorite}
      loading={loading}
>
      <Text style={[styles.buttonText, { color: '#111' }]}>{isFavorite ? "Eliminar de favoritos" : "Añadir a favoritos"}</Text>
      
    </TouchableOpacity>
    

  );
}

const styles = StyleSheet.create({
  btnLabel: {
    fontSize: 14,
  },
  btn: {
    marginTop: 8,
  },
  btnAddFavoritesContent: {
    backgroundColor: "#057b00",
    paddingVertical: 5,
    height: 45
  },
  btnDeleteFavoritesContent: {
    backgroundColor: "#c40000",
    paddingVertical: 5,
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
    fontSize: 13,
    color: '#fff',
    fontFamily: 'MontserratBold',
  },
});
