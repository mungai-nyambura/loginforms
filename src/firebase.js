// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm6wYw8XU7KZ5IML8ztC0SrLxapC3pN6Q",
  authDomain: "registration-form-89976.firebaseapp.com",
  databaseURL: "https://registration-form-89976-default-rtdb.firebaseio.com",
  projectId: "registration-form-89976",
  storageBucket: "registration-form-89976.appspot.com",
  messagingSenderId: "563922488102",
  appId: "1:563922488102:web:7d6967a7259296f01b0fe7",
  measurementId: "G-BYRLQZZ0EG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);