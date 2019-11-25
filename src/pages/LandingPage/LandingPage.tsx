import React from "react";
import "./LandingPage.css";
import FAQ from "./LandingPageComponents/FAQ/FAQ"
import Intro from "./LandingPageComponents/Intro/Intro";
import Itinerary from "./LandingPageComponents/Itinerary/Itinerary";
import Main from "./LandingPageComponents/Main/Main";
import Sponsors from "./LandingPageComponents/Sponsors/Sponsors";
<<<<<<< HEAD
=======
import Footer from "./LandingPageComponents/Footer/Footer";
import Toolbar from "./LandingPageComponents/Toolbar/Toolbar";
>>>>>>> 1d54320d6a14a43398d774cfd2fa8794d7c9f817

type LandingPageProps = {};

type LandingPageState = {
    state: string;
};

export default class LandingPage extends React.Component<
    LandingPageProps,
    LandingPageState
> {
    constructor(props: LandingPageProps) {
        super(props);
        this.state = {
            state: "good"
        };
    }
    render() {
        return (
            <div className="landing-page">
<<<<<<< HEAD
=======
                <Toolbar/>
>>>>>>> 1d54320d6a14a43398d774cfd2fa8794d7c9f817
                <Main />
                <Intro />
                <Itinerary />
                <FAQ />
                <Sponsors />
<<<<<<< HEAD
=======
                <Footer />
>>>>>>> 1d54320d6a14a43398d774cfd2fa8794d7c9f817
            </div>
        );
    }
}
