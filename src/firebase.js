// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // Enter your firbase project keys here.
  apiKey: "AIzaSyAilnAJIP1JbiFDf6i7E-kGv-8duUYiWyQ",
  authDomain: "react-firebase-chatapp-80adc.firebaseapp.com",
  projectId: "react-firebase-chatapp-80adc",
  storageBucket: "react-firebase-chatapp-80adc.appspot.com",
  messagingSenderId: "1040729168864",
  appId: "1:1040729168864:web:4c869f9d758bb44377a985",
  measurementId: "G-F5KTZBDKHG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export default app;
