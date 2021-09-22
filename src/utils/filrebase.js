import { initializeApp } from "firebase/app";
import { doc, setDoc, getFirestore, collection, getDocs, query, where } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApX07OmMG577TqrqTiWWKzHjpwZfq_1D4",
  authDomain: "epichero-95988.firebaseapp.com",
  projectId: "epichero-95988",
  storageBucket: "epichero-95988.appspot.com",
  messagingSenderId: "1054401040670",
  appId: "1:1054401040670:web:38669992d29b9da6f8b90f",
  measurementId: "G-JW2YBKF5CL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default app;

const env = window.location.pathname.replace("/", "");
const name_address = "address_" + env;

export async function getDocAddress() {
  const q = query(collection(db, name_address));
  const querySnapshot = await getDocs(q);
  console.log(querySnapshot);
  const reuslt = querySnapshot.docs.map((doc) => {
    return doc.data();
  });
  return reuslt;
}

export async function addDocAddres(address) {
  if (!address) return;
  try {
    const cityRef = doc(db, name_address, address.address);
    await setDoc(cityRef, address);
    console.log("Document written with ID: ", cityRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
