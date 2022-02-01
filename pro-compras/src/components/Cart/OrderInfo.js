import React from "react";
import { map } from "lodash";
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { Appbar } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";

import { Surface, Button, Divider, ScrollBar, DataTable } from 'react-native-paper';
import { IconButton } from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function OrderInfo(props) {
  const navigation = useNavigation();
  const { order } = props;
  const { totalPayment, selectedAddress, products } = props;
  //console.log(order);
  console.log(totalPayment);

  return (
    <View>

      <View>
          <Text></Text>

          <ScrollView>
          <View>
          {map(order, (item) => (
            <View  key={item._id}>
              <View style={styles.container}>
                <Text style={styles.textBar}>NUEVA ORDEN</Text>
                <Button style={styles.button} labelStyle={{ color: "blue"}}>Rechazar</Button>
              </View>

            <View>
              <Button style={styles.map} labelStyle={{top: 10}}>
                 VER EN EL MAPA
               </Button>
            </View>

              <View style={styles.main}>
                
                <Appbar.Header style={styles.appbar2}>
                <Appbar.Content title={item.ShopName} subtitle={item.ShopAdress} />
                  <Appbar.Action icon="magnify" onPress={() => {}} />
                  <Appbar.Action icon="food" onPress={() => {}} />
                </Appbar.Header>

                <Divider></Divider>

                <Appbar.Header style={styles.appbar2}>
                <Appbar.Content title={item.BuyerUsername} subtitle={item.BuyerAdress} />
                  <Appbar.Action icon="magnify" onPress={() => {}} />
                  <Appbar.Action icon="face" onPress={() => {}} />
                </Appbar.Header>

                <DataTable style={styles.datatable}>
                  <DataTable.Header>
                    <DataTable.Title sortDirection='descending'>
                      Productos
                    </DataTable.Title>
                    <DataTable.Title numeric>Cantidad</DataTable.Title>
                  </DataTable.Header>
                  
                  <DataTable.Row>
                    <DataTable.Cell >{item.product1}</DataTable.Cell>
                    <DataTable.Cell numeric>1</DataTable.Cell>
                  </DataTable.Row>

                  <DataTable.Row>
                    <DataTable.Cell >{item.product2}</DataTable.Cell>
                    <DataTable.Cell numeric>1</DataTable.Cell>
                  </DataTable.Row>

                  <DataTable.Row>
                    <DataTable.Cell >{item.product3}</DataTable.Cell>
                    <DataTable.Cell numeric>1</DataTable.Cell>
                  </DataTable.Row>
                </DataTable>

                <Button mode="contained" style={styles.buttonConfirm}>Tomar Pedido</Button>


                <Text></Text>
                <Text></Text>


                <Text></Text>
                <Text></Text>

              </View>
          </View>
          ))}
          </View>
          </ScrollView>
    </View>
  </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    top: -22,
  },

  containerr: {
    height: 10,
    justifyContent: "center",
    padding: 20,
  },

  datatable: {
    top: 12,
  },

  main: {
    marginTop: 0,
    top: -25,
  },

  button: {
    height: 40,
    width: 142,
    margin: 20,
    padding: 0,
    top: -8,
    textAlign: "center",
    fontSize: 2,
    color: "#15212b",
    left: 28,
  },

  buttonConfirm: {
    width: 310,
    top: 25,
    left: 24,
    backgroundColor: "#dc4410",
  },

  map: {
    margin: 20,
    top: -55,
    height: 135,
    width: 316,
    backgroundColor: "#ededed",
  },

  Info1: {
    top: 0,
    color: "#FFFFFF",
    margin: 0,
    height: 0,
  },

  appbar2: {
    backgroundColor: "#FFFFFF",
    paddingBottom: 20,
  },

  textBar: {
    height: 40,
    width: 122,
    margin: 20,
    padding: 0,
    top: 0,
    textAlign: "left",
    fontSize: 15,
    fontWeight: "bold",
  },

  title: {
    fontSize: 20,
  },

  textMap: {
    
    textAlign: "center",
  },

  titleName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  surface: {
    margin: 0,
  },

  icon: {
    left: 10,
  },

});