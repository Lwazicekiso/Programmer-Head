// Initialize Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";

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
const firestore = getFirestore(app);

        console.log(firebase)