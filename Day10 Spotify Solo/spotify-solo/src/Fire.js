import firebase from 'firebase';


  var firebaseConfig = {
    apiKey: "AIzaSyBbCiFthOyr-htCkufJtZpi90xCk-Bk_yY",
    authDomain: "netlifxu.firebaseapp.com",
    databaseURL: "https://netlifxu.firebaseio.com",
    projectId: "netlifxu",
    storageBucket: "netlifxu.appspot.com",
    messagingSenderId: "129051693794",
    appId: "1:129051693794:web:b9e54d928ed00000d844bb",
    measurementId: "G-M28JW0WWFH"
  };
  
  const fire = firebase.initializeApp(firebaseConfig);


  export default fire;