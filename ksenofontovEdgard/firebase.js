// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg2nlRAVb16wRgmKggOKoZM-sLT5WEibU",
  authDomain: "lab4-7d97f.firebaseapp.com",
  projectId: "lab4-7d97f",
  storageBucket: "lab4-7d97f.appspot.com",
  messagingSenderId: "469691099912",
  appId: "1:469691099912:web:e08576726e420916a7dabd",
  measurementId: "G-764RDF97PR",
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
