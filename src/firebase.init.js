// Import the functions you need from the SDKs you need
import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZdllFy9lIwVyW_m9rz4Q2E2HpidH59D4",
  authDomain: "genius-car-service-62-main.firebaseapp.com",
  projectId: "genius-car-service-62-main",
  storageBucket: "genius-car-service-62-main.appspot.com",
  messagingSenderId: "63817943050",
  appId: "1:63817943050:web:76d708fcbbd6ea7e5037f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
