import React from "react";
import "./SponsorHome.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import banner from "../../../../assets/images/Sponsorship/Banner0000.png";

/**
 * define a type model for the props you are passing in to the component
 */
type SponsorHomeProps = {};

/**
 * define a type model for the state of the page
 */
type SponsorHomeState = {};

// TODO: update fonts/fontsizes
export default class SponsorHome extends React.Component<
    SponsorHomeProps,
    SponsorHomeState
> {
    constructor(props: SponsorHomeProps) {
        super(props);
    }
    render() {
        return (
            <div className="sponsor-home">
                <Container>
                    <Row>
                        <Col sm={6}>
                            <div className="banner-img-sect">
                                <img id="banner-img" src={banner}></img>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="sponsor-home-blurb">
                                <h1>Sponsoring</h1>

                                <h1>Hack@Brown 2021</h1>
                                <p>
                                    Hack@Brown is Brown University’s annual
                                    hackathon, and we’re back for the seventh
                                    time on <b>January 22-24, 2021</b>.
                                </p>

                                <p>
                                    We’ll bring together 500+ students to our own 
																		interactive <b>virtual</b> platform.
																</p>

                                <p>
                                    In 24 hours, these students will create technical
                                    projects using your technologies and APIs.
                                    To make it happen, we will need the help of
                                    sponsors, and would love for you to be
                                    one of them!
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
