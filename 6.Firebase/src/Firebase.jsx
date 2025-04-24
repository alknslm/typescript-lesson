import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDz0uQXXIrGm1XWn-yfFABhBgxiO--CaRc",
    authDomain: "fir-education-7c95d.firebaseapp.com",
    projectId: "fir-education-7c95d",
    storageBucket: "fir-education-7c95d.firebasestorage.app",
    messagingSenderId: "670577782372",
    appId: "1:670577782372:web:6db1a5f1fe50110773b971"
};

export const auth = getAuth(app);
export const app = initializeApp(firebaseConfig);