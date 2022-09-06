import { auth } from "../../../firebase_config/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { newUserdataGetter } from "../../../store/features/current_user_info";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase_config/config";
import { updateProfile } from "firebase/auth";

async function prepareShopAssets(
  uid,
  name,
  phoneNumber,
  navigation,
  setLoading
) {
  console.log("creating shop triggered!");
  const collectionReference = collection(db, "shops", uid, "shop-details");
  try {
    await addDoc(collectionReference, {
      city: "",
      owner_name: name,
      phone_number: phoneNumber,
      shop_cover_picture: "",
      shop_profile_picture: "",
      shop_description: "",
      shop_name: "",
      uid: uid,
    });
    navigation.navigate("customize-shop");
    console.log("perfectly created!");
    setLoading(false);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function updateUserInfo(currentUser, name, phoneNumber) {
  console.log("updating user triggred!");
  const convertedPhoneNumber = parseInt(phoneNumber);
  await updateProfile(currentUser, {
    displayName: name,
    phoneNumber: convertedPhoneNumber,
  })
    .then(() => {
      console.log("user updated sucessfully!");
    })
    .catch((error) => {
      console.log("error in updating user! : ", error);
    });
}

export async function registerNewAccount(
  firstName,
  lastName,
  phoneNumber,
  email,
  password,
  {
    setFirstNameError,
    setLastNameError,
    setPhoneNumberError,
    setEmailError,
    setPasswordError,
    setPasswordLengthError,
    setLoading,
  },
  dispatch,
  navigation
) {
  console.log("account creating triggered!");
  setLoading(true);
  if (firstName.length === 0) {
    setFirstNameError(true);
  }
  if (lastName.length === 0) {
    setLastNameError(true);
  }
  if (phoneNumber.length === 0) {
    setPhoneNumberError(true);
  }
  if (email.length === 0) {
    setEmailError(true);
  }
  if (password.length === 0) {
    setPasswordError(true);
  }
  if (password.length < 6) {
    setPasswordLengthError(true);
  }
  if (
    firstName.length <= 0 ||
    lastName.length <= 0 ||
    phoneNumber.length <= 0 ||
    email.length <= 0 ||
    password.length <= 0 ||
    password.length < 6
  ) {
    setLoading(false);
    return;
  }
  const lowerCaseEmail = email.toLowerCase();
  try {
    await createUserWithEmailAndPassword(auth, lowerCaseEmail, password);
  } catch (e) {
    console.log("error in creating user: ", e);
  }
  const uid = auth.currentUser?.uid;
  dispatch(
    newUserdataGetter({
      uid,
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
    })
  );
  const name = firstName + " " + lastName;
  await prepareShopAssets(uid, name, phoneNumber, navigation, setLoading);
  await updateUserInfo(auth.currentUser, name, phoneNumber);
  console.log("user_created");
}
