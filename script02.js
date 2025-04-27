// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBAY9eLuHBMAbDg0l9eU63fTeS2hbnQ738",
  authDomain: "my-signup-page-6d005.firebaseapp.com",
  projectId: "my-signup-page-6d005",
  storageBucket: "my-signup-page-6d005.appspot.com",
  messagingSenderId: "908273355646",
  appId: "1:908273355646:web:8dad83bd2012af234e412f",
  measurementId: "G-7BV23KW67N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Initialize Google provider
const provider = new GoogleAuthProvider(); 




window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");
      console.log("User:", userCredential.user);
      window.location.href = "index.html"; 
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
};

// Google login function
window.logInWithGoogle = function () {
  

  signInWithPopup(auth, provider)  
    .then((result) => {
      alert("Signed in with Google!");
      console.log("Google User:", result.user);
      window.location.href = 'dashboard.html';
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
};
