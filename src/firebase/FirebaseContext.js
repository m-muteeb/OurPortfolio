// src/firebase/FirebaseContext.js
import React, { createContext, useContext } from 'react';
import { auth } from '../firebase/firebaseConfig'; // Assuming auth is exported from firebaseConfig
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {
  const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
  
  const logOut = () => signOut(auth);

  return (
    <FirebaseContext.Provider value={{ signIn, logOut }}>
      {children}
    </FirebaseContext.Provider>
  );
};
