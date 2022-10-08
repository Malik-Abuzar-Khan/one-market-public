import React from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import ViewCard from "../../components/view_card";
import { useSelector } from "react-redux";
import ItemCard from "../../components/item_card";

export default function Item() {
  const cardData = useSelector((state) => state.viewCaedData.data);
  const allItemsdata = useSelector((state) => state.allItems.data);

  return (
    <View style={styles.mainContainer}>
      <View>
        <ViewCard uri={cardData?.uri} price={cardData?.productPrice} productName={cardData?.productName}/>
        <ScrollView style={{ height: "42%", marginTop: 10 }}>
            <View>
              {allItemsdata?.map((i) => (
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
  );
}