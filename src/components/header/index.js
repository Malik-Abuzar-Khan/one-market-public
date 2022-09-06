import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { HamburgerIcon, AppIcon, PersonIcon } from "../svgs/svgs";

export default function Header({ icons = true, personIconOnPress }) {
  return (
    <View style={styles.headerMainContainer}>
      <View>
        <View style={styles.button}>
          <HamburgerIcon />
        </View>
      </View>
      <View style={{ ...styles.appIconContainer }}>
        <View style={styles.button}>
          <AppIcon />
          <Text style={styles.heading}>
            ONE <Text style={styles.span}>MARKET</Text>
          </Text>
        </View>
      </View>
      {icons && (
        <View style={styles.iconsBtnContainer}>
          <TouchableOpacity style={styles.button} onPress={personIconOnPress}>
            <PersonIcon color="#000000" />
          </TouchableOpacity>
          <View style={styles.button}></View>

          <View style={styles.button}></View>
        </View>
      )}
      {
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={personIconOnPress}
        >
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      }
    </View>
  );
}
