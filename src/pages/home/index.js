import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
import Header from "../../components/header";
import { styles } from "./styles";
import { SearchIcon } from "../../components/svgs/svgs";
import FindShopCard from "../../components/find_shop_card";
import ShopCard from "../../components/shop_card";
import ItemCard from "../../components/item_card";
// import floorMatImg from "../../../assets/images/item1.png";
// import headLightImg from "../../../assets/images/item2.png";
var height = Dimensions.get("window").height;
var width = Dimensions.get("window").width;
export default function Home({navigation}) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.wrapperContainer}>
        <View>
          <Header icons={true} personIconOnPress={() =>  navigation.navigate("sign-in")}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search any part here..."
          />
          <View style={styles.searchIconContainer}>
            <SearchIcon color="#404040" />
          </View>
        </View>
        <ScrollView style={styles.verticalScroll}>
          <View style={styles.FindShopCardPB}>
            <FindShopCard />
          </View>
          <View style={styles.shopCardsContainer}>
            <ScrollView horizontal={true}>
              <TouchableOpacity >
              <ShopCard />
              </TouchableOpacity>
              <TouchableOpacity>
              <ShopCard />
              </TouchableOpacity>
              <TouchableOpacity>
              <ShopCard />
              </TouchableOpacity>
              <TouchableOpacity>
              <ShopCard />
              </TouchableOpacity>
              <TouchableOpacity>
              <ShopCard />
              </TouchableOpacity>
              <TouchableOpacity >
              <ShopCard />
              </TouchableOpacity>
              <TouchableOpacity>
              <ShopCard />
              </TouchableOpacity>
              <TouchableOpacity>
              <ShopCard />
              </TouchableOpacity>
              <TouchableOpacity>
              <ShopCard />
              </TouchableOpacity>
              <TouchableOpacity>
              <ShopCard />
              </TouchableOpacity>
              <TouchableOpacity >
              <ShopCard />
              </TouchableOpacity>
              <TouchableOpacity>
              <ShopCard />
              </TouchableOpacity>
              <TouchableOpacity>
              <ShopCard />
              </TouchableOpacity>
              <TouchableOpacity>
              <ShopCard />
              </TouchableOpacity>
              <TouchableOpacity>
              <ShopCard />
              </TouchableOpacity>
              <TouchableOpacity >
              <ShopCard />
              </TouchableOpacity>
              <TouchableOpacity>
              <ShopCard />
              </TouchableOpacity>
              <TouchableOpacity>
              <ShopCard />
              </TouchableOpacity>
              <TouchableOpacity>
              <ShopCard />
              </TouchableOpacity>
              <TouchableOpacity>
              <ShopCard />
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={styles.ItemCardContainer}>
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
