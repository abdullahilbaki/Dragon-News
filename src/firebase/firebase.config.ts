// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB55SzMJc5SZ_4zo5I6hUfswXtaoL6hFSA",
  authDomain: "dragon-news-baki.firebaseapp.com",
  projectId: "dragon-news-baki",
  storageBucket: "dragon-news-baki.firebasestorage.app",
  messagingSenderId: "449958101921",
  appId: "1:449958101921:web:12b3b6fc1521a36d9f01e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;