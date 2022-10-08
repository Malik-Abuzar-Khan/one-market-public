import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import DpCover from "../../components/dp_cover";
import TableComp from "../../components/table";
import { SearchIcon } from "../../components/svgs/svgs";
import { auth } from "../../../firebase_config/config";
import { getProducts, getShopDataFromDb } from "./services";
import AddProductForm from "../../components/add_product_form";
import Loader from "../../components/app_loader";

export default function CustomizeShop({ signOutLoading, setCurrentUserToken }) {
  const [shopInfo, setShopInfo] = useState([]);
  const [createProductScreen, setCreateProductScreen] = useState(false);
  const [products, setProducts] = useState([]);

  let currentUser = auth?.currentUser;

  useEffect(() => {
    const unsub = getShopDataFromDb(currentUser, setShopInfo);
    return () => unsub;
  }, []);

  useEffect(() => {
    setCurrentUserToken(currentUser?.uid);
    const unsub = getProducts(currentUser?.uid, setProducts);
    return () => unsub;
  }, []);

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.wrapperContainer}>
          <View>
            <View style={styles.dpCoverMainContainer}>
              <DpCover shopInfo={shopInfo} currentUser={currentUser} />
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
              onPress={() => setCreateProductScreen(true)}
              style={styles.addProductBtnContainer}
            >
              <Text style={styles.addProductBtnText}>Add Product</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.addProductTableContainer}>
            <TableComp products={products} />
          </View>
        </View>
        {createProductScreen && (
          <AddProductForm setCreateProductScreen={setCreateProductScreen} />
        )}
      </View>
      {signOutLoading && <Loader />}
    </>
  );
}
