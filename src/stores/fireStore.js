import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase/firebase.client";

export const firestoreInstance = {
  getUporabniki: async () => {
    const uporabnikiCollection = collection(db, "uporabniki");
    
    try {
      const querySnapshot = await getDocs(uporabnikiCollection);

      const dokumenti = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        dokumenti.push(data);
      });

      return dokumenti;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
  getUser: async (mail) => {
    const uporabnikiCollection = collection(db, "uporabniki");

    let user = null;
    
    try {
      const querySnapshot = await getDocs(uporabnikiCollection);

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if(data.email === mail) {
          user = data;
        }
      });

      return user;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  
  }
};