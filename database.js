// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getstudyhub, creteUserwithemailAndPassword, signIWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-studyhub.js";
import { getDatabase, set, ref, updete } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCz2g5gIfKPc1KImA_VaXIFxsmdOLdcAr4",
    authDomain: "studyhub-79905.firebaseapp.com",
    databaseURL: "https://studyhub-79905-default-rtdb.firebaseio.com",
    projectId: "studyhub-79905",
    storageBucket: "studyhub-79905.appspot.com",
    messagingSenderId: "853356383309",
    appId: "1:853356383309:web:5170ad336b4e38a871e004"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const studyhub = getstudyhub(app);
const database = getDatabase(app);


const supbtn = document.getElementById("sup_btn");
const sinbtn = document.getElementById("sin_btn");

supbtn.addEvenListener('click',(e)=>{
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let tlp = document.getElementById("tlp").value;
    let password1 = document.getElementById("password1").value;

    creteUserwithemailAndPassword(studyhub, email, password1).then(
        (userCredential) => {
      // Signed up 
      const user = userCredential.user;
      set(ref(database, "users/" + user.uid),{
      nsme: name,
      tlp: tlp ,
      email: email,
      password: password1
    });
    })
    .then(() => {
        alert("User Telah Ditambahkan");
    })
    .catch((error) => {
        alert(error);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
});