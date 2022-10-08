import React from "react";
import { Image, View, TouchableOpacity, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { styles } from "./styles";

export default function ImagePickerComp({ image, setImage }) {
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.btn} onPress={pickImage}>
        <Text style={styles.btnText}>Select product image</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
}
