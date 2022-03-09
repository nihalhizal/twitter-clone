import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHDgFukrA9_PYGl6ln4RpFzZc9XMEachA",
  authDomain: "twitter-clone-17be8.firebaseapp.com",
  projectId: "twitter-clone-17be8",
  storageBucket: "twitter-clone-17be8.appspot.com",
  messagingSenderId: "477774122639",
  appId: "1:477774122639:web:b41955a687b09d428faafa",
  measurementId: "G-REFK2PCXN6",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
// const auth = firebase.auth();

export default db;
