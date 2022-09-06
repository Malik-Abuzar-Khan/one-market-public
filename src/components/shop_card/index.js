import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./styles";
import shopImage from "../../../assets/images/shop2.png";

export default function ShopCard() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={shopImage}
          alt="shop_img"
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>ShopCardShopCardShopCard</Text>
      </View>
    </View>
  );
}