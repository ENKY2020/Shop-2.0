import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDxDzUk8z6pRKmTSXTABFpHPvyzxgVFzXk",
  authDomain: "enky-solutions.firebaseapp.com",
  projectId: "enky-solutions",
  storageBucket: "enky-solutions.appspot.com",
  messagingSenderId: "485303460501",
  appId: "1:485303460501:web:6d8c8f8f8f8f8f8f8f8f8f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);