import React from "react";
import "./faq.css";
<<<<<<< HEAD
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import faqImg from "../../../../assets/images/LandingPage/placeholder-square.png";
=======
import faqImg from "../../../../assets/images/LandingPage/scene_faq_transparent.png";
>>>>>>> 1d54320d6a14a43398d774cfd2fa8794d7c9f817

type FAQprops = {};

type FAQstate = {
    state: string;
};

export default class FAQ extends React.Component<
    FAQprops,
    FAQstate
> {
    constructor(props: FAQprops) {
        super(props);
        this.state = {
            state: "good"
        };
    }
    render() {
        return (
            <div className="faq">
<<<<<<< HEAD
                <Container>
                    <Row>
                        <Col>
=======
>>>>>>> 1d54320d6a14a43398d774cfd2fa8794d7c9f817
                        <div className="faq-text">
                            <div className="faq-header">
                                <h1>F.A.Q</h1>
                            </div>

                            <div className="faq-1">
                                <h4>Who can attend?</h4>
                                <p>
                                    All undergraduate and graduate students are welcome.
                                </p>
                            </div>
<<<<<<< HEAD

=======
                            <br></br>
>>>>>>> 1d54320d6a14a43398d774cfd2fa8794d7c9f817
                            <div className="faq-2">
                                <h4>I don't have a team. Can I still participate?</h4>
                                <p>
                                    Of course! It is not necessary to have a team prior 
                                    to coming to Hack@Brown. We’ll have some fun team-forming 
                                    sessions where you can find an awesome group of people 
                                    to work with. You’re welcome to have up to four people on a team.
                                </p>
                            </div>
<<<<<<< HEAD

=======
                            <br></br>
>>>>>>> 1d54320d6a14a43398d774cfd2fa8794d7c9f817
                            <div className="faq-3">
                                <h4>Will there be a standby line the day-of the event?</h4>
                                <p>
                                    Yes, there will be a standby line if accepted attendees 
                                    do not show up! The line will open when registration 
                                    starts (9am) and students will be admitted off the standby 
                                    line after registration ends (10:30am). 
                                </p>
                            </div>
                        </div>
<<<<<<< HEAD
                        </Col>

                        <Col>
                        <div className="faq-img-div">
                            <img id="faq-img" src={faqImg}></img>
                        </div>
                        </Col>
                    </Row>
                </Container>
=======
                        
                        <div className="faq-img-div">
                            <img id="faq-img" src={faqImg}></img>
                        </div>
>>>>>>> 1d54320d6a14a43398d774cfd2fa8794d7c9f817
            </div>
        );
    }
}
