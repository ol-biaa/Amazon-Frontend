
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";// for authentication
import "firebase/compat/firestore";//for databse
import "firebase/compat/auth";//authentication module
// import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCs2ZArkIp5-3RuRwQnWflBH-3Igw79NPU",
    authDomain: "clone-60b48.firebaseapp.com",
    projectId: "clone-60b48",
    storageBucket: "clone-60b48.appspot.com",
    messagingSenderId: "433799955636",
    appId: "1:433799955636:web:33cbf59d4daf70ccaf43e1"
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
