import React, { useState, useEffect, useRef } from 'react';
import { DataTable, List, Divider, Button, Modal, Portal, Checkbox } from 'react-native-paper';
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
import DropDownPicker from "react-native-dropdown-picker";

import { useFonts } from 'expo-font';
import { useNavigation } from "@react-navigation/native";

import MontserratRegular from '../../../assets/fonts/Montserrat/Montserrat-Regular.ttf';
import MontserratBold from '../../../assets/fonts/Montserrat/Montserrat-Bold.ttf';
import MontserratExtraBold from '../../../assets/fonts/Montserrat/Montserrat-ExtraBold.ttf';
import MontserratSemiBold from '../../../assets/fonts/Montserrat/Montserrat-SemiBold.ttf';

export default function MyStatus(props) {
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
  const [checked, setChecked] = React.useState(false);


  return (
    <>
    <StatusBar backgroundColor="#c2303f" barStyle="light-content" />
    <View>
        <Text style={styles.text1}>Estado actual:</Text>
        <Text style={styles.text2}>Inactivo</Text>
        <Text></Text>
        <Divider></Divider>
        <Divider></Divider>
        <Divider></Divider>
        
        <Text style={styles.text3}>Si estas interesado podes ofrecerte como repartidor aunque no tengas un horario asignado</Text>

        <Divider></Divider>
        <Divider></Divider>
        <Divider></Divider>

        <Button mode="contained" style={styles.button1} onPress={showModal}>Estoy disponible</Button>


        <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
            <Text>Seleccioná tu zona</Text>
            <Text></Text>

            <DropDownPicker
              items={[
                {
                  label: "Zona norte",
                  value: 1,
                },
                {
                  label: "Zona sur",
                  value: 2,
                },
                {
                  label: "Zona este",
                  value: 3,
                },
                {
                  label: "Zona oeste",
                  value: 4,
                },
              ]}
              defaultValue={quantity}
              containerStyle={styles.containerStyle}
              itemStyle={styles.itemStyle}
              dropDownStyle={styles.dropDownPicker}
              style={styles.dropDownPicker}
              labelStyle={styles.labelStyle}
              onChangeItem={(item) => setQuantity(item.value)}
            />

            <Text></Text>
            <Text>Seleccioná tu vehiculo</Text>
            <Text></Text>

            <DropDownPicker
              items={[
                {
                  label: "Auto",
                  value: 1,
                },
                {
                  label: "Moto",
                  value: 2,
                },
                {
                  label: "Bicicleta",
                  value: 3,
                },
              ]}
              defaultValue={quantity}
              containerStyle={styles.containerStyle}
              itemStyle={styles.itemStyle}
              dropDownStyle={styles.dropDownPicker}
              style={styles.dropDownPicker}
              labelStyle={styles.labelStyle}
              onChangeItem={(item) => setQuantity(item.value)}
            />

            <Text></Text>

            <Checkbox.Item label="Acepto los términos" status={checked ? 'checked' : 'unchecked'} onPress={() => {
                setChecked(!checked);
              }} />

            <TouchableOpacity style={styles.button2} onPress={navigation.navigate("delivery-main")  }> 
              <Text style={styles.text4}>COMENZAR</Text>
            </TouchableOpacity>
        </Modal>
    </Portal>

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

    
    text4: {
      textAlign: 'center',
      fontSize: 15,
      color: "#fff",
      marginTop: 10,
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

    button2: {
      margin: 5,
      marginTop: 8,
      backgroundColor: "#c2303f",
      borderRadius: 4,
      height: 40,
  },

    view: {
        height: 500,
        width: 500,
        backgroundColor: "#727272",
    },
  });