import React, { useState, useEffect } from "react";
import { ScrollView, View, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./styles";
import { SearchIcon } from "../../components/svgs/svgs";
import FindShopCard from "../../components/find_shop_card";
import ShopCard from "../../components/shop_card";
import ItemCard from "../../components/item_card";
import {
  getShops,
  getItems,
  navigateToShop,
  navigateToViewItem,
} from "./services";
import { useDispatch } from "react-redux";
import Loader from "../../components/app_loader";

export default function Home({ navigation }) {
  const [shops, setShops] = useState([]);
  const [shopsItems, setShopsItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = getShops(setShops, dispatch, setLoading);
    return () => unsub;
  }, []);

  useEffect(() => {
    const unsub = getItems(setShopsItems, dispatch, setLoading);
    return () => unsub;
  }, []);

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.wrapperContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Search any part here..."
            />
            <TouchableOpacity
              onPress={() => setcount((prev) => prev + 1)}
              style={styles.searchIconContainer}
            >
              <SearchIcon color={styles.searchIconColor} />
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.verticalScroll}>
            <View style={styles.FindShopCardPB}>
              <FindShopCard />
            </View>
            <View style={styles.shopCardsContainer}>
              <ScrollView horizontal={true}>
                {shops?.map((data) => (
                  <TouchableOpacity
                    key={data?.token}
                    onPress={() =>
                      navigateToShop(dispatch, data?.token, navigation)
                    }
                  >
                    <ShopCard
                      uri={
                        data?.shop_cover_picture !== ""
                          ? data?.shop_cover_picture
                          : "https://sanaxmedical.com.au/wp-content/uploads/2015/06/No_image_available-10.jpg"
                      }
                      shopName={data?.shop_name}
                      extraStyles={styles.marginTop}
                    />
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
            <View style={styles.ItemCardContainer}>
              {shopsItems?.map((i) => (
                <TouchableOpacity
                  key={i?.docId}
                  onPress={() => navigateToViewItem(dispatch, i, navigation)}
                >
                  <ItemCard
                    uri={i?.uri}
                    producName={i?.productName}
                    productDescription={i?.productDescription}
                    productPrice={i?.productPrice}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
      {loading && <Loader />}
    </>
  );
}
