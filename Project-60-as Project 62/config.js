import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBnw3zSL_ryKAryrAEbY-bQdQNyV1yqx2o",
  authDomain: "project60-6930b.firebaseapp.com",
  databaseURL: "https://project60-6930b-default-rtdb.firebaseio.com",
  projectId: "project60-6930b",
  storageBucket: "project60-6930b.appspot.com",
  messagingSenderId: "1007665474243",
  appId: "1:1007665474243:web:1adcbe902f630245035076"
};

firebase.initializeApp(firebaseConfig)

export default firebase.database()