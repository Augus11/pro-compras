import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, Text, View, TouchableOpacity } from "react-native";
import StatusBar from "../../components/StatusBar";
import Search from "../../components/Search";
import ScreenLoading from "../../components/ScreenLoading";
import CarouselImages from "../../components/Product/CarouselImages";
import Price from "../../components/Product/Price";
import Quantity from "../../components/Product/Quantity";
import Buy from "../../components/Product/Buy";
import Favorite from "../../components/Product/Favorite";
import { getProductApi } from "../../api/product";
import colors from "../../styles/colors";

import MontserratRegular from '../../../assets/fonts/Montserrat/Montserrat-Regular.ttf';
import MontserratBold from '../../../assets/fonts/Montserrat/Montserrat-Bold.ttf';
import MontserratExtraBold from '../../../assets/fonts/Montserrat/Montserrat-ExtraBold.ttf';
import { Feather as Icon, FontAwesome as FAIcon, MaterialCommunityIcons as MIcon } from '@expo/vector-icons';



export default function Product(props) {
  const { route } = props;
  const { params } = route;
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [seeFullDescription, setSeeFullDescription] = useState(false);
  const [productDescription] = useState(
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut ornare urna. Duis egestas ligula quam, ut tincidunt ipsum blandit at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae justo congue, tempor urna vitae, placerat elit. Nulla nec consectetur dolor, in convallis erat. Fusce hendrerit id sem tristique congue. \n\nVestibulum mauris sapien, vulputate in lacus in, lacinia efficitur magna. Sed id massa ut magna eleifend lacinia et id tellus. Sed dignissim mollis lacus. Etiam laoreet ex eu sem euismod congue. In maximus porttitor imperdiet. Nulla eu dolor vehicula ligula mollis tristique ut in enim. Phasellus quis tempor velit. Vivamus sit amet orci ornare, pulvinar purus et, commodo magna. Nunc eu tortor vitae leo varius vehicula quis volutpat dolor.\n\nDonec interdum rutrum tellus, et rhoncus risus dignissim at. Aliquam sed imperdiet tortor, non aliquam sapien. Cras quis enim a elit fringilla vehicula. Aenean pulvinar ipsum a magna feugiat, a fermentum ante pellentesque. Mauris tincidunt placerat placerat. Quisque tincidunt enim sed metus fermentum maximus. Fusce eu tempus est.`
  );

  useEffect(() => {
    (async () => {
      const response = await getProductApi(params.idProduct);
      setProduct(response);

      const arrayImages = [response.main_image];
      arrayImages.push(...response.images);
      setImages(arrayImages);
    })();
  }, [params]);

  return (
    <>
      <StatusBar backgroundColor="#c2303f" barStyle="light-content" />
      <Search />
      {!product ? (
        <ScreenLoading text="Cargando producto" size="large" />
      ) : (
        <ScrollView contentContainerStyle={styles.container}>
          <CarouselImages style={styles.carrousel} images={images} />
          <Text style={styles.productTitle}>{product.title}</Text>
          <Price price={product.price} discount={product.discount} />
          <Quantity quantity={quantity} setQuantity={setQuantity} />
          
          <Text> {product.ShopName}</Text>

          <View style={{ flexDirection: 'row', paddingHorizontal: 0 }}>
            <Buy product={product} quantity={quantity} />
            <Favorite product={product} />
          </View>

          <Text style={styles.desc}>Informacion del vendedor</Text>
          <View style={{ flexDirection: 'row', paddingHorizontal: 0 , marginBottom: 10}}>
            <MIcon name="store" size={23}></MIcon>
            <Text style={{ fontFamily: 'MontserratRegular', fontSize: 18}}>{product.ShopName}</Text>
          </View>

          <View style={{ flexDirection: 'row', paddingHorizontal: 0 }}>
            <MIcon name="map-marker" size={23}></MIcon>
            <Text style={{ fontFamily: 'MontserratRegular', fontSize: 17 }}>Avenida Libertador 335, Belgrano</Text>
          </View>

          <View style={{ marginTop: 10, backgroundColor: '#fff' }}>
          <TouchableOpacity
            style={styles.productDescriptionHeader}
            onPress={() => setSeeFullDescription((prev) => !prev)}
          >
            <Text style={{ fontFamily: 'MontserratBold', fontSize: 18 }}>
              Descripción
            </Text>
            <TouchableOpacity
              onPress={() => setSeeFullDescription((prev) => !prev)}
            >
              {seeFullDescription ? (
                <Icon name='chevron-up' size={26} />
              ) : (
                <Icon name='chevron-down' size={26} />
              )}
            </TouchableOpacity>
          </TouchableOpacity>
          <View style={{ padding: 10 }}>
            <Text style={{ fontFamily: 'MontserratRegular' }}>
              {seeFullDescription
                ? `${productDescription}`
                : `${productDescription.split('\n')[0]}`}
            </Text>
          </View>
        </View>

        </ScrollView>
      )}
    </>
  );
}



const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 50,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    marginLeft: 10,
  },

  desc: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },

  descText: {
    fontSize: 20,
    marginTop: 20,
  },

  btnBuyContent: {
    backgroundColor: "#008fe9",
    paddingVertical: 5,
  },
  btnBuyLabel: {
    fontSize: 18,
  },
  btnBuy: {
    marginTop: 20,
  },

  carrousel: {

  },











  productTitle: {
    fontSize: 20,
    fontFamily: 'MontserratExtraBold',
  },
  productPriceView: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  discountedPriceText: { fontFamily: 'MontserratBold', fontSize: 20 },
  actualPriceText: {
    color: '#222',
    marginLeft: 10,
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
    width: 0,
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
