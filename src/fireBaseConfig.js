import firebase from 'firebase/app';
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyBeUk4KpKIpEE1b1V_6whr_KBFhabYERFY",
  authDomain: "kam-video.firebaseapp.com",
  projectId: "kam-video",
  storageBucket: "kam-video.appspot.com",
  messagingSenderId: "263359547629",
  appId: "1:263359547629:web:29001b7763cda1121824e4",
  measurementId: "G-TP2XV91WD6"
});

const db = firebase.firestore();

export default db;