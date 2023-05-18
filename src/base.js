import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD3tTugYKXX5wZ-9wRqjR4NawWv2XvM6hI",
  authDomain: "chat-app-8774b.firebaseapp.com",
  projectId: "chat-app-8774b",
  storageBucket: "chat-app-8774b.appspot.com",
  messagingSenderId: "1028840332654",
  appId: "1:1028840332654:web:095c576d02a017e841b57f",
  measurementId: "G-7QT4PLDWX4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);