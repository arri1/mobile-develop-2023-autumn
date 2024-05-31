// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7Wry8seW8-XEuzPEuYq1OLfOYdcJ_O6U",
  authDomain: "atproject-a70da.firebaseapp.com",
  projectId: "atproject-a70da",
  storageBucket: "atproject-a70da.appspot.com",
  messagingSenderId: "197047163261",
  appId: "1:197047163261:web:c496cb70b6b477bab19414",
  measurementId: "G-6L0RXCC77G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);