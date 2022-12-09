// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-uxjdsPg49Oh4FFiSK5pr8WI5tyBXGpk",
  authDomain: "meme-awards-2022.firebaseapp.com",
  projectId: "meme-awards-2022",
  storageBucket: "meme-awards-2022.appspot.com",
  messagingSenderId: "463606462421",
  appId: "1:463606462421:web:fd0430408d03dad0442f5c",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
