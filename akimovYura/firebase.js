// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE5JMON7_PjbRAPtkQFj_ehGnHtML8dp0",
  authDomain: "bruh-3e7d5.firebaseapp.com",
  projectId: "bruh-3e7d5",
  storageBucket: "bruh-3e7d5.appspot.com",
  messagingSenderId: "189536846302",
  appId: "1:189536846302:web:979520b82622f504599d4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });