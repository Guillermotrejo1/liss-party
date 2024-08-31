// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeQ8AgigvSoZedh0qO4ESJLoysjVR6dYI",
  authDomain: "liss-party.firebaseapp.com",
  projectId: "liss-party",
  storageBucket: "liss-party.appspot.com",
  messagingSenderId: "579209345958",
  appId: "1:579209345958:web:d2fb0968f2535d6705ed67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
