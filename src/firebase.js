import firebase from "firebase";// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAA9RKNn1mpvGHCcdpK4NEDYbEfE-k0-W8",
  authDomain: "e-commerce-bb70d.firebaseapp.com",
  projectId: "e-commerce-bb70d",
  storageBucket: "e-commerce-bb70d.appspot.com",
  messagingSenderId: "290016474682",
  appId: "1:290016474682:web:6332ea617bc1e575bce703",
  measurementId: "G-6SW7DYF4EL"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };