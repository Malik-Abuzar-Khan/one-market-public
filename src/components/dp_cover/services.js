import * as ImagePicker from "expo-image-picker";
import { app, db } from "../../../firebase_config/config";
import { collection, updateDoc, doc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const pickImage = async (
  token,
  docId,
  updateDocInStore,
  category,
  setLoader
) => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  console.log(result);

  if (!result.cancelled) {
    await uploadImageToStorage(
      token,
      docId,
      result.uri,
      updateDocInStore,
      category,
      setLoader
    );
  }
};

async function uploadImageToStorage(
  token,
  docId,
  image,
  updateDocInStore,
  category,
  setLoader
) {
 
  setLoader(true);
  const response = await fetch(image);
  const blob = await response.blob();
  const storage = getStorage();
  var storageeRef = ref(
    storage,
    `imagesCollection/${token}/shop-details/${docId}/${category}`
  );
  await uploadBytes(storageeRef, blob);
  await getDataFromStorage(
      token,
      docId,
      updateDocInStore,
      category,
      setLoader
    );
}

async function getDataFromStorage(
  token,
  docId,
  updateDocInStore,
  category,
  setLoader
) {
  const storage = getStorage();
  const storageRef = ref(
    storage,
    `imagesCollection/${token}/shop-details/${docId}/${category}`
  );
  const url = await getDownloadURL(storageRef);
  try {
    if (url) {
      await updateDocInStore(token, docId, url);
      setLoader(false);
    }
  } catch (e) {
    console.log("error in getting url: ", error);
  }
}

async function updateProfilePictureInDoc(token, docId, url) {
  const collectionReference = collection(db, "shops", token, "shop-details");
  const docReference = doc(collectionReference, docId);
  const shopDocReference = doc(db, "shop", token);
  try {
    await updateDoc(shopDocReference, {
      shop_profile_picture: url,
    })
    await updateDoc(docReference, {
      shop_profile_picture: url,
    });
    console.log("updated doc!");
  } catch (e) {
    console.log("failed to update: ", e);
  }
}

async function updateCoverPictureInDoc(token, docId, url) {
  const collectionReference = collection(db, "shops", token, "shop-details");
  const docReference = doc(collectionReference, docId);
  const shopDocReference = doc(db, "shop", token);
  try {
    await updateDoc(shopDocReference, {
      shop_cover_picture: url,
    });
    await updateDoc(docReference, {
      shop_cover_picture: url,
    });
    console.log("updated doc!");
  } catch (e) {
    console.log("failed to update: ", e);
  }
}

async function updateShopNameAndDesciption(
  token,
  docId,
  shopNameValue,
  shopDescriptionValue,
  setEditShopNameAndDescriptionScreen,
  setLoading
) {
  setLoading(true);
  const collectionReference = collection(db, "shops", token, "shop-details");
  const docReference = doc(collectionReference, docId);
  const shopDocReference = doc(db, "shop", token);
  try {
    await updateDoc(shopDocReference, {
      shop_name: shopNameValue,
      shop_description: shopDescriptionValue,
    });
    await updateDoc(docReference, {
      shop_name: shopNameValue,
      shop_description: shopDescriptionValue,
    });
    console.log("updated doc!");
    setLoading(false);
    setEditShopNameAndDescriptionScreen(false);
  } catch (e) {
    console.log("failed to update: ", e);
  }
}

export {
  pickImage,
  updateProfilePictureInDoc,
  updateCoverPictureInDoc,
  updateShopNameAndDesciption,
};
