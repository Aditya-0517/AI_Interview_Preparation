import { getFirestore } from "firebase/firestore";
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpwDoam6CpwJqHmF_AhGHhG2b_9-02po4",
  authDomain: "ai-interview-prep-4a910.firebaseapp.com",
  projectId: "ai-interview-prep-4a910",
  storageBucket: "ai-interview-prep-4a910.firebasestorage.app",
  messagingSenderId: "37743436337",
  appId: "1:37743436337:web:a3e94536d4c7e0c185eb10",
  measurementId: "G-WTWBRM23QB"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);