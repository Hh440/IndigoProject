// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';




const firebaseConfig = {
    apiKey: "AIzaSyCLS2CR3EURWRYhbPl8_THKDOpHODjgrnw",
    authDomain: "indigo-ff258.firebaseapp.com",
    projectId: "indigo-ff258",
    storageBucket: "indigo-ff258.appspot.com",
    messagingSenderId: "861993075784",
    appId: "1:861993075784:web:c82afb68736c1d4aaa447d",
    measurementId: "G-NHEBN1MN2Z"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const messaging = getMessaging(app);
getToken(messaging, { vapidKey: 'BGlDcjprQeYNQI3i_ur1TNS5mn4LjcELEK1a91NPcyYbPlOlUU6vZCZHoC3xEW-h9PybUP3a5AEanJbmIa2Mn68' }).then((currentToken) => {
  if (currentToken) {
    console.log(currentToken);
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});

onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  // ...
});