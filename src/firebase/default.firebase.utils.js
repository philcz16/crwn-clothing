// DEFAULT FILE. PLEASE COPY AND PASTE THIS FILE, REMOVE DEFAULT FROM NAME, AND ENTER CONFIG

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  // Enter your firebase config here
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
