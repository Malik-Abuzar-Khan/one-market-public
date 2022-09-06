import { auth } from "../../../firebase_config/config";
import { signInWithEmailAndPassword } from "firebase/auth";

export function signIn(
  email,
  password,
  { setEmailError, setPasswordError, setPasswordLengthError }
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
  signInWithEmailAndPassword(auth, email, password);
  console.log("sucessfully signed-in");
}
