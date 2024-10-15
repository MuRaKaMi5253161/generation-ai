// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBavvadVgQWUU5KSmlymtAfQGa7Eiv6Mfw",
  authDomain: "generation-ai-72563.firebaseapp.com",
  projectId: "generation-ai-72563",
  storageBucket: "generation-ai-72563.appspot.com",
  messagingSenderId: "511759209698",
  appId: "1:511759209698:web:03c10f97fffe9ccfd43abb",
};

let app;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };
