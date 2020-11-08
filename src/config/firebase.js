import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuUfpvwmz4vbjPrTu3QShiHFrdcBSMMQM",
  authDomain: "slack-clone-af8c7.firebaseapp.com",
  databaseURL: "https://slack-clone-af8c7.firebaseio.com",
  projectId: "slack-clone-af8c7",
  storageBucket: "slack-clone-af8c7.appspot.com",
  messagingSenderId: "736762435564",
  appId: "1:736762435564:web:870f8d3e459ef8f21052c9",
  measurementId: "G-PJG8VRXBL6",
};

// to connect the app to firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
