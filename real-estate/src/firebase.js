// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a7a00.firebaseapp.com",
  projectId: "mern-estate-a7a00",
  storageBucket: "mern-estate-a7a00.appspot.com",
  messagingSenderId: "458515126665",
  appId: "1:458515126665:web:afe744c85f3a70dc92e958",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
