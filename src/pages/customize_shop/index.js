import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Header from "../../components/header";
import DpCover from "../../components/dp_cover";
import TableComp from "../../components/table";
import { SearchIcon } from "../../components/svgs/svgs";
import { auth } from "../../../firebase_config/config";
import {  getShopDataFromDb } from "./services";

export default function CustomizeShop() {
  const [shopInfo, setShopInfo] = useState([]);
  const currentUser = auth?.currentUser;

  function someConsole(){
    console.log("data: ", shopInfo[0].data)
  }

  useEffect(() => {
    getShopDataFromDb(currentUser, setShopInfo);
  }, []);
  return (
    <View style={styles.wrapperContainer}>
      <View>
        <View>
          <Header icons={false} />
        </View>
        <View style={styles.dpCoverMainContainer}>
          <DpCover shopData={shopInfo}/>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.searchIconContainer}>
            <SearchIcon color={"#404040"} />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Name of shop(Optional)"
          />
        </View>
        <TouchableOpacity
          onPress={someConsole}
          style={styles.addProductBtnContainer}
        >
          <Text style={styles.addProductBtnText}>Add Product</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.addProductTableContainer}>
        <TableComp />
      </View>
    </View>
  );
}
