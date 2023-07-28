import { initializeApp } from "firebase/app";
// google sign in fast
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// what we need to import from fire base
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZSegnu8qAHXDEWGR_IhqVsNuQI5AcT5Q",
  authDomain: "finance-tracker-test-30d7b.firebaseapp.com",
  projectId: "finance-tracker-test-30d7b",
  storageBucket: "finance-tracker-test-30d7b.appspot.com",
  messagingSenderId: "690720910479",
  appId: "1:690720910479:web:eb728c2f644235524ed4fa",
  measurementId: "G-0ZE3SMET7B",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
