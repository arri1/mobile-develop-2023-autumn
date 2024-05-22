/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCbLCmrnqFg2Co4-M0LJSydcBfUhTFvklg',
  authDomain: 'fir-6440d.firebaseapp.com',
  projectId: 'fir-6440d',
  storageBucket: 'fir-6440d.appspot.com',
  messagingSenderId: '826655120054',
  appId: '1:826655120054:web:3f424a178eb82ed58ee417',
  measurementId: 'G-35ZQLHMC20',
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
