// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js"; 


// Your Firebase config
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



window.signup = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const fullname = document.getElementById("fullname").value;

  if (!fullname) {
    alert("Please enter your full name.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Account created successfully!");
      console.log("User:", userCredential.user);
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
};

   // Google Sign-in function
   
window.signInWithGoogle = function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      alert('Signed in with Google!');
      console.log("Google User:", result.user);
      window.location.href = 'index.html'; 
    })
    .catch((error) => {
      alert(error.message);
    });
};
