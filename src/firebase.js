// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIOkRgtLxk_QcWqDEC9WvOpu2ZvgOc-TQ",
  authDomain: "portfolio-ms-1187.firebaseapp.com",
  projectId: "portfolio-ms-1187",
  storageBucket: "portfolio-ms-1187.appspot.com",
  messagingSenderId: "439740897247",
  appId: "1:439740897247:web:872eee7bac3e664b8cd66a",
  measurementId: "G-RH18DFNH74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);