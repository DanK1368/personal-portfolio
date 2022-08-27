// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-xuh0Kl2CUaiVSgWrDfOpWANGFXANw64",
  authDomain: "portfolio-bdfd2.firebaseapp.com",
  projectId: "portfolio-bdfd2",
  storageBucket: "portfolio-bdfd2.appspot.com",
  messagingSenderId: "583211788146",
  appId: "1:583211788146:web:95e39a59f65aaa81635feb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
