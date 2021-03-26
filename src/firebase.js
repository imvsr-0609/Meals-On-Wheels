
import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyBebK5sRGguAesIA_3FjxlcitnSjscpvdU",
  authDomain: "meals-on-wheels-307710.firebaseapp.com",
  projectId: "meals-on-wheels-307710",
  storageBucket: "meals-on-wheels-307710.appspot.com",
  messagingSenderId: "448899339924",
  appId: "1:448899339924:web:c1cc0f9b8faf347f6b0681",
  measurementId: "G-ZW93PPCD58"
};
  // Initialize Firebase
 const firebaseApp =  firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore()
 const auth = firebase.auth()
 const provider = new firebase.auth.GoogleAuthProvider()



 export {db ,auth, provider}