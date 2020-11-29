import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCo5E9oasqwUCnDHmGMaByGkNgU2BoJcMI",
  authDomain: "portfoliowars.firebaseapp.com",
  databaseURL: "https://portfoliowars.firebaseio.com",
  projectId: "portfoliowars",
  storageBucket: "portfoliowars.appspot.com",
  messagingSenderId: "985716813734",
  appId: "1:985716813734:web:37a698e24d1df59fbde967",
  measurementId: "G-6MY43NDCNE",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore;
export const auth = firebase.auth;
