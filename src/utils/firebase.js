// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDfHhDmobE821k6oMvNIYUHPjZ42qq0bFE",
    authDomain: "foodorderingapp-e4d2c.firebaseapp.com",
    projectId: "foodorderingapp-e4d2c",
    storageBucket: "foodorderingapp-e4d2c.appspot.com",
    messagingSenderId: "314499908562",
    appId: "1:314499908562:web:0971cfd7f9adbe0f0afe0b",
    measurementId: "G-WEDJS8ZS6R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();