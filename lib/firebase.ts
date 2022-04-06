// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
if(typeof window !== 'undefined' && getApps().length ===0){
    const firebaseConfig = {
        apiKey: "AIzaSyC2qpIdiovIxj3nS66uSO1XJJUkm0oXLkE",
        authDomain: "nextjs-firebase-app-6a8b6.firebaseapp.com",
        projectId: "nextjs-firebase-app-6a8b6",
        storageBucket: "nextjs-firebase-app-6a8b6.appspot.com",
        messagingSenderId: "1047854742243",
        appId: "1:1047854742243:web:038af35ec95fa077a463d6",
        measurementId: "G-N9G2RJX091"
    };
    // Initialize Firebase
    initializeApp(firebaseConfig);
    getAnalytics();
}
