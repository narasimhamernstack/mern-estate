// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmP80nqcLWjdge1BoMiqzSSOu4vryypAQ",
  authDomain: "new-mern-estate.firebaseapp.com",
  projectId: "new-mern-estate",
  storageBucket: "new-mern-estate.appspot.com",
  messagingSenderId: "181036796358",
  appId: "1:181036796358:web:92763635fc28a84f894ac7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);