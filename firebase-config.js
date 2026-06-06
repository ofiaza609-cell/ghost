// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL_la4X9QVwRtvnoVrbNXY-McE3C9MIHA",
  authDomain: "siomai-factory.firebaseapp.com",
  projectId: "siomai-factory",
  storageBucket: "siomai-factory.firebasestorage.app",
  messagingSenderId: "302435729152",
  appId: "1:302435729152:web:d887cdbd1ef6f1aafd3de5",
  measurementId: "G-G53PC02YJW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
