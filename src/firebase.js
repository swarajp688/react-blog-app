// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-R4T_ycElZ9K6kANgdEK_J9qFI5Zz7yc",
  authDomain: "blog-app-b4221.firebaseapp.com",
  projectId: "blog-app-b4221",
  storageBucket: "blog-app-b4221.appspot.com",
  messagingSenderId: "105919307923",
  appId: "1:105919307923:web:216213871fae8363196d66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = firebase.firestore();