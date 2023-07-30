// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "aims-dashboard1.firebaseapp.com",
  projectId: "aims-dashboard1",
  storageBucket: "aims-dashboard1.appspot.com",
  messagingSenderId: "562297692560",
  appId: "1:562297692560:web:e30d20a15b6af579ff1315"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);