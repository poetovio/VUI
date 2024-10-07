// Import the functions you need from the SDKs you need
import { deleteApp, getApp, initializeApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, setPersistence, inMemoryPersistence } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEaPjF0W6AotX3ncQxIdfetuLqQTo01OQ",
  authDomain: "picikl-f9b68.firebaseapp.com",
  projectId: "picikl-f9b68",
  storageBucket: "picikl-f9b68.appspot.com",
  messagingSenderId: "47325884079",
  appId: "1:47325884079:web:beb290617c7a4d7cbaee5a",
  measurementId: "G-RZVBV85HDZ"
};

// Initialize Firebase
let app;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
  // analytics = getAnalytics(app);
} else {
    app = getApp();
    deleteApp(app);
    app = initializeApp(firebaseConfig);
    // analytics = getAnalytics(app);
}

export const auth = getAuth(app);
// export const anal = getAnalytics(app);

export const db = getFirestore(app);