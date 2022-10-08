import { db } from "../../../firebase_config/config";
import { collection, onSnapshot } from "firebase/firestore";
import { auth } from "../../../firebase_config/config";
import { signOut } from "firebase/auth";
import { Alert } from "react-native";

function getShopDataFromDb(currentUser, setShopInfo) {
  const collectionReference = collection(
    db,
    "shops",
    `${currentUser?.uid}`,
    "shop-details"
  );
  onSnapshot(collectionReference, (querySnapshot) => {
    setShopInfo(querySnapshot.docs?.map((doc) => doc.data()));
  });
}

function getProducts(uid, setProducts) {
  const collectionReference = collection(db, "shops", `${uid}`, "shop-items");
  onSnapshot(collectionReference, (querySnapshot) => {
    setProducts(
      querySnapshot.docs?.map((doc) => ({ ...doc.data(), docId: doc.id }))
    );
  });
}

function signOutUser(navigation, setLoading, setCurrentUserToken) {
  setLoading(true);
  signOut(auth)
    .then(() => {
      setLoading(false);
      setCurrentUserToken("");
      navigation.navigate("home");
    })
    .catch((error) => {
      Alert.alert(error.message);
    });
}

export { getShopDataFromDb, signOutUser, getProducts };
