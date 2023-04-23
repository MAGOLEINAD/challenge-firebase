// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeuo4bKrKNaBjdLXzN_lTvA15ZCv7ufSo",
  authDomain: "challenge-sergio-adan.firebaseapp.com",
  projectId: "challenge-sergio-adan",
  storageBucket: "challenge-sergio-adan.appspot.com",
  messagingSenderId: "463426266198",
  appId: "1:463426266198:web:eb8f2cbb5710a96e69c7f7"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)