// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getApp,getApps } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "earlylogistics-73fc1.firebaseapp.com",
  projectId: "earlylogistics-73fc1",
  storageBucket: "earlylogistics-73fc1.appspot.com",
  messagingSenderId: "928820073612",
  appId: "1:928820073612:web:17b4ee2fca93df061957a9"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { db,storage }