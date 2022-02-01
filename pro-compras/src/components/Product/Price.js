import React from "react";
import { StyleSheet, View, Text } from "react-native";

import MontserratRegular from '../../../assets/fonts/Montserrat/Montserrat-Regular.ttf';
import MontserratBold from '../../../assets/fonts/Montserrat/Montserrat-Bold.ttf';
import MontserratExtraBold from '../../../assets/fonts/Montserrat/Montserrat-ExtraBold.ttf';

export default function Price(props) {
  const { price, discount } = props;

  const calcPrice = (price, discount) => {
    if (!discount) return price;

    const discountAmount = (price * discount) / 100;
    return (price - discountAmount).toFixed(2);
  };

  return (
    <View style={styles.prices}>
      {discount && (
        <View style={styles.conatinerData}>
         
        </View>
      )}
      <View style={styles.conatinerData}>
        <Text style={[styles.dataValue, styles.discountedPriceText]}>
          
          $ {calcPrice(price, discount)} 
        </Text>
        <Text style={[styles.dataValue, styles.actualPriceText]}>{price} €</Text>

      </View>

      {discount && (
        <View style={styles.conatinerData}>
          <Text style={styles.dataText}>Ahorras:</Text>
          <Text style={[styles.dataValue, styles.saving]}>
            {((price * discount) / 100).toFixed(2)} € ({discount}%)
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  conatinerData: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  dataText: {
    width: "45%",
    fontSize: 18,
    color: "#747474",
    textAlign: "right",
  },
  dataValue: {
    width: "55%",
    fontSize: 18,

    paddingLeft: 5,
  },
  oldPrice: {
    textDecorationLine: "line-through",
  },
  currentPrice: {
    fontSize: 25,
    color: "#bc0e0d",
    fontWeight: "bold",
  },
  saving: {
    color: "#bc0e0d",
  },








  productTitle: {
    fontSize: 24,
    fontFamily: 'MontserratExtraBold',
  },
  productPriceView: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  discountedPriceText: { fontFamily: 'MontserratBold', fontSize: 20,     marginLeft: -5,},
  actualPriceText: {
    color: '#222',
    marginLeft: -65,
    textDecorationLine: 'line-through',
    fontSize: 18,
    fontFamily: 'MontserratRegular',
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
    fontSize: 16,
    color: '#fff',
    fontFamily: 'MontserratBold',
  },
  tag: {
    borderRadius: 4,
    backgroundColor: '#FFF',
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  tagLabel: {
    fontFamily: 'MontserratBold',
    color: '#333',
  },
  tagSelected: {
    backgroundColor: '#333',
    borderRadius: 4,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  tagLabelSelected: {
    fontFamily: 'MontserratBold',
    color: '#FFF',
  },
  productDescriptionHeader: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#dfe4fe',
  },
  moreProductImageView: {
    flex: 1,
    height: 240,
    backgroundColor: '#fff',
    borderRadius: 4,
    overflow: 'hidden',
  },
  moreProductName: {
    fontFamily: 'MontserratBold',
    fontSize: 16,
  },
  moreProductPriceView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  moreProductPrice: {
    fontSize: 16,
    fontFamily: 'MontserratRegular',
  },
  moreProductIcon: {
    marginLeft: 10,
  },
  moreProductBuyButton: {
    backgroundColor: '#111',
    marginTop: 10,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreProductBuyButtonText: {
    color: '#fff',
    fontFamily: 'MontserratBold',
    fontSize: 18,
  },
});


