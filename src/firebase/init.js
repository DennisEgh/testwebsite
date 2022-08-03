// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUE-SwW8T4qgBzSijFNwadjUEQ15_zzP4",
  authDomain: "bmwwebsite-90727.firebaseapp.com",
  projectId: "bmwwebsite-90727",
  storageBucket: "bmwwebsite-90727.appspot.com",
  messagingSenderId: "196346068225",
  appId: "1:196346068225:web:690cf64a9d6aedfc826f00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app.value)
export const auth = getAuth()
