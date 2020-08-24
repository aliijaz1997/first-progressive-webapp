import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB4WExiy3E1D90R-rJ-WEjRt1Q1fx09hx0",
  authDomain: "first-progressive-webapp-15048.firebaseapp.com",
  databaseURL: "https://first-progressive-webapp-15048.firebaseio.com",
  projectId: "first-progressive-webapp-15048",
  storageBucket: "first-progressive-webapp-15048.appspot.com",
  messagingSenderId: "326749389590",
  appId: "1:326749389590:web:66f7607db9f4d3d4270637"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase;
//   const messaging = firebase.messaging();

// export function initNotification() {
//     Notification.requestPermission().then((permission) => { 
//         console.log(permission) 
//         if(permission === "granted"){
//             messaging.getToken().then((currentToken) => {
//                 if (currentToken) {
//                     console.log("TOKEN")
//                     console.log(currentToken);
//                 } else {
//                   console.log('No Instance ID token available. Request permission to generate one.');

//                 }
//               }).catch((err) => {
//                 console.log('An error occurred while retrieving token. ', err);
//               });
//         }
//     })
// }