
import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBNqhUJCRj3BmbUQTywLYhv9XzRe3thjak",
    authDomain: "meals-on-wheels-5cc60.firebaseapp.com",
    projectId: "meals-on-wheels-5cc60",
    storageBucket: "meals-on-wheels-5cc60.appspot.com",
    messagingSenderId: "36871338730",
    appId: "1:36871338730:web:8d6a3da5527ea595e57593"
  };
  // Initialize Firebase
 const firebaseApp =  firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore()
 const auth = firebase.auth()
 const provider = new firebase.auth.GoogleAuthProvider()



 export {db ,auth, provider}