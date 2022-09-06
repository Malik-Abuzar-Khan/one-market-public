import { db } from "../../../firebase_config/config";
import { collection, onSnapshot } from "firebase/firestore";

function getShopDataFromDb(currentUser, setShopInfo) {
    const collectionReference = collection(
      db,
      "shops",
      `${currentUser.uid}`,
      "shop-details"
    );
       onSnapshot(collectionReference, (querySnapshot) => {
        setShopInfo(
          querySnapshot.docs?.map((doc) => ({
            data: doc.data(),
            id: doc.id,
          }))
        );
      });

  }



  export {getShopDataFromDb}