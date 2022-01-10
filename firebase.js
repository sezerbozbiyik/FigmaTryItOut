// Import the functions you need from the SDKs you need
import * as firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq3aLtGCkaJvgLFucvEXqqtnOHJq8c9eQ",
  authDomain: "figmatryitout-b74e5.firebaseapp.com",
  projectId: "figmatryitout-b74e5",
  storageBucket: "figmatryitout-b74e5.appspot.com",
  messagingSenderId: "763426968703",
  appId: "1:763426968703:web:95a2fb22b70842ec915b4a",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

var auth = firebase.auth();
export  {auth} ;
