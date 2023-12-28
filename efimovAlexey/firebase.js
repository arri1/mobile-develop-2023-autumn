// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfALGOc0gax4Eqanvr1jcwauhLsM0w3N4",
  authDomain: "mobile-development-75ae6.firebaseapp.com",
  databaseURL: "https://mobile-development-75ae6-default-rtdb.firebaseio.com",
  projectId: "mobile-development-75ae6",
  storageBucket: "mobile-development-75ae6.appspot.com",
  messagingSenderId: "508837048392",
  appId: "1:508837048392:web:9a08e7abe1f3933066687d",
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
