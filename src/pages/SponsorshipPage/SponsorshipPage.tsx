import React from "react";
import "./SponsorshipPage.css";
import SponsorHome from "./components/SponsorHome/SponsorHome";
import SponsorVideo from "./components/SponsorVideo/SponsorVideo";
import WhySponsor from "./components/WhySponsor/WhySponsor";
import SponsorTiers from "./components/SponsorTiers/SponsorTiers";
import Footer from "../LandingPage/LandingPageComponents/Footer/Footer";

/**
 * define a type model for the props you are passing in to the component
 */
type SponsorshipProps = {};

/**
 * define a type model for the state of the page
 */
type SponsorshipState = {
    state: string;
};

export default class SponsorshipPage extends React.Component<
    SponsorshipProps,
    SponsorshipState
> {
    constructor(props: SponsorshipProps) {
        super(props);
        this.state = {
            state: "good"
        };
    }
    render() {
        return (
            <div className="sponsor">
                <SponsorHome />
                {/* <SponsorVideo /> */}
                <WhySponsor />
                <SponsorTiers />
                <Footer />
            </div>
        );
    }
}
