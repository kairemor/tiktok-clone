import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCzlAmGNQwPN_W2hZEhEzemn8NQ5bJ67HY",
  authDomain: "tiktok-clone-ee47c.firebaseapp.com",
  databaseURL: "https://tiktok-clone-ee47c.firebaseio.com",
  projectId: "tiktok-clone-ee47c",
  storageBucket: "tiktok-clone-ee47c.appspot.com",
  messagingSenderId: "389525572897",
  appId: "1:389525572897:web:2ea7f23a9da8d64176c260",
  measurementId: "G-BMRK416M01"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;