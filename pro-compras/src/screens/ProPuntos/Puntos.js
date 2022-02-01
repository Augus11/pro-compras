import React, { useState, useEffect } from "react";
import { View, StyleSheet, StatusBar, TouchableOpacity} from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from "yup";
import Toast from "react-native-root-toast";
import { sellApi } from "../../api/sell";
import { formStyle } from "../../styles";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';

import Constants from 'expo-constants';

import { useFonts } from 'expo-font';

import MontserratRegular from '../../../assets/fonts/Montserrat/Montserrat-Regular.ttf';
import MontserratBold from '../../../assets/fonts/Montserrat/Montserrat-Bold.ttf';
import MontserratSemiBold from '../../../assets/fonts/Montserrat/Montserrat-SemiBold.ttf';

export default function ProductScreen1() {
  const [loaded] = useFonts({
    MontserratRegular,
    MontserratBold,
    MontserratSemiBold,
  });

  const [isFavourite, setFavourite] = useState(false);
  const [size] = useState([
    { id: 1, label: 'S' },
    { id: 1, label: 'M' },
    { id: 1, label: 'L' },
    { id: 1, label: 'XL' },
  ]);

  const [selectedSize, setSelectedSize] = useState('M');

  const [productDescription] = useState(
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut ornare urna. Duis egestas ligula quam, ut tincidunt ipsum blandit at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae justo congue, tempor urna vitae, placerat elit. Nulla nec consectetur dolor, in convallis erat. Fusce hendrerit id sem tristique congue. \n\nVestibulum mauris sapien, vulputate in lacus in, lacinia efficitur magna. Sed id massa ut magna eleifend lacinia et id tellus. Sed dignissim mollis lacus. Etiam laoreet ex eu sem euismod congue. In maximus porttitor imperdiet. Nulla eu dolor vehicula ligula mollis tristique ut in enim. Phasellus quis tempor velit. Vivamus sit amet orci ornare, pulvinar purus et, commodo magna. Nunc eu tortor vitae leo varius vehicula quis volutpat dolor.\n\nDonec interdum rutrum tellus, et rhoncus risus dignissim at. Aliquam sed imperdiet tortor, non aliquam sapien. Cras quis enim a elit fringilla vehicula. Aenean pulvinar ipsum a magna feugiat, a fermentum ante pellentesque. Mauris tincidunt placerat placerat. Quisque tincidunt enim sed metus fermentum maximus. Fusce eu tempus est.`
  );

  const [seeFullDescription, setSeeFullDescription] = useState(false);

  const [moreProducts] = useState([
    {
      productName: 'Black Printed Tshirt',
      productPrice: 19.49,
      productImage:
        'https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
    },
    {
      productName: 'Black Printed Top (Women)',
      productPrice: 19.49,
      productImage:
        'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=90',
    },
    {
      productName: 'White Solid Tshirt',
      productPrice: 34.99,
      productImage:
        'https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
    },
    {
      productName: 'Black Solid Tshirt',
      productPrice: 34.99,
      productImage:
        'https://images.unsplash.com/photo-1512327428889-607eeb19efe8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
    },
    {
      productName: 'Red Top (Women)',
      productPrice: 44.85,
      productImage:
        'https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
    },
  ]);

  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
    StatusBar.setBackgroundColor('#fff');
  }, []);

  if (!loaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }




  return (
    <>
    <StatusBar backgroundColor="#16222b" barStyle="light-content" />
    <View style={styles.container}>
      <View style={styles.green}>
        <Text style={styles.title}>Mis Puntos</Text>
        <Text style={styles.points}>5736</Text>
        <Text style={styles.ARS}>Equivalen a $423 ARS</Text>
      </View>

      <TouchableOpacity style={styles.opacity1}>
        <Text style={styles.opacityText}>Haciendo actividades online de poco tiempo crecen tus puntos y dinero para comprar lo que quieras</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.opacity2}>
        <Text style={styles.opacityText2}>Mirar anuncio</Text>
        <TouchableOpacity style={styles.adOpacity}>
          <Text style={styles.adOpacityText}>Ver</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
      margin: 15,
    },

    title: {
        textAlign: "left",
        top: 20,
        fontSize: 22,
        marginLeft: 12,
        color: "#FFFFFF",
        fontFamily: 'MontserratSemiBold',
      },

      points: {
        textAlign: "left",
        top: 20,
        marginLeft: 12,
        fontSize: 24,
        color: "#FFFFFF",
        fontFamily: 'MontserratBold',
      },

      ARS: {
        textAlign: "left",
        top: 42,
        marginLeft: 12,
        fontSize: 15,
        color: "#FFFFFF",
        fontFamily: 'MontserratBold',
      },

      adOpacity: {
        top: -50,
        left: 250,
        borderRadius: 10,
        margin: 0,
        width: 70,
        height: 40,
        backgroundColor: "#fff",
      },

      adOpacityText: {
        top: 10,
        right: -22,
        fontWeight: "bold",
      },

      opacity1: {
        top: 65,
        borderRadius: 15,
        margin: 10,
        height: 100,
        backgroundColor: "#16222b",
      },

      opacityText: {
        fontSize: 16,
        color: "#fff",
        margin: 18,
      },

      opacity2: {
        top: 65,
        borderRadius: 15,
        margin: 10,
        height: 70,
        backgroundColor: "#16222b",
      },

      opacityText2: {
        fontSize: 18,
        color: "#fff",
        margin: 20,
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
        backgroundColor: "#16222b",
        width: 360,
        height: 150,
      },

    icon: {
        top: 30,
        textAlign: "center",
      },
  });
