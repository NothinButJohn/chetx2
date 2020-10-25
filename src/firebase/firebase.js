import * as firebase from 'firebase/app';



const firebaseConfig = {
    apiKey: "AIzaSyCE9uVfmwLPkxHJIVqgbSq-oXmAQOdEnnw",
    authDomain: "zampakto-40964.firebaseapp.com",
    databaseURL: "https://zampakto-40964.firebaseio.com",
    projectId: "zampakto-40964",
    storageBucket: "zampakto-40964.appspot.com",
    messagingSenderId: "925810453632",
    appId: "1:925810453632:web:f85a0cf238ce5696344a65",
    measurementId: "G-8GWN8H1B4E"
  };

  function initFirebase(){
      firebase.initializeApp(firebaseConfig);
  }