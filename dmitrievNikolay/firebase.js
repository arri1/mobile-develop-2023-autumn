// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIfbtA2b94DDIS4vfsYsIU7vI77WbZpqU",
  authDomain: "shutka-80537.firebaseapp.com",
  projectId: "shutka-80537",
  storageBucket: "shutka-80537.appspot.com",
  messagingSenderId: "802886202748",
  appId: "1:802886202748:web:84d79eb84ca85e98c1e0f9",
  measurementId: "G-PY5EYF11E3"
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