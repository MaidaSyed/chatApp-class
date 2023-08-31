
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js"
import {getDatabase} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js"

 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyAV6k1WNa6Mofev3bUS1OJAX8P6IrPMV3s",
    authDomain: "chatapp-72275.firebaseapp.com",
    projectId: "chatapp-72275",
    storageBucket: "chatapp-72275.appspot.com",
    messagingSenderId: "648659479583",
    appId: "1:648659479583:web:7637896ae17f07f8be392a"
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app)

  export {db}