import firebase from "firebase";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWJA6QsPRndhpitAhb-mPiEBb-xzdC864",
  authDomain: "social-networkpa.firebaseapp.com",
  databaseURL: "https://social-networkpa.firebaseio.com",
  projectId: "social-networkpa",
  storageBucket: "social-networkpa.appspot.com",
  messagingSenderId: "871708261205",
  appId: "1:871708261205:web:dea3aa46efd8e92264cddc",
  measurementId: "G-9RSNJL955F"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebaseConfig;
