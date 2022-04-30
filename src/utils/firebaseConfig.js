import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJSCaqv2VPQ7ZK6JIVVuvzBCcX_V_AirM",
  authDomain: "e-commerce-react-96289.firebaseapp.com",
  projectId: "e-commerce-react-96289",
  storageBucket: "e-commerce-react-96289.appspot.com",
  messagingSenderId: "510370158710",
  appId: "1:510370158710:web:abb824f28fefcdc52a6757",
  measurementId: "G-4WV5LYT5JN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db; 