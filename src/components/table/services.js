
import axiosBase from "../../../axios";
import { updated } from '../../../store/features/update';



async function deleteProduct(id, setAddProduct, dispatch) {
  try{
    await axiosBase.get(`/shop/delete-item:${id}`);
    console.log("deleted!")
    setAddProduct((prev) => prev - 1)
    dispatch(updated())
  }  catch(e){
    console.error("error: ", e)
    setAddProduct((prev) => prev - 1)
    dispatch(updated())
  }
}


export {  deleteProduct };





// setDeleteBtnloader(true);
// const docReference = doc(db, "shops", token, "shop-items", docId);
// const itemssDocReference = doc(db, "items", docId);
// try {
//   await deleteDoc(itemssDocReference);
//   await deleteDoc(docReference);
//   deleteDataFromStorage(token, docId)
//   setDeleteBtnloader(false);
// } catch (e) {
//   console.log("can not delete product!");
// }?