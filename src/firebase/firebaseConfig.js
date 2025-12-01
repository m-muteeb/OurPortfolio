// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; // Import getAuth from Firebase Authentication

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyAlHPJ4BgN9ylBsxLhRSN7-nxe-12uePGg",
  authDomain: "muteeb-portfolio1.firebaseapp.com",
  projectId: "muteeb-portfolio1",
  storageBucket: "muteeb-portfolio1.appspot.com",
  messagingSenderId: "771361559806",
  appId: "1:771361559806:web:92cd1896b2c66b309f01af",
  measurementId: "G-2C2WD2JBMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app); // Initialize auth

// Export Firestore and Auth
export { db, auth };
