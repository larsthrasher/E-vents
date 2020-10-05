import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
   apiKey: process.env.REACT_APP_API_KEY,
   authDomain: "funschit-77ebc.firebaseapp.com",
   databaseURL: "https://funschit-77ebc.firebaseio.com",
   projectId: "funschit-77ebc",
   storageBucket: "funschit-77ebc.appspot.com",
   messagingSenderId: "490446700565",
   appId: "1:490446700565:web:f6dd4c1fa8e53284534e1c"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
