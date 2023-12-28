// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCSyDt2bVBCH1s2-QoUHYXWJt0Tn1Ft5OY",
    authDomain: "myfirebase-79584.firebaseapp.com",
    projectId: "myfirebase-79584",
    storageBucket: "myfirebase-79584.appspot.com",
    messagingSenderId: "770013260268",
    appId: "1:770013260268:web:3af17112de43b284f3f8c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
