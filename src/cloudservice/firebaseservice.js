import firebase from 'firebase';

const initapp = {
    apiKey: "AIzaSyAxpv9eml7UsunRZTR8G30FRqFhCADNuU8",
    authDomain: "progressivewebapp1-63452.firebaseapp.com",
    databaseURL: "https://progressivewebapp1-63452.firebaseio.com",
    projectId: "progressivewebapp1-63452",
    storageBucket: "progressivewebapp1-63452.appspot.com",
    messagingSenderId: "804569726537",
    appId: "1:804569726537:web:c5808899ecf7eb57820998"
};

firebase.initializeApp(initapp);

export default firebase;