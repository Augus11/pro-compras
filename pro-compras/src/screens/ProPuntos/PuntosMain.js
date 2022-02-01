import React, { useState, useEffect, useRef } from 'react';
import { DataTable, List } from 'react-native-paper';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';

import Constants from 'expo-constants';
import { Tab } from 'react-native-elements';
import { Ionicons as Icon, FontAwesome as FAIcon } from '@expo/vector-icons';

import { useFonts } from 'expo-font';
import { useNavigation } from "@react-navigation/native";

import MontserratRegular from '../../../assets/fonts/Montserrat/Montserrat-Regular.ttf';
import MontserratBold from '../../../assets/fonts/Montserrat/Montserrat-Bold.ttf';
import MontserratExtraBold from '../../../assets/fonts/Montserrat/Montserrat-ExtraBold.ttf';
import MontserratSemiBold from '../../../assets/fonts/Montserrat/Montserrat-SemiBold.ttf';

const Rating = ({ rating, maxRating }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {Array(rating)
        .fill(1)
        .map((el) => (
          <FAIcon name='star' size={20} color='#2e2e2e' />
        ))}
      {Array(maxRating - rating)
        .fill(1)
        .map((el) => (
          <FAIcon name='star-o' size={20} color='#2e2e2e' />
        ))}
    </View>
  );
};

