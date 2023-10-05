// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZdLfbCxmYkUA7AkNCZMEA9-6ZzIOyxiQ",
  authDomain: "foundation-pwa-vue.firebaseapp.com",
  databaseURL: "https://foundation-pwa-vue-default-rtdb.firebaseio.com",
  projectId: "foundation-pwa-vue",
  storageBucket: "foundation-pwa-vue.appspot.com",
  messagingSenderId: "1068488126025",
  appId: "1:1068488126025:web:843282705661a984e81998"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export default db