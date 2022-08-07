// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCR0ZnL1YqHFAre_Q0XURl8eIoCZ2zKHcs",
  authDomain: "my-crow-soft-messenger.firebaseapp.com",
  projectId: "my-crow-soft-messenger",
  storageBucket: "my-crow-soft-messenger.appspot.com",
  messagingSenderId: "897760758127",
  appId: "1:897760758127:web:20b3bb5d47c5498f61c09a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db }