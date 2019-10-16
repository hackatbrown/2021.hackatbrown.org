import React from "react";
import "./SponsorshipPage.css";

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
            <p>
                Welcome to the sponsorship page, the message is:{" "}
                <strong>{this.props.msg}</strong> and the state of the app is{" "}
                <strong>{this.state.state}</strong>
            </p>
        );
    }
}
