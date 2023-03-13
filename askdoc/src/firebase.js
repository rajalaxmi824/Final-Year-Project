import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAa8RVC-0qvUzsnoNW9A0nEpUxbn9Tzk-I",
  authDomain: "askdoc-35c0b.firebaseapp.com",
  projectId: "askdoc-35c0b",
  storageBucket: "askdoc-35c0b.appspot.com",
  messagingSenderId: "380123114201",
  appId: "1:380123114201:web:7f60ccbde91143a31c2cc8",
  measurementId: "G-BHQY44TN2Z"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
console.log(auth);
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;