// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIVCt9-ZqPREE-hD5KE5TcHOldqF3zh-A",
  authDomain: "udemy-9db3d.firebaseapp.com",
  projectId: "udemy-9db3d",
  storageBucket: "udemy-9db3d.firebasestorage.app",
  messagingSenderId: "474351481966",
  appId: "1:474351481966:web:c46a1d22082edd0ac3a27f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleprovider = new GoogleAuthProvider();