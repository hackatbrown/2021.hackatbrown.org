import React from "react";
import "./LandingPage.css";
import FAQ from "./LandingPageComponents/FAQ/FAQ";
import Intro from "./LandingPageComponents/Intro/Intro";
import Itinerary from "./LandingPageComponents/Itinerary/Itinerary";
import Main from "./LandingPageComponents/Main/Main";
import LoginJoin from "./LandingPageComponents/LoginJoin/LoginJoin"
import Sponsors from "./LandingPageComponents/Sponsors/Sponsors";
import Footer from "./LandingPageComponents/Footer/Footer";
import Toolbar from "./LandingPageComponents/Toolbar/Toolbar";
import { FirebaseContextConsumer } from "../../components/Firebase/context";
type LandingPageProps = {};

type LandingPageState = {
    // user: any;
};

export default class LandingPage extends React.Component<
    LandingPageProps,
    LandingPageState
> {
    constructor(props: LandingPageProps) {
        super(props);
        this.state = {
            // user: null
        };
    }

    // // Workaround of having nothing as else case if firebase is null
    // doNothing = () => {}

    // // Check if user is logged in when component mounts
    // componentDidMount = () => {
    //     let currFirebase = this.props.firebase;
    //     if (currFirebase == null) { // if true, error

    //     } else {
    //         currFirebase.doAuthListener(this); // check if user is logged in or not
    //     }
    // }

    render() {
        // let content; // display login/join or dashboard button
        // if (this.state.user != null) { // if true, user is logged in
        //     content =
        //       <div>
        //         <button onClick={
        //           (this.props.firebase == null) ? this.doNothing : this.props.firebase.doLogOut
        //         }>Log out</button>
        //         {/* TODO: Button to dashboard */}
        //         <button className="round-clear-button" /* onClick={this.show} */ >Dashboard</button>
        //       </div>
        // } else { // else, user is not logged in
        //     content =
        //       <FirebaseContextConsumer>
        //         {firebase => <LoginJoin firebase={(firebase == null) ? null : firebase.firebase} />}
        //       </FirebaseContextConsumer>
        // }
        return (
            <div className="landing-page">
                <FirebaseContextConsumer>
                    {firebase => <Toolbar firebase={(firebase == null) ? null : firebase.firebase} />}
                </FirebaseContextConsumer>
                <Main />
                <div id="intro"><Intro /></div>
                <div id="itinerary"><Itinerary /></div>
                <div id="faq"><FAQ /></div>
                <div id="sponsors"><Sponsors /></div>
                <div id="footer"><Footer /></div>
            </div>
        );
    }
}
