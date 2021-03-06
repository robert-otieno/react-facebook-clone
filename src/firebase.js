import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCCGS3SHTs6Z_emtWToSCW6biz9fo1xCxs",
    authDomain: "facebook-clone-cc2e1.firebaseapp.com",
    projectId: "facebook-clone-cc2e1",
    storageBucket: "facebook-clone-cc2e1.appspot.com",
    messagingSenderId: "541347925794",
    appId: "1:541347925794:web:290e28a91f72f7f5735f7b",
    measurementId: "G-YNQ53SPN5V"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;