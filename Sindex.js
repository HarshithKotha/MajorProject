// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// import initializeApp from 'firebase/app';
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import {getAuth, createUserWithEmailAndPassword,signOut} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// import getAuth from 'firebase/auth';
// import createUserWithEmailAndPassword from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABAJA1335mQG-TPYxQV7yRkGKvxC-YW68",
  authDomain: "fir-project-e3f37.firebaseapp.com",
  projectId: "fir-project-e3f37",
  storageBucket: "fir-project-e3f37.appspot.com",
  messagingSenderId: "40952995728",
  appId: "1:40952995728:web:674ec3713009961f2c9d15",
  measurementId: "G-G6SYF73WZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

// const logout = document.querySelector('#btn')
// logout.addEventListener('click',(e)=>{
//     signOut(auth).then(()=>{
//         location.replace("index.html")
//     })
//     .catch((err) => {
//         console.log(err.message)
//     })
// })

const Login = (e) =>{
    e.preventDefault();
    const email = document.getElementById('#email').value
    const password = document.getElementById('#password').value
    createUserWithEmailAndPassword(auth,email,password)
    .then((cred)=>{
        // alert("User succesfully created")
        location.replace("welcome.html");
        console.log("user created",cred.user)
        
    })
    .catch((err)=>{
        console.log(err.message)
    })
}

// const signupForm = document.querySelector('#loginForm')
// signupForm.addEventListener('submit',(e) => {
//     e.preventDefault();
//     const email = signupForm.email.value
//     const password = signupForm.password.value
//     createUserWithEmailAndPassword(auth,email,password)
//     .then((cred)=>{
//         // alert("User succesfully created")
//         location.replace("welcome.html");
//         console.log("user created",cred.user)
//     })
//     .catch((err)=>{
//         console.log(err.message)
//     })
// })



