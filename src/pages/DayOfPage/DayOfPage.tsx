import React from "react";
import "./DayOfPage.css";
import Main from "./components/Main/Main";
import Itinerary from "./components/Itinerary/Itinerary"
import Footer from "./components/Footer/Footer";
import Toolbar from "../../components/Toolbar/Toolbar";
import { FirebaseContextConsumer } from "../../components/Firebase/context";

type LandingPageProps = {
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
                         backgroundColor={"#415364"}
                         />
                     )}
                </FirebaseContextConsumer>
                <Main/>
                <Itinerary />
                <div id="footer">
                    <Footer />
                </div>
            </div>
        );
    }
}
