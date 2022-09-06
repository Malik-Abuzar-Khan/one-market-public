import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import defaultShopCover from "../../../assets/images/no_cover.webp";
import defaultProfilePicture from "../../../assets/images/profile-picture.jpg";
import { EditIcon } from "../svgs/svgs";

export default function DpCover({ shopData }) {
  const data = shopData ? shopData[0]?.data : {};
  const shopName = data?.shop_name;
  const shopDescription = data?.shop_description;
  const shopProfilePicture = data?.shop_profile_picture;
  const shopCover = data?.shop_cover_picture;

  function someConsole() {
    console.log("newname: ", data);
    console.log("newname: ", shopDescription);
    console.log("newname: ", shopProfilePicture);
    console.log("newname: ", shopCover);
  }

  return (
    <View style={styles.coverAndProfileContainer}>
      <View style={styles.coverContainer}>
        <View style={styles.coverImageContainer}>
          <Image
            source={shopCover !== "" ? shopCover : defaultShopCover}
            alt="shop_cover"
            style={styles.coverImage}
          />
        </View>
        <View style={styles.shopDiscriptionContainer}>
          <View style={styles.shopNameWrapperContainer}>
            <View style={styles.shopNameContainer}>
              <Text style={styles.shopName}>
                {shopName !== "" ? shopName : "Add your shop name"}
              </Text>
              <TouchableOpacity onPress={() => someConsole()}>
                <EditIcon width={22} height={22} color="#f1f1f1" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.shopDetailsWrapperContainer}>
            <Text style={styles.shopDetails}>
              {shopDescription !== ""
                ? shopDescription
                : "Please add some descrition about your shop"}
            </Text>
          </View>
        </View>
        <View style={styles.profileImageContainer}>
          <Image
            source={
              shopProfilePicture !== ""
                ? shopProfilePicture
                : defaultProfilePicture
            }
            alt="profile_image"
            style={styles.profileImage}
          />
        </View>
      </View>
    </View>
  );
}
