// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkH21AEGhQe4Se9W5Vt41r-ZgYr8yEWLI",
  authDomain: "netflixgpt-236ef.firebaseapp.com",
  projectId: "netflixgpt-236ef",
  storageBucket: "netflixgpt-236ef.appspot.com",
  messagingSenderId: "165031575251",
  appId: "1:165031575251:web:9022b8218b1ff93ab4de26",
  measurementId: "G-M8L6QHG1V3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();