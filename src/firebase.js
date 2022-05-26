import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB4RCx34NBhaBro84bHnPL3f9DrRp9QDtE",
    authDomain: "wp-app-clone.firebaseapp.com",
    projectId: "wp-app-clone",
    storageBucket: "wp-app-clone.appspot.com",
    messagingSenderId: "747831062262",
    appId: "1:747831062262:web:1304ab81922e5dcdf586d7",
    measurementId: "G-0D925WXQ06"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {
    auth,
    provider
};
export default db;
