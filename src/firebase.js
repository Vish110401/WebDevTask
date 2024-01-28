import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBHi_dpPKQfVf4FTyxz32NRCBVaPEUXmy4",
  authDomain: "fithub-d089a.firebaseapp.com",
  projectId: "fithub-d089a",
  storageBucket: "fithub-d089a.appspot.com",
  messagingSenderId: "961208905464",
  appId: "1:961208905464:web:b9dc7acf2b5672a211550d",
  measurementId: "G-SG13FSJX3Y"
  };
// const firebaseApp = firebase.initializeApp(fireba)
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage};
export default db;
