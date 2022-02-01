import React, { useState, useEffect, useRef } from 'react';
import { DataTable, List, Divider, Button, Modal, Portal, Text } from 'react-native-paper';
import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Constants from 'expo-constants';
import { Tab } from 'react-native-elements';
import { Ionicons as Icon, FontAwesome as FAIcon } from '@expo/vector-icons';

import { useFonts } from 'expo-font';
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";

import MontserratRegular from '../../../assets/fonts/Montserrat/Montserrat-Regular.ttf';
import MontserratBold from '../../../assets/fonts/Montserrat/Montserrat-Bold.ttf';
import MontserratExtraBold from '../../../assets/fonts/Montserrat/Montserrat-ExtraBold.ttf';
import MontserratSemiBold from '../../../assets/fonts/Montserrat/Montserrat-SemiBold.ttf';

export default function DeliveryRequirements(props) {
  const navigation = useNavigation();
  const [loaded] = useFonts({
    MontserratRegular,
    MontserratBold,
    MontserratExtraBold,
    MontserratSemiBold,
  });

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20, margin: 10,};
  const [selectedLanguage, setSelectedLanguage] = useState();
  const { quantity, setQuantity } = props;




  return (
    <>
    <StatusBar backgroundColor="#c2303f" barStyle="light-content" />
    <View>

    <Button style={{marginTop: 30}} onPress={showModal}>
        Show
      </Button>

      <Text></Text>

      

                    
    

    </View>
    <View stye={styles.view}></View>

    </>
  );
}

const styles = StyleSheet.create({
    container: {
      margin: 15,
    },

    containerStyle: {
      height: 40,
    },
    itemStyle: {
      justifyContent: "flex-start",
    },
    dropDownStyle: {
      backgroundColor: "#fafafa",
    },
    dropDownPicker: {
      backgroundColor: "#fafafa",
    },
    labelStyle: {
      color: "#000",
    },

    picker: {
        width: 300,
        height: 45,
        borderColor: "blue",
        borderWidth: 1,
        backgroundColor: "#80bdae",
    },

    text1: {
        textAlign: 'center',
        fontSize: 17,
        marginTop: 15,
        marginBottom: -10,
    },

    text2: {
        textAlign: 'center',
        fontSize: 25,
        marginTop: 10,
        color: "#a7a7a7",
    },

    text3: {
        textAlign: 'left',
        fontSize: 15,
        margin: 10,
        color: "#a7a7a7",
    },

    button1: {
        margin: 5,
        marginTop: 8,
        backgroundColor: "#c2303f",
    },

    view: {
        height: 500,
        width: 500,
        backgroundColor: "#727272",
    },
  });