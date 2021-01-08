import React from "react";
import "./LandingPage.css";
import FAQ from "./LandingPageComponents/FAQ/FAQ";
import Intro from "./LandingPageComponents/Intro/Intro";
import Itinerary from "./LandingPageComponents/Itinerary/Itinerary";
import Main from "./LandingPageComponents/Main/Main";
import Sponsors from "./LandingPageComponents/Sponsors/Sponsors";
import Footer from "./LandingPageComponents/Footer/Footer";
import Toolbar from "../../components/Toolbar/Toolbar";
import VirtualSpace from "./LandingPageComponents/VirtualSpace/VirtualSpace";
import { FirebaseContextConsumer } from "../../components/Firebase/context";

type LandingPageProps = {
  apiURL : string
};

type LandingPageState = {
  toolbarVisible : boolean
};

export default class LandingPage extends React.Component<
    LandingPageProps,
    LandingPageState
> {
    constructor(props: LandingPageProps) {
        super(props);
        this.state = {
          toolbarVisible : true,
        };
    }

    hideToolbar = (display: boolean) => {
      this.setState({
        toolbarVisible : display
      });
    }

    render() {
        return (
            <div className="landing-page">
                <FirebaseContextConsumer>
                    {firebase => (
                        <Toolbar
                            firebase={firebase == null ? null : firebase.firebase}
                            backgroundColor={"#FDF7DC"}
                            hideToolbar={this.hideToolbar}
                            apiURL={this.props.apiURL}
                        />
                    )}
                </FirebaseContextConsumer>
                <Main apiURL={this.props.apiURL} hideToolbar={this.hideToolbar}/>
                <div id="about">
                    <Intro />
                </div>
                <div id="itinerary">
                    <Itinerary />
                </div>
                <div id="faq">
                    <FAQ />
                </div>
                <div id="virtualSpace">
                    <VirtualSpace apiURL={this.props.apiURL} hideToolbar={this.hideToolbar} />
                </div>
                <div id="sponsors">
                    <Sponsors />
                </div>
                <div id="footer">
                    <Footer />
                </div>
            </div>
        );
    }
}
