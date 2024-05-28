// Initialize Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js';
import { getAuth, EmailAuthProvider } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js';
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: atob(import.meta.env.VITE_ENCODED_API_KEY), // Decode your encoded key
    authDomain: "programmer-head.firebaseapp.com",
    projectId: "programmer-head",
    storageBucket: "programmer-head.appspot.com",
    messagingSenderId: "388294319217",
    appId: "1:388294319217:web:1bc2e88a9823308db70fd0",
    measurementId: "G-PP3LQ73Y3Y"
  };
  

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get a reference to the auth instance
export const auth = getAuth(app);
export const firestore = getFirestore(app);
