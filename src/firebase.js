// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8abvADQgJd_7tg-Br2mqB7q4lkKTQPsw",
  authDomain: "clone-c0019.firebaseapp.com",
  projectId: "clone-c0019",
  storageBucket: "clone-c0019.appspot.com",
  messagingSenderId: "160945037395",
  appId: "1:160945037395:web:7a02b062218010873da6a6",
  measurementId: "G-SX4QV8GHVJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
