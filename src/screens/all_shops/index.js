import React from "react";
import { View, TextInput, ScrollView, TouchableOpacity } from "react-native";
import ShopCard from "../../components/shop_card";
import { styles } from "./styles";
import { SearchIcon } from "../../components/svgs/svgs";
import { useSelector } from "react-redux";

export default function AllShops() {
  const shopsData = useSelector((state) => state.shops.data);
  return (
    <View>
      <View style={styles.wrapperContainer}>
        <View style={styles.inputMainContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Search any part here..."
            />
            <TouchableOpacity style={styles.searchIconContainer}>
              <SearchIcon color={styles.searchIconColor} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={styles.scrollHeight}>
          <View style={styles.scrollMainContainer}>
            {shopsData?.map((data) => (
              <ShopCard
                extraStyles={styles.marginTop}
                uri={data?.shop_cover_picture}
                shopName={data?.shop_name}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
