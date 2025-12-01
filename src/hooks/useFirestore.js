// src/hooks/useFirestore.js

import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

const useFirestore = () => {
  const addMessage = async (values) => {
    const { email, message } = values;
    try {
      await addDoc(collection(db, 'messages'), {
        email,
        message,
        timestamp: new Date(), // Optional: add a timestamp
      });
    } catch (error) {
      console.error('Error adding document: ', error);
      throw new Error('Failed to send message');
    }
  };

  return { addMessage };
};

export default useFirestore;
