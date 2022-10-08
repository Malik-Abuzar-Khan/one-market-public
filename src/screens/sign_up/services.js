import { auth } from "../../../firebase_config/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, updateDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase_config/config";
import { updateProfile } from "firebase/auth";

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

async function updateDocId(token, docId) {
  console.log("updateDoc triggered");
  const collectionReference = collection(db, "shops", token, "shop-details");
  const docReference = doc(collectionReference, docId);
  try {
    await updateDoc(docReference, {
      docId,
    });
    console.log("updated doc!");
  } catch (e) {
    console.log("failed to update: ", e);
  }
}

async function shopsCollection(token, name, phoneNumber) {
  console.log("token created triggered!");
  const collectionReference = collection(db, "shop");
  const docReference = doc(collectionReference, token);
  try {
    await setDoc(docReference, {
      city: "",
      owner_name: name,
      phone_number: phoneNumber,
      shop_cover_picture: "",
      shop_profile_picture: "",
      shop_description: "",
      shop_name: "",
      token: token,
      docId: ""
    });
    console.log("token saved sucessfully!");
  } catch (e) {
    console.log("token is not saved!");
  }
}

async function prepareShopAssets(
  token,
  name,
  phoneNumber,
  navigation,
  setLoading
) {
  console.log("creating shop triggered!");
  const collectionReference = collection(db, "shops", token, "shop-details");
  try {
    const doc = await addDoc(collectionReference, {
      city: "",
      owner_name: name,
      phone_number: phoneNumber,
      shop_cover_picture: "",
      shop_profile_picture: "",
      shop_description: "",
      shop_name: "",
      token: token,
      docId: "",
    });
    if (doc?.id) {
      await updateDocId(token, doc?.id);
      navigation.navigate("customize-shop");
    }
    console.log("perfectly created!");
    setLoading(false);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
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
  navigation,
  setCurrentUserToken
) {
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
  const token = auth?.currentUser.uid;
  if (token) {
    setCurrentUserToken(token);
  }
  const name = firstName + " " + lastName;
  await Promise.all([
    await updateUserInfo(auth?.currentUser, name, phoneNumber),
    await shopsCollection(token, name, phoneNumber),
    await prepareShopAssets(token, name, phoneNumber, navigation, setLoading),
  ]);
}
