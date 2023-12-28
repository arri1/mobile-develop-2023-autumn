// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtnysqM-glStOlpalIenIYA5wT-9_3rnU",
  authDomain: "auth-64e41.firebaseapp.com",
  projectId: "auth-64e41",
  storageBucket: "auth-64e41.appspot.com",
  messagingSenderId: "842310622391",
  appId: "1:842310622391:web:7e214a3872d226a985c132",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
