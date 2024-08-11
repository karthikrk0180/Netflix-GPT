// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7K9ksL2L3EK5RhnoeV8PU68aXbhxIEZY",
  authDomain: "netflix-gpt-d3f9d.firebaseapp.com",
  projectId: "netflix-gpt-d3f9d",
  storageBucket: "netflix-gpt-d3f9d.appspot.com",
  messagingSenderId: "1040063430635",
  appId: "1:1040063430635:web:6b40af457fc3b7c68b23ae",
  measurementId: "G-T587F70Y4E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

