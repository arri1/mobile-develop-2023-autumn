// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCMth8OA5_Gh-7aaTGw4m1pRTblEyQGkO4',
  authDomain: 'fir-3075c.firebaseapp.com',
  projectId: 'fir-3075c',
  storageBucket: 'fir-3075c.appspot.com',
  messagingSenderId: '522405267531',
  appId: '1:522405267531:web:b9b446154a84acccd265ce',
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
