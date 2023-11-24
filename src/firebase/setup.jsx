import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBWdzmh1OdOuBs1OoxxWRandCaSyO4bbN8",
  authDomain: "whatsapp-clone-8460b.firebaseapp.com",
  projectId: "whatsapp-clone-8460b",
  storageBucket: "whatsapp-clone-8460b.appspot.com",
  messagingSenderId: "406931432274",
  appId: "1:406931432274:web:5929227e52591e9d7dd08b",
  measurementId: "G-6BRN064LQQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);
export const database = getFirestore(app);
