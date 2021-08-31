import { defineMetadata } from "core-js/fn/reflect";
import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD8KwjE_0sSIySNbQdnF0kpD5_f5DQnilU",
    authDomain: "fireblog-97d3a.firebaseapp.com",
    projectId: "fireblog-97d3a",
    storageBucket: "fireblog-97d3a.appspot.com",
    messagingSenderId: "399661475224",
    appId: "1:399661475224:web:185f73c2d6a5ea25a777ed"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {timestamp}
export default firebaseApp.firestore()