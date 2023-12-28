// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvVBNsoDMqC9eJ9fgIRdzLUbv8xJLbd_w",
  authDomain: "mob-app-81881.firebaseapp.com",
  projectId: "mob-app-81881",
  storageBucket: "mob-app-81881.appspot.com",
  messagingSenderId: "42295738603",
  appId: "1:42295738603:web:a2ef66b9503d300b8bfeae",
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
