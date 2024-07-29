
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM_JCM1ypJmQpi5yW2vHwuLYBr_AsaH0k",
  authDomain: "myecom-fb681.firebaseapp.com",
  projectId: "myecom-fb681",
  storageBucket: "myecom-fb681.appspot.com",
  messagingSenderId: "240123442133",
  appId: "1:240123442133:web:b9ce492e1a2fb27701035c",
  measurementId: "G-55PW6KLHV7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }