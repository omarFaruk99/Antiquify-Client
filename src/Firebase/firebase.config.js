// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9cR4SYhaJSQhtOPsICZbQGFRrGypnI9Y",
  authDomain: "antiquify-68162.firebaseapp.com",
  projectId: "antiquify-68162",
  storageBucket: "antiquify-68162.firebasestorage.app",
  messagingSenderId: "1082692149724",
  appId: "1:1082692149724:web:0c2e06fbcbb7a66fc66f19",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// Initialize Firebase Authentication and get a reference to the service
export default auth;
