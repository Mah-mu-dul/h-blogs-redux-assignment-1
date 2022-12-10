// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXODvSuZkvTXc779xE9tetJyiVebJs0ik",
  authDomain: "h-blogs.firebaseapp.com",
  projectId: "h-blogs",
  storageBucket: "h-blogs.appspot.com",
  messagingSenderId: "765451884936",
  appId: "1:765451884936:web:05397f7df980530f96023d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
