// Import the functions you need from the SDKs you need
import { deleteApp, getApp, initializeApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, setPersistence, inMemoryPersistence } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// Initialize Firebase using environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MEASUREMENTID
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
