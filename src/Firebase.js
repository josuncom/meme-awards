// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCVe2NbzJmOsnEm1qPANocdPOK_38R84M",
  authDomain: "meme-awards-95816.firebaseapp.com",
  projectId: "meme-awards-95816",
  storageBucket: "meme-awards-95816.appspot.com",
  messagingSenderId: "399919031736",
  appId: "1:399919031736:web:a02a03275161546f3a5b4d",
  measurementId: "G-1HWH9QCZ35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);