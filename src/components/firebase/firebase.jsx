import app from 'firebase/app'
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyA_kUgk1nhzF0QVpdkmvoSbV9hPhdBuXhA",
    authDomain: "give-away-app-1d030.firebaseapp.com",
    databaseURL: "https://give-away-app-1d030.firebaseio.com",
    projectId: "give-away-app-1d030",
    storageBucket: "give-away-app-1d030.appspot.com",
    messagingSenderId: "694819042379",
    appId: "1:694819042379:web:99523007e8801f44a4c9ce",
    measurementId: "G-JP194G0JGQ"
};


class Firebase {
    constructor() {
      app.initializeApp(firebaseConfig);
      this.auth = app.auth();
    }

  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    // doSignOut = () => this.auth.signOut();
    // doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    // doPasswordUpdate = password =>
    // this.auth.currentUser.updatePassword(password);

}
    
export default Firebase;