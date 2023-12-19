// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-87fdc.firebaseapp.com",
  projectId: "mern-estate-87fdc",
  storageBucket: "mern-estate-87fdc.appspot.com",
  messagingSenderId: "252522284261",
  appId: "1:252522284261:web:42bd15d73504ffdee8000c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);