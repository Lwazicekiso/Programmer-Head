//signup.js

// Initialize Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, EmailAuthProvider } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js';
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";

const encodedApiKey = btoa("AIzaSyD-LRB7hlcwQ6w2OIXJTFN9EHagADyEMG4"); 

// In your script.js
const firebaseConfig = {
  apiKey: atob(encodedApiKey), //add layer for security
        authDomain: "programmer-head.firebaseapp.com",
        projectId: "programmer-head",
        storageBucket: "programmer-head.appspot.com",
        messagingSenderId: "388294319217",
        appId: "1:388294319217:web:1bc2e88a9823308db70fd0",
        measurementId: "G-PP3LQ73Y3Y"
      };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);





document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signup-form");
  const signinButton = document.getElementById("Sign_in"); 

  signupForm.addEventListener("submit", (event) => {
    //sign-up logic ...
    const signupForm = document.getElementById('signup-form');

      signupForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            alert("User signed up");
            console.log('User created:', user);
          })
          
          .catch((error) => {
              alert("Error with creating user:", error); 
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error creating user:', errorCode, errorMessage);

            // Display error to the user
    });
});
  });

  // Sign-in button click handler
  const errorDisplay = document.createElement('p'); // Create error display element
  errorDisplay.id = 'error-message';
  signupForm.appendChild(errorDisplay); // Append it to your form 

  signinButton.addEventListener("click", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    try {
      // Sign in with email and password
      await signInWithEmailAndPassword(auth, email, password);
      alert("Welcome Back");
      window.location.href = "././Programming_languages.html"; // redirect to home page (adjust this if needed)
    } catch (error) {
      // Enhanced error handling with specific error messages
      let errorMessage = "An error occurred."; // Default error message

      switch (error.code) {
        case "auth/wrong-password":
          errorMessage = "Incorrect password. Please try again.";
          break;
        case "auth/user-not-found":
          errorMessage = "User not found. Please check your email or sign up.";
          break;
        case "auth/invalid-email":
          errorMessage = "Invalid email address. Please check your email and try again.";
          break;
        // ... add more cases for other Firebase errors you want to handle ...
        default:
          errorMessage = "An unexpected error occurred. Please try again later."; // Generic error message for unexpected issues
      }
      errorDisplay.textContent = errorMessage; // Show error message to user
      console.error("Error signing in:", error.code, error.message);
    }
  });
  });