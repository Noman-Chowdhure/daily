// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgKaUsljbCa5YmScfhx_ZB2UqnJNId3A4",
  authDomain: "shopping-three.firebaseapp.com",
  projectId: "shopping-three",
  storageBucket: "shopping-three.firebasestorage.app",
  messagingSenderId: "438512747096",
  appId: "1:438512747096:web:1a7773b1540df0a3ff802d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app