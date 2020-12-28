import React from "react";
import "./SponsorBoothModal.css";

type SponsorBoothModalProps = {
    sponsorDescription: string;
    sponsorURL: string;
    sponsorTier: string;
    sponsorAsset: string;
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
      const asset = this.props.sponsorAsset;
        return (
            <div id='modal'>
                <div className={tier}>{tier}</div>
                <img id ="logo" src ={asset} alt="Logo"/><br/>
                <p> {description}</p><br/>
                <p><b>Book a coffee chat below!</b></p><br/>
                <iframe src="https://calendar.google.com/calendar/embed?height=312&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%230B8043&amp;showTitle=0&amp;mode=WEEK&amp;showPrint=0&amp;showTabs=1" style={{border: 0.6}} width="691" height="312" frameBorder="0" scrolling="no"></iframe>
            </div>
        );
    }
}
