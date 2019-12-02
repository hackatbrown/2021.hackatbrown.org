import React from "react";
import "./LandingPage.css";
import FAQ from "./LandingPageComponents/FAQ/FAQ"
import Intro from "./LandingPageComponents/Intro/Intro";
import LoginJoin from "./LandingPageComponents/LoginJoin/LoginJoin";
import Itinerary from "./LandingPageComponents/Itinerary/Itinerary";
import Main from "./LandingPageComponents/Main/Main";
import Sponsors from "./LandingPageComponents/Sponsors/Sponsors";
import Toolbar from"./LandingPageComponents/Toolbar/Toolbar";

import { FirebaseContextConsumer } from '../../components/Firebase/context'
import Firebase from '../../components/Firebase';
import FileUpload from "./LandingPageComponents/FileUpload/FileUpload";

type LandingPageProps = {
    firebase : (Firebase | null)
};

type LandingPageState = {
    user: any;
};

export default class LandingPage extends React.Component<
    LandingPageProps,
    LandingPageState
> {
    constructor(props: LandingPageProps) {
        super(props);
        this.state = {
            user: null
        };
    }

    // Workaround of having nothing as else case if firebase is null
    doNothing = () => {}

    // Check if user is logged in when component mounts
    componentDidMount = () => {
      let currFirebase = this.props.firebase;
      if (currFirebase == null) { // if true, error

      } else {
        currFirebase.doAuthListener(this); // check if user is logged in or not
      }
    }

    render() {
        let content; // display login/join or dashboard button
        if (this.state.user != null) { // if true, user is logged in
            content =
              <div>
                <button onClick={
                  (this.props.firebase == null) ? this.doNothing : this.props.firebase.doLogOut
                }>Log out</button>
                {/* TODO: Button to dashboard */}
                <button className="round-clear-button" /* onClick={this.show} */ >Dashboard</button>
              </div>
        } else { // else, user is not logged in
            content = 
              <FirebaseContextConsumer>
                {firebase => <LoginJoin firebase={(firebase == null) ? null : firebase.firebase} />}
              </FirebaseContextConsumer>
        }
        return (
            <div className="landing-page">
                <Toolbar />
                <Main />
                {content}

                <FirebaseContextConsumer>
                  {firebase => <FileUpload firebase={(firebase == null) ? null : firebase.firebase} />}
                </FirebaseContextConsumer>

                <Intro />
                <Itinerary />
                <FAQ />
                <Sponsors />
            </div>
        );
    }
}
