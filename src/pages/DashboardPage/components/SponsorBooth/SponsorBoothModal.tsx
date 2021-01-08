import React from "react";
import "./SponsorBoothModal.css";

type SponsorBoothModalProps = {
    sponsorDescription: string;
    sponsorURL: string;
    sponsorTier: string;
    sponsorLogoAsset: string;
    sponsorGCalURL: string;
    sponsorReps: string;
    sponsorDiscord1: string;
    sponsorDiscord2: string;
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
      const reps = this.props.sponsorReps;
      const discord1 = this.props.sponsorDiscord1;
      const discord2 = this.props.sponsorDiscord2;
        return (
            <div id='modal'>
                <div className={tier}>{tier}</div>
                <div className="logo-container">
                    <img className="logo" src={logo} alt="Logo"/>
                </div>
                <div className="row">
                    <div className="column1">
                        <p><b>Book a coffee chat below!</b></p>
                        <p><b>Zoom links will be sent to your email.</b></p>
                        
                    </div>
                    <div className="column2"> 
                        <p> {description}</p><br/>
                        <p><b>Reps</b></p>
                        <p> {reps}</p><br></br>
                        <a href={discord1} className="button"><b>Discord (Messaging)</b></a><br></br><br></br>
                        <a href={discord2} className="button"><b>Discord Voice (Video/Call)</b></a>
                    </div>
                </div>
                <br></br><iframe src={gcal} style={{border: 0.6}} width="691" height="312" frameBorder="0" scrolling="no"></iframe>
            </div>
        );
    }
}
