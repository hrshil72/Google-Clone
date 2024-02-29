// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyqwO5ByFkJXnhEPMn_CDembc0JHdCCKg",
  authDomain: "clone-2ed64.firebaseapp.com",
  projectId: "clone-2ed64",
  storageBucket: "clone-2ed64.appspot.com",
  messagingSenderId: "765701658861",
  appId: "1:765701658861:web:9c16a91e09a669473494e4",
  measurementId: "G-B6JT1HZ8E8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
