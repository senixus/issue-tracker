import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "API KEY",
  authDomain: "AUTH DOMAIN",
  projectId: "PROJECTID",
  storageBucket: "STORAGE BUCKET",
  messagingSenderId: "MESSAGING SENDER ID",
  appId: "APP ID",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;
