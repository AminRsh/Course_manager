import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAQkq0W3qc2R37xzdy-ni80n3nIE7m-LI",
  authDomain: "course-database-2d55d.firebaseapp.com",
  projectId: "course-database-2d55d",
  storageBucket: "course-database-2d55d.appspot.com",
  messagingSenderId: "1070169418855",
  appId: "1:1070169418855:web:ad9eb8f38364f7c834f8c2",
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };
