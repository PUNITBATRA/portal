import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDFEo6wCD028fYCtH8FXIoc3KqxmdUCh2Y",
  authDomain: "job-portal-c5313.firebaseapp.com",
  projectId: "job-portal-c5313",
  storageBucket: "job-portal-c5313.appspot.com",
  messagingSenderId: "388942673380",
  appId: "1:388942673380:web:9c38d76fd5b08f158ec3f1",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;
