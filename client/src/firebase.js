// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-e1d5c.firebaseapp.com",
  projectId: "blog-e1d5c",
  storageBucket: "blog-e1d5c.appspot.com",
  messagingSenderId: "230706710701",
  appId: "1:230706710701:web:7ec6723ef1f2e64da41e24",
  measurementId: "G-GBP85F9FR3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
