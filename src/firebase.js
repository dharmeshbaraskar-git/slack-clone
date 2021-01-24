import firebase from 'firebase';

// const firebaseConfig = {
//     apiKey: "AIzaSyBmLdJcP8v5qO6VjXXFYuStXPvlTVCkN_o",
//     authDomain: "slack-clone-adeaf.firebaseapp.com",
//     databaserURL: "https://slack-clone-adeaf-default-rtdb.firebaseio.com",
//     projectId: "slack-clone-adeaf",
//     storageBucket: "slack-clone-adeaf.appspot.com",
//     messagingSenderId: "596426472803",
//     appId: "1:596426472803:web:0fd924963baa4a4689e756"
// };

const firebaseConfig = {
    apiKey: "AIzaSyBmLdJcP8v5qO6VjXXFYuStXPvlTVCkN_o",
    authDomain: "slack-clone-adeaf.firebaseapp.com",
    projectId: "slack-clone-adeaf",
    databaseURL: "https://slack-clone-adeaf.firebaseio.com",
    storageBucket: "slack-clone-adeaf.appspot.com",
    messagingSenderId: "596426472803",
    appId: "1:596426472803:web:0fd924963baa4a4689e756"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;