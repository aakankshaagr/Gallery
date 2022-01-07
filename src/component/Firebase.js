// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
//import "firebase/firestore"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDD2ytliFephUN4B4uXJAVX_jBw67vmsas",
  authDomain: "gallery-8b330.firebaseapp.com",
  projectId: "gallery-8b330",
  databaseURL: "https://gallery-8b330.firebaseio.com",
  storageBucket: "gallery-8b330.appspot.com",
  messagingSenderId: "473815176913",
  appId: "1:473815176913:web:c7b379c38069c8da2f57f0",
  measurementId: "G-J84DQGEEC8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };
