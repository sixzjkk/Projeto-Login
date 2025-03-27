// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAGGDBgzmhuvhG23mtaOJTvlpQR2ZN7fI",
  authDomain: "react-login-8364d.firebaseapp.com",
  projectId: "react-login-8364d",
  storageBucket: "react-login-8364d.firebasestorage.app",
  messagingSenderId: "115076862325",
  appId: "1:115076862325:web:58a06271da867c69b1033c",
  measurementId: "G-YJXNBYZ2CW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };