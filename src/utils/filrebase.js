import { initializeApp } from "firebase/app";
import { doc, setDoc, getFirestore, collection, getDocs, query, where } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK373TOKRb34raPmVdZp-_g8AkC76_rPQ",
  authDomain: "test-vesting.firebaseapp.com",
  projectId: "test-vesting",
  storageBucket: "test-vesting.appspot.com",
  messagingSenderId: "920193995873",
  appId: "1:920193995873:web:49cefd2a9ea8868bdec620",
  measurementId: "G-P13EELPCM6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default app;

export async function getDocAddress() {
  const env = window.location.pathname.replace("/", "");
  const name_address = "address_" + (env === "" ? "private" : env);
  console.log(name_address)

  const q = query(collection(db, name_address));
  const querySnapshot = await getDocs(q);
  console.log('querySnapshot: ', querySnapshot);
  const reuslt = querySnapshot.docs.map((doc) => {
    return doc.data();
  });
  return reuslt;
}

export async function addDocAddres(address) {
  const env = window.location.pathname.replace("/", "");
  const name_address = "address_" + (env === "" ? "private" : env);

  if (!address) return;
  try {
    console.log(db, name_address, address)
    const cityRef = doc(db, name_address, address.address);
    await setDoc(cityRef, address);
    console.log("Document written with ID: ", cityRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
