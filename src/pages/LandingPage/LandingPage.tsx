import React from "react";
import "./LandingPage.css";
import FAQ from "./LandingPageComponents/FAQ/FAQ"
import Intro from "./LandingPageComponents/Intro/Intro";
import Itinerary from "./LandingPageComponents/Itinerary/Itinerary";
import Main from "./LandingPageComponents/Main/Main";
import Sponsors from "./LandingPageComponents/Sponsors/Sponsors";
import Footer from "./LandingPageComponents/Footer/Footer";
import Toolbar from "./LandingPageComponents/Toolbar/Toolbar";

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
                <Toolbar/>
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
