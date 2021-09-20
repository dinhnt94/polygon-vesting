import { initializeApp } from "firebase/app";
import { doc, setDoc, getFirestore, collection, getDocs, query, where } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBrSCwi5HjfTqsPBk48gUKWhC7ciQpzunk",
  authDomain: "test-8cb1b.firebaseapp.com",
  projectId: "test-8cb1b",
  storageBucket: "test-8cb1b.appspot.com",
  messagingSenderId: "419654618621",
  appId: "1: 419654618621: web: 881a365ea7d0c74b469d94",
  measurementId: "G-RM6Y7EYK49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default app;

export async function getDocAddress() {
  const q = query(collection(db, "address"));
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
    const cityRef = doc(db, "address", address.address);
    await setDoc(cityRef, address);
    console.log("Document written with ID: ", cityRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
