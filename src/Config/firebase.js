import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyB18OGKSTMXvlEDU5FRKUiFpAXGruKD8gc",
  authDomain: "to-do-list-dca79.firebaseapp.com",
  projectId: "to-do-list-dca79",
  storageBucket: "to-do-list-dca79.appspot.com",
  messagingSenderId: "1096978713525",
  appId: "1:1096978713525:web:4fd92dca16e1e02249e7fc",
  measurementId: "G-EHLDDZPMGX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase
