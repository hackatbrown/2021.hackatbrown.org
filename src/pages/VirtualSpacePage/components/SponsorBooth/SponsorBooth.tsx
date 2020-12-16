import React from "react";
import "./SponsorBooth.css";

type SponsorBoothProps = {
    sponsorName : string
};

type SponsorBoothState = {
};

export default class SponsorBooth extends React.Component<
    SponsorBoothProps,
    SponsorBoothState
> {
    constructor(props: SponsorBoothProps) {
        super(props);
    }

    render() {
        return (
            // TODO
            <div></div>
        );
    }
}