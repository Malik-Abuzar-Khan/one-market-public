import { db } from "../../../firebase_config/config";
import {
  collection,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";

async function updateProductUrl(token, docId, uri) {
  const collectionReference = collection(db, "shops", token, "shop-items");
  const docReference = doc(collectionReference, docId);
  try {
    await updateDoc(docReference, {
      docId,
      uri: uri,
    });
    console.log("updated doc!");
  } catch (e) {
    console.log("failed to update: ", e);
  }
}

async function deleteProduct(token, docId, setDeleteBtnloader) {
  setDeleteBtnloader(true);
  const docReference = doc(db, "shops", token, "shop-items", docId);
  const itemssDocReference = doc(db, "items", docId);
  try {
    await deleteDoc(itemssDocReference);
    await deleteDoc(docReference);
    deleteDataFromStorage(token, docId)
    setDeleteBtnloader(false);
  } catch (e) {
    console.log("can not delete product!");
  }
}

function deleteDataFromStorage(token, docId) {
  const storage = getStorage();

  const desertRef = ref(storage, `imagesCollection/${token}/items/${docId}`);
  deleteObject(desertRef)
    .then(() => {
        console.log("deleted sucessfully!")
    })
    .catch((error) => {
        console.log("can not delete!");
    });
}

export { updateProductUrl, deleteProduct };
