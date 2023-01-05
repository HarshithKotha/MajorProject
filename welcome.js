import {getAuth , signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
const auth = getAuth();
auth.onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }
})


document.querySelector('#btn').addEventListener('click',(e)=>{
    signOut(auth)
    .then(()=>{
        // alert("User succesfully created")
        location.replace("index.html");
        console.log("user created",cred.user)
        
    })
    .catch((err)=>{
        console.log(err.message)
    })
})
