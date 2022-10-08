import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZJZO2BVghjUTw-Yk3Id68McjgCgOgr1U",
  authDomain: "one-market-48af0.firebaseapp.com",
  databaseURL: "https://one-market-48af0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "one-market-48af0",
  storageBucket: "one-market-48af0.appspot.com",
  messagingSenderId: "67913978714",
  appId: "1:67913978714:web:8387d6fca341928acc1963"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
var auth = getAuth(app);
var db = getFirestore();

export { app, auth, db };
