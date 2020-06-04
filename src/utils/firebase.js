import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyAasrq37Oc5edRFZ1Am5SW6ay0iffy9Wbo",
    authDomain: "bicci-7ed2f.firebaseapp.com",
    databaseURL: "https://bicci-7ed2f.firebaseio.com",
    projectId: "bicci-7ed2f",
    storageBucket: "bicci-7ed2f.appspot.com",
    messagingSenderId: "340393431770",
    appId: "1:340393431770:web:b3e2577cb6f2b255940be3",
    measurementId: "G-PG6B4H1B1H"
};

firebase.initializeApp(config);

export default firebase;