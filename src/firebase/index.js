import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "ch-class-22955.firebaseapp.com",
  projectId: "ch-class-22955",
  storageBucket: "ch-class-22955.appspot.com",
  messagingSenderId: "351014390933",
  appId: "1:351014390933:web:0bb98731af0c7c98455f9c",
});

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);
