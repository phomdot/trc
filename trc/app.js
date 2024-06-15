
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDqBXfYSKg1mpeAnhRChwIgx2ABdiKuiWM",
    authDomain: "tr-chronicle.firebaseapp.com",
    projectId: "tr-chronicle",
    storageBucket: "tr-chronicle.appspot.com",
    messagingSenderId: "934678235855",
    appId: "1:934678235855:web:11e83ab91fe3046e8385ba",
    measurementId: "G-DYW2BRKQN3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
