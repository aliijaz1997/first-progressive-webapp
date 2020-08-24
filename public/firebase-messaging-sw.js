importScripts('https://www.gstatic.com/firebasejs/7.19.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.19.0/firebase-messaging.js')

// Making the service worker

firebase.initializeApp({
    apiKey: "AIzaSyB4WExiy3E1D90R-rJ-WEjRt1Q1fx09hx0",
    authDomain: "first-progressive-webapp-15048.firebaseapp.com",
    databaseURL: "https://first-progressive-webapp-15048.firebaseio.com",
    projectId: "first-progressive-webapp-15048",
    storageBucket: "first-progressive-webapp-15048.appspot.com",
    messagingSenderId: "326749389590",
    appId: "1:326749389590:web:66f7607db9f4d3d4270637"
})

// as we are using the messaging as a function of firebase so we have to call it


firebase.messaging();