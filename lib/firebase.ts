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
        projectId: process.env.FSA_PROJECT_ID,
        privateKey: process.env.FSA_PRIVATE_KEY,
        clientEmail: process.env.FSA_CLIENT_EMAIL,
    };

    // Initialize Firebase
    initializeApp(firebaseConfig);
    getAnalytics();
}
