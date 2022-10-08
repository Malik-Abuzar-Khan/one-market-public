import React, { useEffect, useState } from "react";
import { View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "../customize_shop/styles";
import { compStyles } from "./styles";
import DpCover from "../../components/dp_cover";
import { SearchIcon } from "../../components/svgs/svgs";
import { useSelector } from "react-redux";
import { getShopInfo } from "./services";
import ItemCard from "../../components/item_card";

export default function Shop() {
  const [shopItems, setShopItmes] = useState([]);
  const token = useSelector((state) => state.token.token);
  const shopInfo = useSelector((state) => state.shops.data).filter(
    (item) => item.token === token
  );
  useEffect(() => {
    const unsub = getShopInfo(token, setShopItmes);
    return () => unsub;
  }, []);
  const currentUser = [];
  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.wrapperContainer}>
          <View>
            <View style={styles.dpCoverMainContainer}>
              <DpCover
                shopInfo={shopInfo}
                currentUser={currentUser}
                selectCoverBtn={false}
                addBtn={false}
                editBtn={false}
              />
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
          </View>
          <ScrollView style={{ height: "48%", marginTop: 10 }}>
            <View style={compStyles.ItemCardContainer}>
              {shopItems?.map((i) => (
                <TouchableOpacity key={i?.docId}>
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
    </>
  );
}
