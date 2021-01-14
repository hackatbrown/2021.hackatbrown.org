import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
                <Container>
                    <Row>
                        <Col sm={3}>
                        <div className="column1">
                          <p> {description} </p><br/>
                          <p><u>Reps</u></p>
                          <p> <b>{reps}</b></p><br></br>
                        </div>
                        </Col>
                        <Col sm={9}>
                        <div className="column2">
                          <p><b>Book a coffee chat below!</b> Check your email for Zoom links.</p>
                          <iframe src={gcal} style={{border: 0.6}} width="500" height="312" frameBorder="0" scrolling="no" />
                          <p><b>Video/call</b> with Discord Voice or <b>message</b> with Discord!</p><br/>
                          <a href={discord1} className="button" target="_blank"><b>Discord</b></a>
                          <a href={discord2} className="button" target="_blank"><b>Discord Voice</b></a>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
