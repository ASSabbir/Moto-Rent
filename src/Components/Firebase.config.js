// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiIzg4J_5rHAczGy1ZQXOs3OpVWtFxJIk",
  authDomain: "motorent-120eb.firebaseapp.com",
  projectId: "motorent-120eb",
  storageBucket: "motorent-120eb.firebasestorage.app",
  messagingSenderId: "579163326835",
  appId: "1:579163326835:web:c60512a039012b67e35d06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);