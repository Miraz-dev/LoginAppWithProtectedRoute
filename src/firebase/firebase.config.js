// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCahJpuhZnx9xjQSccMoWjbbs2QNeU3foE",
  authDomain: "m9-auth-and-private-route.firebaseapp.com",
  projectId: "m9-auth-and-private-route",
  storageBucket: "m9-auth-and-private-route.appspot.com",
  messagingSenderId: "387394520137",
  appId: "1:387394520137:web:2b448baa15473ce3c32b98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;