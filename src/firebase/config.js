import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAmYBW4w1o7H5gBUb5v70kwZ9ejd1Uly1g",
  authDomain: "forthegram-ankita.firebaseapp.com",
  databaseURL: "https://forthegram-ankita.firebaseio.com",
  projectId: "forthegram-ankita",
  storageBucket: "forthegram-ankita.appspot.com",
  messagingSenderId: "658284477728",
  appId: "1:658284477728:web:af2747f0b68ad880b2eb45"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };