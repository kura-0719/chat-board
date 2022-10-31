import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA1mkKISGXQ-3tlAUsPES0yZFk0qfx_7ao",
  authDomain: "chat-board-324f9.firebaseapp.com",
  projectId: "chat-board-324f9",
  storageBucket: "chat-board-324f9.appspot.com",
  messagingSenderId: "212982273114",
  appId: "1:212982273114:web:451d614e5f20e81d0ab463",
});

const db = firebaseApp.firestore();

export { db };
