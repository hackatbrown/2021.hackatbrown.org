import React from "react";
import "./SponsorshipPage.css";
import SponsorHome from "./SponsorHome";
import SponsorVideo from "./SponsorVideo"
import WhySponsor from "./WhySponsor"
import SponsorTiers from "./SponsorTiers"

/**
 * define a type model for the props you are passing in to the component
 */
type SponsorshipProps = {
    msg: string;
};

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
            <SponsorVideo />
            <WhySponsor />
            <SponsorTiers />
          </div>
        );
    }
}
