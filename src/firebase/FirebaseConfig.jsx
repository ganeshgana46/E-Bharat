// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrulQvkCTmmej0sILHnTX-CUfMMrIbLKs",
  authDomain: "myecom-96a7b.firebaseapp.com",
  projectId: "myecom-96a7b",
  storageBucket: "myecom-96a7b.appspot.com",
  messagingSenderId: "931405307956",
  appId: "1:931405307956:web:6e9c76549d2b070a8faa61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }