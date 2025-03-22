// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD9CS6_8hLbbjltpYNJfDgZnJVC36Ko5D0",
  authDomain: "blog-app-e0e5b.firebaseapp.com",
  projectId: "blog-app-e0e5b",
  storageBucket: "blog-app-e0e5b.firebasestorage.app",
  messagingSenderId: "341663906341",
  appId: "1:341663906341:web:1b3480687c02ec45855dcc",
  measurementId: "G-BQSB91E3V7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imageUpload = getAnalytics(app);