export default function ProductScreen1() {
  const navigation = useNavigation();
  const [loaded] = useFonts({
    MontserratRegular,
    MontserratBold,
    MontserratExtraBold,
    MontserratSemiBold,
  });

  const [isFavourite, setFavourite] = useState(false);
  const [index, setIndex] = useState(false);
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
    <View>
    <ScrollView>

      <View style={styles.container2}>
        <View style={styles.container}>
          <Text style={styles.title}>Mis Cosas</Text>

          <TouchableOpacity style={styles.op1} onPress={() => navigation.navigate("ChatScreen")}>
            <Icon name="chatbox-ellipses-outline" size={25} color="#000" style={styles.icon1}></Icon>
          </TouchableOpacity>

          <TouchableOpacity style={styles.op2}>
            <Icon name="notifications-outline" size={25} color="#000" style={styles.icon2}></Icon>
          </TouchableOpacity>

          <TouchableOpacity style={styles.op3}>
            <FAIcon name="user-o" size={22} color="#000" style={styles.icon3}></FAIcon>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.upText}>Mi Dinero</Text>
        <Text style={styles.upText2}>Mis Puntos</Text>
      </View>
      
      <View style={styles.container}>
        <TouchableOpacity style={styles.opacity1}>
          <View style={styles.container}>
            <FAIcon name="money" color="#FFF" size={25} style={styles.icon}></FAIcon>
            <Text style={styles.adOpacityText}>5383</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.opacity1} onPress={() => navigation.navigate("puntos")}>
          <View style={styles.container}>
            <FAIcon name="star"  color="#FFF" size={23} style={styles.icon}></FAIcon>
            <Text style={styles.adOpacityText}>5383</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Text style={styles.upText} >Mis Deseos</Text>
        <Text style={styles.upText2}>Mis Gastos</Text>
      </View>

      <View style={styles.container}>
        <TouchableOpacity style={styles.opacity1} onPress={() => navigation.navigate("favorites")}>
          <View style={styles.container}>
            <FAIcon name="heart"  color="#FFF" size={22} style={styles.icon}></FAIcon>
            <Text style={styles.adOpacityText}>5383</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.opacity1}>
          <View style={styles.container}>
            <FAIcon name="dollar"  color="#FFF" size={22} style={styles.icon}></FAIcon>
            <Text style={styles.adOpacityText}>5383</Text>
          </View>
        </TouchableOpacity>
      </View>


      <TouchableOpacity style={styles.opAd}>
        <Text style={styles.text45}>Haciendo simples actividades se reducen tus deudas y crecen tus puntos para comprar lo que quieras</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button01} onPress={() => navigation.navigate("favorites")}>
          <View style={styles.container}>
            <FAIcon name="play"  color="#FFF" size={22} style={styles.icon5}></FAIcon>
            <Text style={styles.opacity01btn}>Mirar anuncio</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button02} onPress={() => navigation.navigate("favorites")}>
          <View style={styles.container}>
            <Icon name="share-social"  color="#FFF" size={25} style={styles.icon4}></Icon>
            <Text style={styles.opacity01btn}>Compartir la app</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button03} onPress={() => navigation.navigate("favorites")}>
          <View style={styles.container}>
            <Icon name="link-outline"  color="#FFF" size={25} style={styles.icon}></Icon>
            <Text style={styles.opacity01btn}>Acceder y mirar enlaces</Text>
          </View>
        </TouchableOpacity>
        </ScrollView>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
      margin: 15,
    },

    text45: {
      margin: 12,
      fontFamily: "MontserratSemiBold"

    },

    container2: {
      backgroundColor: "#c2303f",
      height: 60,
    },

    upText: {
      textAlign: "center",
      margin: 5,
      left: 46,
      bottom: -20,
      fontFamily: "MontserratSemiBold"
    },

    upText2: {
      textAlign: "center",
      margin: 5,
      left: 130,
      bottom: -20,
      fontFamily: 'MontserratSemiBold',
    },

    title: {
        fontSize: 20,
        marginLeft: 20,
        marginTop: 16,
        fontFamily: 'MontserratSemiBold',
        margin: 8,
        color: "#fff",
      },

      points: {
        textAlign: "left",
        top: 20,
        marginLeft: 12,
        fontSize: 24,
        color: "#FFFFFF",
        fontFamily: 'MontserratBold',
      },

      button01: {
        borderRadius: 8,
        margin: 20,
        height: 55,
        width: 320,
        borderWidth: 3,
        borderColor: "#fff",
        backgroundColor: "#c2303f",
        bottom: 50,
      },

      button02: {
        borderRadius: 8,
        margin: 20,
        height: 55,
        width: 320,
        borderWidth: 3,
        borderColor: "#fff",
        backgroundColor: "#c2303f",
        bottom: 88
      },

      button03: {
        borderRadius: 8,
        margin: 20,
        height: 55,
        width: 320,
        borderWidth: 3,
        borderColor: "#fff",
        backgroundColor: "#c2303f",
        bottom: 125,
      },

      opacity01btn: {
        top: 12,
        textAlign: 'center',
        left: 20,
        fontFamily: "MontserratSemiBold",
        fontSize: 16,
        color: "#fff"      },

      op1: {
        backgroundColor: "#fff",
        height: 38,
        margin: 10,
        borderRadius: 5,
        top: 2,
        left: 62,
      },

      op2: {
        backgroundColor: "#fff",
        height: 38,
        margin: 10,
        borderRadius: 5,
        left: 50,
        top: 2,
      },

      op3: {
        backgroundColor: "#fff",
        height: 40,
        margin: 10,
        borderRadius: 25,
        left: 50,
      },

      opAd: {
        borderColor: "#c2303f",
        borderRadius: 5,
        borderWidth: 3,
        height: 110,
        margin: 24,
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
        textAlign: 'center',
        left: 20,
        fontFamily: "MontserratSemiBold",
        fontSize: 16,
        color: "#fff"
      },

      opacity1: {
        top: 0,
        borderRadius: 5,
        margin: 20,
        height: 50,
        width: 140,
        borderWidth: 3,
        borderColor: "#fff",
        backgroundColor: "#c2303f",
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
      flexDirection: "row",
      },

    icon: {
      margin: 10,
      },

      icon1: {
        top: 0,
        margin: 8,
        },

      icon2: {
        top: 0,
        margin: 8,
        },

        icon3: {
          top: 2,
          margin: 8,
          },

        icon4: {
          top: 3,
          margin: 8,
          },

          icon5: {
            top: 3,
            margin: 10,
            },
  });