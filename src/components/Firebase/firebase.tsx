import app from 'firebase/app';
import 'firebase/auth';

/*
const config = { // alternative is to move to .env
    apiKey: "AIzaSyDt04SAlNx7LkTnszsKJt2AImmRZHYTIj4",
    authDomain: "hackatbrown2020.firebaseapp.com",
    databaseURL: "https://hackatbrown2020.firebaseio.com",
    projectId: "hackatbrown2020",
    storageBucket: "hackatbrown2020.appspot.com",
    messagingSenderId: "740011708790",
    appId: "1:740011708790:web:32440b2e9c3ec16e94aa57",
    measurementId: "G-P9PF16JCDX"
};
*/
const config = {
    apiKey: "AIzaSyAg4meclzfCV-4ChbeFHVNreyDgkpfXddg",
    authDomain: "hackatbrown2020-staging.firebaseapp.com",
    databaseURL: "https://hackatbrown2020-staging.firebaseio.com",
    projectId: "hackatbrown2020-staging",
    storageBucket: "hackatbrown2020-staging.appspot.com",
    messagingSenderId: "1086163744289",
    appId: "1:1086163744289:web:0ac68dfa01daf1b9785560"
};

// export const storage = firebase.storage();

export default class Firebase {
  auth: app.auth.Auth;

  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }

  // Authentication API!
  doAuthListener = (currPage: { setState: { (arg0: { user: app.User; }): void; (arg0: { user: null; }): void; }; }) => {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        currPage.setState({ user: user });
        localStorage.setItem('user', user.uid);
      } else {
        currPage.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  doCreateUserWithEmailAndPassword = (email: string, password: string) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email: string, password: string) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doLogOut = () => this.auth.signOut();

  doPasswordReset = (email: string) => this.auth.sendPasswordResetEmail(email);

  // doPasswordUpdate = (password: string) => {
  //   const user = this.auth.currentUser;
  //   if (user != null) {
  //     user.updatePassword(password);
  //   } // else, user is null
  // }
}
