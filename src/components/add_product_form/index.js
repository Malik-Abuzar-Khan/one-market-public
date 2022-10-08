import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import { auth } from "../../../firebase_config/config";
import ImagePickerComp from "../image_picker";
import PopUpScreenWrapper from "../pop_up_screen_wrapper";
import { CrossIcon } from "../svgs/svgs";
import { styles } from "./styles";
import { addNewProduct } from "./services";
import Loader from "../app_loader";

export default function AddProductForm({ setCreateProductScreen }) {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductsDescription] = useState("");
  const [productPrice, setProductsPrice] = useState("");
  const [image, setImage] = useState(null);
  const [loader, setLoader] = useState(false);
  let token = auth?.currentUser?.uid;

  return (
    <>
      <PopUpScreenWrapper extraStyles={styles.popUpScreenWrapper}>
        <View>
          <View style={styles.headingAndIconContainer}>
            <View style={styles.mainHeadingContainer}>
              <Text style={styles.mainHeading}>
                Add a new <Text style={styles.span}>product</Text>
              </Text>
            </View>
            <TouchableOpacity
              style={styles.crossBtn}
              onPress={() => setCreateProductScreen(false)}
            >
              <CrossIcon
                width={styles.crossIcon.width}
                height={styles.crossIcon.height}
                color={styles.crossIcon.color}
              />
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.scrollView}>
            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Poduct name"
                  value={productName}
                  onChangeText={setProductName}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Product description"
                  value={productDescription}
                  onChangeText={setProductsDescription}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Product Price"
                  value={productPrice}
                  onChangeText={setProductsPrice}
                />
              </View>
              <ImagePickerComp image={image} setImage={setImage} />
              <TouchableOpacity
                style={styles.fromBtn}
                onPress={async () =>
                  await addNewProduct(
                    token,
                    productName,
                    productDescription,
                    productPrice,
                    image,
                    setCreateProductScreen,
                    setLoader
                  )
                }
              >
                <Text style={styles.btnText}>Create</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </PopUpScreenWrapper>
      {loader && <Loader />}
    </>
  );
}
