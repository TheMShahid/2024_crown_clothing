// Import the necessary functions from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your Firebase configuration
const config = {
  apiKey: "AIzaSyBi9iK0Veacfg_nRM7YgmbdHSogYfNWDrM",
  authDomain: "crwn-clothing2024.firebaseapp.com",
  projectId: "crwn-clothing2024",
  storageBucket: "crwn-clothing2024.appspot.com",
  messagingSenderId: "477998057942",
  appId: "1:477998057942:web:59ad1e2872d5e3d5617c77",
  measurementId: "G-49P1W8G34B",
};

// Initialize Firebase
const app = initializeApp(config);

// Initialize Firestore and Auth
const firestore = getFirestore(app);
const auth = getAuth(app);

// Google Auth Provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

// Sign in with Google function
export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

// Export auth and firestore
export { auth, firestore };
