import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import Firebase, { FirebaseContext } from './components/Firebase';
import Firebase from "./components/Firebase/firebase";
import {
    FirebaseContextInterface,
    FirebaseContextProvider,
    FirebaseContextConsumer
} from "./components/Firebase/context";

const firebaseContext: FirebaseContextInterface = {
    firebase: new Firebase()
};

ReactDOM.render(
    <FirebaseContextProvider value={firebaseContext}>
        <FirebaseContextConsumer>
            {firebase => (
                <App firebase={firebase == null ? null : firebase.firebase} />
            )}
        </FirebaseContextConsumer>
    </FirebaseContextProvider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
