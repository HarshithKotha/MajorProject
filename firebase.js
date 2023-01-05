import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// import initializeApp from 'firebase/app';
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import {getAuth, createUserWithEmailAndPassword,signOut,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyABAJA1335mQG-TPYxQV7yRkGKvxC-YW68",
    authDomain: "fir-project-e3f37.firebaseapp.com",
    projectId: "fir-project-e3f37",
    storageBucket: "fir-project-e3f37.appspot.com",
    messagingSenderId: "40952995728",
    appId: "1:40952995728:web:674ec3713009961f2c9d15",
    measurementId: "G-G6SYF73WZC"
  };

  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();