// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtOrtPmHV-2NzZUJu3-lO0Mo6gM2yp9q0",
  authDomain: "pair-39-dts-mini-project.firebaseapp.com",
  projectId: "pair-39-dts-mini-project",
  storageBucket: "pair-39-dts-mini-project.appspot.com",
  messagingSenderId: "570335706961",
  appId: "1:570335706961:web:51da82bffb4d27784bdd70",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
