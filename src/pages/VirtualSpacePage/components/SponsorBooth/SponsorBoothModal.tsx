import React from "react";
import "./SponsorBoothModal.css";

type SponsorBoothModalProps = {
    sponsorInfo : Object // This can be changed 
};

type SponsorBoothModalState = {
};

export default class SponsorBoothModal extends React.Component<
    SponsorBoothModalProps,
    SponsorBoothModalState
> {
    constructor(props: SponsorBoothModalProps) {
        super(props);
    }

    render() {
        return (
            // TODO
            <div></div>
        );
    }
}