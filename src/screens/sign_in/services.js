import { auth } from "../../../firebase_config/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Alert } from "react-native";

export async function signIn(
  email,
  password,
  { setEmailError, setPasswordError, setPasswordLengthError },
  navigation,
  setLoading
) {
  if (email.length === 0) {
    setEmailError(true);
  }
  if (password.length === 0) {
    setPasswordError(true);
  }
  if (password.length < 6) {
    setPasswordLengthError(true);
  }
  if (email.length <= 0 || password.length <= 0 || password.length < 6) {
    return;
  }
  setLoading(true);
  const lowerCaseEmail = email.toLowerCase();
  try {
    await signInWithEmailAndPassword(auth, lowerCaseEmail, password);
    navigation.navigate("customize-shop");
    setLoading(false);
  } catch (e) {
    setLoading(false);
    Alert.alert("Wrong credentials user not found!");
  }
}
