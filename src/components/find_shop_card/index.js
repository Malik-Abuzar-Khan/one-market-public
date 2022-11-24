import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import {
  styles,
  locationDdListsize,
  marketDdListsize,
} from "./styles";
import SelectDropdown from "react-native-select-dropdown";
import { DownArrow } from "../svgs/svgs";

const countries = ['_',"Islamabad", "Rawalpindi"];
const market = [ '_',"Decoration", "Tyre"];

export default function FindShopCard({ setLocation, setMarketType, SearchBtnOnPress }) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.mainHeading}>FINDSHOP</Text>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.flexContainer}>
          <View style={styles.dropDownContainer}>
            <SelectDropdown
              defaultButtonText="Location"
              buttonStyle={styles.dropDownbtn}
              dropdownStyle={{ ...styles.dropDown, ...locationDdListsize }}
              rowStyle={styles.dropDownrow}
              rowTextStyle={styles.dropDownbtnTextTransform}
              buttonTextStyle={styles.dropDownbtnText}
              sty
              data={countries}
              onSelect={(selectedItem, index) => {
                setLocation(selectedItem)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />
            <View style={styles.transformIcon}>
              <DownArrow width={16} height={16} color="#000000" />
            </View>
          </View>
          <View style={styles.dropDownContainer}>
            <SelectDropdown
              defaultButtonText="Market"
              buttonStyle={styles.dropDownbtn}
              dropdownStyle={{ ...styles.dropDown, ...marketDdListsize }}
              rowStyle={styles.dropDownrow}
              rowTextStyle={styles.dropDownrowText}
              buttonTextStyle={styles.dropDownbtnText}
              sty
              data={market}
              onSelect={(selectedItem, index) => {
                setMarketType(selectedItem)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />
            <View style={styles.transformIcon}>
              <DownArrow width={16} height={16} color="#000000" />
            </View>
          </View>
        </View>
        {/* <View style={styles.dropDownContainerNoMargin}>
          <SelectDropdown
            // dropdownStyle={}
            defaultButtonText="Categories"
            buttonStyle={{ ...styles.dropDownbtn, ...categoryDdsize }}
            dropdownStyle={{ ...styles.dropDown, ...categoryDdListsize }}
            rowStyle={styles.dropDownrow}
            rowTextStyle={styles.dropDownrowText}
            buttonTextStyle={styles.dropDownbtnText}
            sty
            data={market}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
          />
          <View style={styles.transformIcon}>
            <DownArrow width={16} height={16} color="#000000" />
          </View>
        </View> */}

        {/* <View style={styles.inputContainer}>
          <View style={styles.searchIconContainer}>
            <SearchIcon color={"#404040"} />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Name of shop(Optional)"
          />
        </View> */}
        <View style={styles.registrationBtnContainer}>
          {/* <TouchableOpacity
            
            // onPress={() => navigation.navigate("register")}
          > */}
          <TouchableOpacity style={styles.registrationBtn} onPress={SearchBtnOnPress}>
            <Text style={styles.registrationBtnText}>Search now</Text>
          </TouchableOpacity>

          {/* </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
}
