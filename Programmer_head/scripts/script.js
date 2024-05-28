// Initialize Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js';
import { getAuth, EmailAuthProvider } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js';
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";


// Load FirebaseUI AFTER Firebase initializatsion
let firebaseui;
const loadFirebaseUI = async () => {
  try {
    // Dynamically import FirebaseUI
    firebaseui = await import('https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.js');

    // Now initialize FirebaseUI
    initFirebaseAuth();
  } catch (error) {
    console.error("Error loading FirebaseUI:", error);
  }
};

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, // Update this variable with your environment variable.
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase app FIRST
const app = initializeApp(firebaseConfig);

// NOW you can get references to other services
const auth = getAuth();
const firestore = getFirestore();

// FirebaseUI configuration (same as before)
const uiConfig = {
  signInSuccessUrl: "/", 
  signInOptions: [
    EmailAuthProvider.PROVIDER_ID, 
  ],
  tosUrl: "<your-terms-of-service-url>",
  privacyPolicyUrl: "<your-privacy-policy-url>",
};

// Function to initialize FirebaseUI AFTER Firebase is loaded
async function initFirebaseAuth() {
  const ui = new firebaseui.auth.AuthUI(auth);
  ui.start("#firebaseui-auth-container", uiConfig);
}

// Load FirebaseUI after Firebase is ready
loadFirebaseUI();