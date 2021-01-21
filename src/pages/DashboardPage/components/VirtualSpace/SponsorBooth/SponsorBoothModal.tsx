import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./SponsorBoothModal.css";
import discordIcon from "../../../../../assets/images/VirtualSpace/icon/discord.png";
import voiceIcon from "../../../../../assets/images/VirtualSpace/icon/voice.png";


type SponsorBoothModalProps = {
    sponsorDescription: string;
    sponsorTier: string;
    sponsorLogoAsset: string;
    sponsorGCalURL: string;
    sponsorReps: string;
    sponsorDiscord1: string;
    sponsorDiscord2: string;
    sponsorContact: string,
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
        const tier = this.props.sponsorTier;
        const logo = this.props.sponsorLogoAsset;
        const gcal = this.props.sponsorGCalURL
        const reps = this.props.sponsorReps;
        const discord1 = this.props.sponsorDiscord1;
        const discord2 = this.props.sponsorDiscord2;
        const contact = this.props.sponsorContact;

        let modalContent;
        if (gcal.length !== 0) {
            modalContent = 
                <Row>
                    <Col sm={4}>
                    <div className="column1">
                        <p>{description}</p>
                        <p><b>Reps</b></p>
                        <p>{reps}</p>
                    </div>
                    </Col>
                    <Col sm={8}>
                    <div className="column2">
                    <p><b>Book a coffee chat below!</b> Check your email for Zoom links.</p>
                    <div className="hide">
                        <iframe id="gcal" src={gcal} style={{border: 0.6}} width="100%" height="500" frameBorder="0" scrolling="no" />
                    </div>
                    <br/>
                    <p><b>Video/call</b> with Discord Voice or <b>message</b> with Discord!</p>
                    <div className="discord-btn-container">
                        <a href={discord1} className="discord-button" target="_blank">
                            <img className="discord-icon" src={discordIcon} alt="Icon"/>
                            <b>Discord</b>
                        </a>
                        <a href={discord2} className="discord-button" target="_blank">
                            <img className="discord-icon" src={voiceIcon} alt="Icon"/>
                            <b>Discord Voice</b>
                        </a>
                    </div>
                    </div>
                    </Col>
                </Row>
        } else if (discord1.length !== 0 && discord2.length !== 0) {
            modalContent = 
                <Row>
                    <div className="single-column">
                        <p>{description}</p>
                        <br/>
                        <p><b>Reps</b></p>
                        <p>{reps}</p>
                        <div className="discord-btn-container">
                            <a href={discord1} className="long-discord-button" target="_blank">
                                <img className="discord-icon" src={discordIcon} alt="Icon"/>
                                <b>Discord (Messaging)</b>
                            </a>
                            <a href={discord2} className="long-discord-button" target="_blank">
                                <img className="discord-icon" src={voiceIcon} alt="Icon"/>
                                <b>Discord Voice (Voice/Call)</b>
                            </a>
                        </div>
                    </div>
                </Row>
        } else {
            modalContent = 
                <Row>
                    <div className="single-column">
                        <p>{description}</p>
                        <br/>
                        <p><b>Reps</b></p>
                        <p>{reps}</p>
                        <br/>
                        <p><b>Contact Info</b></p>
                        <p>{contact}</p>
                        
                    </div>
                </Row>
        }

        return (
            <div id='modal'>
                <div className={tier}>{tier}</div>
                <div className="logo-container">
                    <img className="logo" src={logo} alt="Logo"/>
                </div>
                <Container>{modalContent}</Container>
            </div>
        );
    }
}
