import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAf623hrYpJLG27LQIfrUdH18tfPpKjU38",
    authDomain: "cooking-ninja-site-bf8de.firebaseapp.com",
    projectId: "cooking-ninja-site-bf8de",
    storageBucket: "cooking-ninja-site-bf8de.appspot.com",
    messagingSenderId: "1062783565882",
    appId: "1:1062783565882:web:7fc055fd3a0b305a79f503"
  };

// initialize firebase
firebase.initializeApp(firebaseConfig)

// initialize services
const projectFirestore = firebase.firestore()

export { projectFirestore }