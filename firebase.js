// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKmcm9eSnWRbTcsNKeS8Q-ZIgNy5Yy72g",
  authDomain: "fir-auth-c8530.firebaseapp.com",
  projectId: "fir-auth-c8530",
  storageBucket: "fir-auth-c8530.appspot.com",
  messagingSenderId: "261577445251",
  appId: "1:261577445251:web:6446bbb60597e5ba1070b6",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
