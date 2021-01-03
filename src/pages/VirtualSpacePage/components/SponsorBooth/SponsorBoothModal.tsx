import React from "react";
import "./SponsorBoothModal.css";

type SponsorBoothModalProps = {
    sponsorDescription: string;
    sponsorURL: string;
    sponsorTier: string;
    sponsorLogoAsset: string;
    sponsorGCalURL: string;
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
      const description = this.props.sponsorDescription;
      const url = this.props.sponsorURL;
      const tier = this.props.sponsorTier;
      const logo = this.props.sponsorLogoAsset;
      const gcal = this.props.sponsorGCalURL
        return (
            <div id='modal'>
                <div className={tier}>{tier}</div>
                <div className="logo-container">
                    <img className="logo" src={logo} alt="Logo"/>
                </div>
                <p> {description}</p><br/>
                <p><b>Book a coffee chat below!</b></p><br/>
                <iframe src={gcal} style={{border: 0.6}} width="691" height="312" frameBorder="0" scrolling="no"></iframe>
            </div>
        );
    }
}
