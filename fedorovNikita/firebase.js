// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLpuM5yOfrEMwep8Tibuf9kzL_43d-jNE",
  authDomain: "myapp-b5bf4.firebaseapp.com",
  projectId: "myapp-b5bf4",
  storageBucket: "myapp-b5bf4.appspot.com",
  messagingSenderId: "425399633455",
  appId: "1:425399633455:web:6300530d39b919ae4068da",
  measurementId: "G-57RCZYFDBZ"
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