import * as firebase from 'firebase';
//import firestore from 'firebase/firestore'

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDCFb-SS9oHu8uji-uDP6cx4oThhfAee8A",
    authDomain: "burger-queen-427aa.firebaseapp.com",
    databaseURL: "https://burger-queen-427aa.firebaseio.com",
    projectId: "burger-queen-427aa",
    storageBucket: "burger-queen-427aa.appspot.com",
    messagingSenderId: "265081605680",
    appId: "1:265081605680:web:cd6e7c37215e3bfe74e7f5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase;