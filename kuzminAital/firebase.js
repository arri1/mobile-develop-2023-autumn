// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrHIrcoMsJB1VdLv7uFwDOTa5lWLvru3Q",
    authDomain: "kuzminaital-bc5a5.firebaseapp.com",
    projectId: "kuzminaital-bc5a5",
    storageBucket: "kuzminaital-bc5a5.appspot.com",
    messagingSenderId: "1071657416114",
    appId: "1:1071657416114:web:81fdcd17000c65ec64e0ab",
    measurementId: "G-ZQ6K1XG54H"
  };

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };