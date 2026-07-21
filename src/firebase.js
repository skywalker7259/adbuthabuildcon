// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkQ5DYs8eDFPYEiIkX3WjmuGZtxVFXXxc",
  authDomain: "adbuthabuildcon-18c1c.firebaseapp.com",
  projectId: "adbuthabuildcon-18c1c",
  storageBucket: "adbuthabuildcon-18c1c.firebasestorage.app",
  messagingSenderId: "313732042200",
  appId: "1:313732042200:web:9a4eb6b2fd1a8f48bdb6ad",
  measurementId: "G-T0RF3PSWE0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
