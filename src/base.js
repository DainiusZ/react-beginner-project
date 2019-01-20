import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDYD8yzN_OAp_1Ik6xQEGQrsCpwUH0cUO0",
  authDomain: "catch-of-the-day-dazan.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-dazan.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

//This is a named export
export { firebaseApp };

//This is a default export
export default base;
