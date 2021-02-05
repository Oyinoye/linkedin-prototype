import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAS1I0FTZ46r-JqErQ6H_tS7Bof2rJ1AZc",
    authDomain: "linkedin-prototype.firebaseapp.com",
    projectId: "linkedin-prototype",
    storageBucket: "linkedin-prototype.appspot.com",
    messagingSenderId: "1044417440170",
    appId: "1:1044417440170:web:c26aaf3374c3ea182f63d3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  const auth = firebase.auth();

  export { db, auth };