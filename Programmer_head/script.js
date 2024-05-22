// Initialize Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-LRB7hlcwQ6w2OIXJTFN9EHagADyEMG4",
  authDomain: "programmer-head.firebaseapp.com",
  projectId: "programmer-head",
  storageBucket: "programmer-head.appspot.com",
  messagingSenderId: "388294319217",
  appId: "1:388294319217:web:1bc2e88a9823308db70fd0",
  measurementId: "G-PP3LQ73Y3Y"
};


// Initialize Firebase app FIRST
const app = initializeApp(firebaseConfig);

// NOW you can get references to other services
const auth = getAuth();
const firestore = getFirestore();


