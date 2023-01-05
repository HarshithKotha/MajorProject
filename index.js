import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// import initializeApp from 'firebase/app';
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import {getAuth, createUserWithEmailAndPassword,signOut,onAuthStateChanged, signInWithEmailAndPassword ,sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

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

const loginform = document.querySelector('#loginForm')
loginform.addEventListener('submit',(e)=>{
    e.preventDefault();
})

auth.onAuthStateChanged((user)=>{
    if(user){
        location.replace("welcome.html")
    }
})

const login = document.querySelector('#loginForm')
login.addEventListener('submit',(e)=>{
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    // signInWithEmailAndPassword(email,password)
    signInWithEmailAndPassword(auth,email,password)
    .then((cred)=>{
        // alert("User succesfully created")
        location.replace("welcome.html");
        console.log("user created",cred.user)
        
    })
    .catch((err)=>{
        const msg = err.message
        console.log(msg==="Firebase: Error (auth/user-not-found)")
        if(msg==="Firebase: Error (auth/user-not-found)"){
            alert("please signup before logging in")
        }
        else
        document.getElementById('error').innerHTML=err.message;
        console.log(err.message)
    })
})


// function login(){
//     const email = document.getElementById("email").value
//     const password = document.getElementById("password").value
//     signInWithEmailAndPassword(email,password)
// }

const signup = document.querySelector('#signUp')
signup.addEventListener('click',(e)=>{
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    // signInWithEmailAndPassword(email,password)
    createUserWithEmailAndPassword(auth,email,password)
    // .then((cred)=>{
    //     // alert("User succesfully created")
    //     // location.replace("welcome.html");
    //     document.getElementById('error').innerHTML="User Created Successfully now please login";
    //     console.log("user created",cred.user)
        
    // })
    .catch((err)=>{
        
        document.getElementById('error').innerHTML=err.message;
        console.log(err.message)
    })
})





const forgotpassword = document.querySelector('#forgotPass')
forgotpassword.addEventListener('click',(e)=>{
    const email = document.getElementById("email").value
    sendPasswordResetEmail(auth,email)
    .then(()=>{
        alert("reset password mail has been seen sent ")
    })
    .catch((err)=>{
        console.log(err.message)
    })
})