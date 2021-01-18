import React from "react";
import "./faq.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import faqImg from "../../../../assets/images/LandingPage/faq.mp4";

type FAQprops = {};

type FAQstate = {
    state: string;
};

export default class FAQ extends React.Component<FAQprops, FAQstate> {
    constructor(props: FAQprops) {
        super(props);
        this.state = {
            state: "good"
        };
    }
    render() {
        return (
            <div className="faq">
                <Container>
                {/* <div className="faq-text"> */}
                    <Row>
                        <div className="faq-header">
                            <h1>FAQ</h1>
                        </div>
                    </Row>

                    <Row>
                    <Col sm={5}>
                        <Row>
                            <h4 className="faq-subtitle">How does a virtual hackathon work?</h4>
                            <p>
                            More details regarding logistics will be coming soon, but you’ll receive the same perks and experiences as you would in an in-person hackathon, such as direct conversations with sponsors, help through mentors and workshops, and chances to hear from influential people in the tech world!
                            </p>
                        </Row>
                        <Row>
                            <h4 className="faq-subtitle">What about hardware hacks?</h4>
                            <p>
                            Support for hardware hacks, in the form of kits, will be given out through an application process -- more details on this will be in the registration form!
                            </p>
                        </Row>
                        <Row>
                            <h4 className="faq-subtitle">How do teams work?</h4>
                            <p>
                            We’ll have some fun team-forming sessions where you can find an awesome group of people to work with. You’re welcome to have up to four people on a team.
                            </p>
                        </Row>
                        <Row>
                            <h4 className="faq-subtitle">Do we have to submit a project if we participate?</h4>
                            <p>
                            You are not required to submit a project to participate, but in order to be eligible for prizes and swag, you will need to submit to Devpost at the end of the hackathon!
                            </p>
                        </Row>
                        <Row>
                            <h4 className="faq-subtitle">I’m interested in sponsoring Hack@Brown - who can I contact?</h4>
                            <p>
                            We are so excited to have you join us! You can email <b> <a id= "sponsor-email" href="mailto:sponsor@hackatbrown.org">sponsor@hackatbrown.org</a></b> and we will email you ASAP!
                            </p>
                        </Row>
                        <Row>
                            <h4 className="faq-subtitle">My question is not answered here!</h4>
                            <p>
                            We’re here for you! Send us an email at <b> <a id= "hello-email" href="mailto:hello@hackatbrown.org">hello@hackatbrown.org</a></b> or reach out to us on Facebook, Twitter, and instagram!
                            </p>
                        </Row>
                    </Col>
                    <Col sm={2}></Col>
                    <Col sm={5}>
                        <Row>
                            <h4 className="faq-subtitle">Who can attend?</h4>
                            <p>
                            All undergraduate and graduate students are welcome.
                            </p>
                        </Row>
                        <Row>
                            <h4 className="faq-subtitle">How will prizes work?</h4>
                            <p>
                            We will have a variety of sponsor prizes, hackathon specific prizes, and MLH prizes for projects. If you do win a prize, these prizes will be shipped directly to you!
                            </p>
                        </Row>
                        <Row>
                            <h4 className="faq-subtitle">
How much is this going to cost me?</h4>
                            <p>
                            Hack@Brown is completely free, including merch, coffee chats with sponsors, great talks with tech leads, and an unforgettable experience!
                            </p>
                        </Row>
                        <Row>
                            <h4 className="faq-subtitle">Will there still be swag?</h4>
                            <p>
                            If you reside in the United States, we will ship all swag to you, free of charge!
                            </p>
                        </Row>
                        <Row>
                            <video id="video" className="video" muted autoPlay loop src={faqImg}/>
                        </Row>
                    </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}
