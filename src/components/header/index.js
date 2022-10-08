import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { HamburgerIcon, AppIcon, PersonIcon } from "../svgs/svgs";
import Navigator from "../navigator";
import * as RootNavigator from "../../source_services/root=navigation";
import { auth } from "../../../firebase_config/config";
import {useDispatch} from "react-redux";
import { onAuthStateChanged } from "firebase/auth";


export default function Header({ logOut }) {
  const [showNavigator, setShowNavigator] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const dispatch = useDispatch;

  useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setCurrentUser(user);
          dispatch(newUserdataGetter(user));
        } else {
          setCurrentUser("");
        }
      });
  },[])

  return (
    <View style={styles.headerMainContainer}>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setShowNavigator(true)}
        >
          <HamburgerIcon />
        </TouchableOpacity>
      </View>
      <View style={{ ...styles.appIconContainer }}>
        <View style={styles.button}>
          <AppIcon />
          <Text style={styles.heading}>
            ONE<Text style={styles.span}>MARKET</Text>
          </Text>
        </View>
      </View>
      {!currentUser?.uid ? (
        <View style={styles.iconsBtnContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => RootNavigator.navigate("sign-in")}
          >
            <PersonIcon
              height={styles.personIcon.height}
              color={styles.personIcon.color}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity style={styles.logoutButton} onPress={logOut}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
      )}
      {showNavigator && (
        <Navigator
          crossIconOnPress={() => setShowNavigator(false)}
          setShowNavigator={setShowNavigator}
          navigation={RootNavigator}
        />
      )}
    </View>
  );
}
