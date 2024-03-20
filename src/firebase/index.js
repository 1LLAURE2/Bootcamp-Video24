// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDwzrBWw-k7jL6UFo4MvQ9K3uI0Tg9jKGw",
    authDomain: "bc-taskfirebase.firebaseapp.com",
    projectId: "bc-taskfirebase",
    storageBucket: "bc-taskfirebase.appspot.com",
    messagingSenderId: "784678256876",
    appId: "1:784678256876:web:512704f787e4676bb565c9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//Initializer Firestore
export const db=getFirestore();