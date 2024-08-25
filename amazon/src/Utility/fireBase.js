const API_KEY = process.env.REACT_APP_API_KEY;

import firebase from "firebase/compat/app";
//To use the authontication service
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import "firebase/compat/firestore";
import { doc, onSnapshot, collection, query, where } from "firebase/firestore";
import "firebase/compat/auth";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "project-a1229.firebaseapp.com",
  projectId: "project-a1229",
  storageBucket: "project-a1229.appspot.com",
  messagingSenderId: "274397321325",
  appId: "1:274397321325:web:fabf5d9102039940934764",
};

export const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();




// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export {db};
