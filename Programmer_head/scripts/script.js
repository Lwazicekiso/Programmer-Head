import { auth } from './firebaseConfig.js'

// Load FirebaseUI AFTER Firebase initialization
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

// FirebaseUI configuration 
const uiConfig = {
  signInSuccessUrl: "/", 
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID, 
  ],
  tosUrl: "<your-terms-of-service-url>",
  privacyPolicyUrl: "<your-privacy-policy-url>",
  credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM, // Show account chooser if multiple accounts exist
};

// Function to initialize FirebaseUI AFTER Firebase is loaded
async function initFirebaseAuth() {
  const ui = new firebaseui.auth.AuthUI(auth);
  ui.start('#firebaseui-auth-container', uiConfig);
}

// Load FirebaseUI after Firebase is ready
loadFirebaseUI();
