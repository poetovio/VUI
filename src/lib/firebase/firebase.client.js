// Import the functions you need from the SDKs you need
import { deleteApp, getApp, initializeApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, setPersistence, inMemoryPersistence } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// Initialize Firebase using environment variables
const firebaseConfig = {
  apiKey: "AIzaSyAPFbq1VsZP3k-TqXscXE2z_dZFwfRdxxA",
  authDomain: "iqbike-b1e1d.firebaseapp.com",
  projectId: "iqbike-b1e1d",
  storageBucket: "iqbike-b1e1d.appspot.com",
  messagingSenderId: "292803515667",
  appId: "1:292803515667:web:efeb65071cc17ff359f6e6",
  measurementId: "G-4N0LWPZ514"
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
