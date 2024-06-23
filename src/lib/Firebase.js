import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBis7rixKKFQ3GQTlrjJ662ijtv_i_mONc",
  authDomain: "html-project-66354.firebaseapp.com",
  projectId: "html-project-66354",
  storageBucket: "html-project-66354.appspot.com",
  messagingSenderId: "1076393676660",
  appId: "1:1076393676660:web:b535ea6691d1c9b819a621",
  measurementId: "G-BRYD9BPFS8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
