// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv6oGOuO4heJ88XOOBHy1VnHxke0r06iU",
  authDomain: "netflix-gpt-e794e.firebaseapp.com",
  projectId: "netflix-gpt-e794e",
  storageBucket: "netflix-gpt-e794e.appspot.com",
  messagingSenderId: "652512744404",
  appId: "1:652512744404:web:7d1e48ebb84560dc597c41",
  measurementId: "G-K1D9W7TKTM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();



