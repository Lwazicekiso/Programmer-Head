//signup.js

// Initialize Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

const firebaseConfig = {
        apiKey: "AIzaSyD-LRB7hlcwQ6w2OIXJTFN9EHagADyEMG4",
        authDomain: "programmer-head.firebaseapp.com",
        projectId: "programmer-head",
        storageBucket: "programmer-head.appspot.com",
        messagingSenderId: "388294319217",
        appId: "1:388294319217:web:1bc2e88a9823308db70fd0",
        measurementId: "G-PP3LQ73Y3Y"
      };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const name = document.getElementById('username').value; 
  
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("User signed up");
      console.log('User created:', user);
      // You can redirect to another page or perform other actions here
    })
    .catch((error) => {
        alert("Error with creating user:", error); 
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error creating user:', errorCode, errorMessage);
      // Display error to the user
    });
});