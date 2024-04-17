// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMHYL0mcF0fbwutfH8ij-Xo8NICm59iK0",
  authDomain: "the-dragon-news-b5e01.firebaseapp.com",
  projectId: "the-dragon-news-b5e01",
  storageBucket: "the-dragon-news-b5e01.appspot.com",
  messagingSenderId: "500123737211",
  appId: "1:500123737211:web:10f1c5c9c662bada4216de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app