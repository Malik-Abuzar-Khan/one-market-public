import { db } from "../../../firebase_config/config";
import { collection, onSnapshot } from "firebase/firestore";

export function getShopInfo(token, setShopItems) {
    console.log("token in func: ", token)
  const collectionReference = collection(db, "shops", token, "shop-items");
  onSnapshot(collectionReference, (snapShot) => 
  setShopItems(snapShot.docs.map((doc) => doc.data()))
  );
}
