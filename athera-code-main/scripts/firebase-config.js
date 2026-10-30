// Versões unificadas e Firestore importado
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

//Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDL6PxNz9_H0AQCJRjnWVATC9l4gbw5b3Q",
    authDomain: "athera-code.firebaseapp.com",
    projectId: "athera-code",
    storageBucket: "athera-code.firebasestorage.app",
    messagingSenderId: "594328546198",
    appId: "1:594328546198:web:2b6db0c46799595dc20bb7",
    measurementId: "G-ZGKGQ6YW4L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);