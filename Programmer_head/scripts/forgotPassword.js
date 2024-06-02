// forgotPassword.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js';
import { getAuth, sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js';
import { firebaseConfig } from "./firebaseConfig.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth();

document.addEventListener('DOMContentLoaded', () => {
  const forgotPasswordForm = document.getElementById("forgot-password-form");
  const errorDisplay = document.getElementById("error-message");

  if (forgotPasswordForm) {
    forgotPasswordForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const email = document.getElementById("email").value;

      try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset email sent!");
        window.location.href = "index.html";
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error sending password reset email:", errorCode, errorMessage);
        alert("Error sending password reset email:", errorMessage);
      }
    });
  } // <-- Remove the extra closing curly brace here
});