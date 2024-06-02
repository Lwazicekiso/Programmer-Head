// signup.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js';
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
    EmailAuthProvider 
} from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js';
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";
import { firebaseConfig } from "./firebaseConfig.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();


signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signup-form");
    const signinButton = document.getElementById("Sign_in"); // Sign in button
    const googleSigninButton = document.getElementById("google-signin-button"); // Get reference to google button
  
    const errorDisplay = document.createElement("p");
    errorDisplay.id = "error-message";
    //signupForm.appendChild(errorDisplay);

    // Sign-up form submission handler 
    signupForm.addEventListener("submit", function(event){
      event.preventDefault(); // Prevent default form submission

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // Update the user's profile with the display name
          user.updateProfile({ displayName: name });
          alert("User signed up");
          console.log("User created:", user);
          window.location.href = "index.html";
          // You can redirect to another page or perform other actions here
        })
        .catch((error) => {
          // Improved error handling with specific messages
          let errorMessage = "An error occurred."; // Default error message

          switch (error.code) {
            case "auth/email-already-in-use":
              errorMessage = "Email already in use. Please try another one.";
              break;
            case "auth/weak-password":
              errorMessage =
                "Password is too weak. Please choose a stronger password.";
              break;
            // ... add more cases for other Firebase errors you want to handle ...
            default:
              errorMessage =
                "An unexpected error occurred. Please try again later."; // Generic error message for unexpected issues
          }
          errorDisplay.textContent = errorMessage; // Show error message to user
          console.error("Error creating user:", error.code, error.message);
        });
    });
  
    // Sign-in button click handler
    signinButton.addEventListener("click", async function(event) {
      event.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      
      try {
        // Sign in with email and password
        await signInWithEmailAndPassword(auth, email, password);
        alert("Welcome Back");
        window.location.href = "././Programming_languages.html"; 
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
  
  //GOOGLE SIGN IN
  googleSigninButton.addEventListener("click", async (event) => {
    event.preventDefault();
  
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider); 
      // Handle successful sign-in, e.g., redirect to the home page
      alert("User signed in with Google successfully!");
      window.location.href = "index.html";
    } catch (error) {
      // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error signing in with Google:", errorCode, errorMessage);
        alert("Error signing in with Google:", errorMessage);
      }
  });

  ///FORGOT PASSWORD HANDLER
  

});
