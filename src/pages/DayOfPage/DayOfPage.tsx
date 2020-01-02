import React from "react";
import "./DayOfPage.css";
import FAQ from "./components/FAQ/FAQ";
import Intro from "./components/Intro/Intro";
import Itinerary from "./components/Itinerary/Itinerary";
import Main from "./components/Main/Main";
import Sponsors from "./components/Sponsors/Sponsors";
import Footer from "./components/Footer/Footer";
import Toolbar from "../../components/Toolbar/Toolbar";
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
                <Main/>
                {/* <Main apiURL={this.props.apiURL} hideToolbar ={this.hideToolbar}/>
                <Intro />
                <div id="itinerary">
                    <Itinerary />
                </div>
                <div id="faq">
                    <FAQ />
                </div>
                <div id="sponsors">
                    <Sponsors />
                </div> */}
                <div id="footer">
                    <Footer />
                </div>
            </div>
        );
    }
}
