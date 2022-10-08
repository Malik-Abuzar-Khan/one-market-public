import { db } from "../../../firebase_config/config";
import { collection, onSnapshot } from "firebase/firestore";
import { getAllShops } from "../../../store/features/all_shops_slice";
import { getAllItems } from "../../../store/features/get_all_items";
import { getToken } from "../../../store/features/shopToken";
import { getViewCardData } from "../../../store/features/view_item";


function getShops(setShops, dispatchGetAllShops, setLoading) {
  setLoading(true);
  const collectionReference = collection(db, "shop");
  onSnapshot(collectionReference, (snapShot) => {
    const data = snapShot.docs.map((doc) => doc.data());
    setShops(data);
    setLoading(false);
    dispatchGetAllShops(getAllShops(data));
  });
}

function getItems(setShopsItems, dispatch, setLoading) {
  setLoading(true);
  const collectionReference = collection(db, "items");
  onSnapshot(collectionReference, (snapShot) => {
    const data = snapShot.docs.map((doc) => doc.data());
    setShopsItems(data);
    setLoading(false);
    dispatch(getAllItems(data));
  });
}

function navigateToShop(dispatch, payload, navigation) {
  dispatch(getToken(payload));
  navigation.navigate("shop");
}

function navigateToViewItem(dispatch, payload, navigation) {
  dispatch(getViewCardData(payload));
  navigation.navigate("item");
}

export { getShops, getItems, navigateToShop, navigateToViewItem };
