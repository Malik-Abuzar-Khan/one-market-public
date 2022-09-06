import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
// import StarsIcon from "../../../assets/icons/stars.svg";
// import MessageIcon from "../../../assets/icons/communication.svg";
// import CartIcon from "../../../assets/icons/cart.svg";
import floorMatImg from "../../../assets/images/item1.png";
import { StarsIcon, MessengerIcon } from "../svgs/svgs";

export default function ItemCard({itemImg}) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.ItemImgContainer}>
        <Image source={floorMatImg} alt="item_img" style={styles.itemImage}/>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.itemName}>Floor Mat</Text>
        <Text style={styles.itemDetail}>
          Dustproof Non skid 5D All Dustproof Non skid 5D All
        </Text>
        <StarsIcon width={50} height={20} />
      </View>
      <View style={styles.priceandCartContainer}>
        {/* <TouchableOpacity style={styles.priceBtn}> */}
        <View style={styles.priceBtn}>
          <Text style={styles.priceBtnText}>Rs 2000.00</Text>
          </View>
        {/* </TouchableOpacity> */}
        <View style={styles.cartAndMessangerContainer}>
          {/* <TouchableOpacity > */}
            <View style={styles.messangerBtn}>

            </View>
            {/* <Image
              source={MessageIcon}
              alt="message_icon"
              style={styles.messangerIcon}
            /> */}
          {/* </TouchableOpacity> */}
          {/* <TouchableOpacity > */}
            <View style={styles.cartBtn}>
              <MessengerIcon width={24} height={24}/>

            </View>
            {/* <Image source={CartIcon} alt="cart_icon" style={styles.cartIcon} /> */}
          {/* </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
}
