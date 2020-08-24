
// to be noted that when I was pushing this to github I used orgin instead of origin
import React from 'react';
import './App.css';
import firebase from "./cloudservice/firebaseservice";
function App() {

  // getting token
  const messaging = firebase.messaging();
  // console.log(messaging);
 messaging.requestPermission().then(() => {
   return messaging.getToken()
 }).then((token) => {
   console.log('the token is = ', token)
 }) 
  // console.log({initNotification});
  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
