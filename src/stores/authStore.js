import { writable } from "svelte/store";
import { auth } from "../lib/firebase/firebase.client";
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, updateEmail, updatePassword } from "firebase/auth";

export const authStore = writable({
    isLoading: true,
    currentUser: null
});

// authentication functions
export const authHandlers = {
    signup: async (/** @type {string} */ email, /** @type {string} */ password) => {
        await createUserWithEmailAndPassword(auth, email, password);
    },
    login: async (/** @type {string} */ email, /** @type {string} */ password) => {
        await signInWithEmailAndPassword(auth, email, password);
    },
    logout: async () => {
        await auth.signOut();
    },
    resetPassword: async (/** @type {string} */ email) => {
        await sendPasswordResetEmail(auth, email);
    },
    updateEmail: async (/** @type {string} */ email) => {
        // @ts-ignore
        await updateEmail(auth.currentUser, email);
    },
    updatePassword: async (/** @type {string} */ password) => {
        // @ts-ignore
        await updatePassword(auth.currentUser, password);
    }
}