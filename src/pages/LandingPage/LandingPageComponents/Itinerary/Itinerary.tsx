import React from "react";
import "./Itinerary.css";
<<<<<<< HEAD
import itineraryImg from "../../../../assets/images/LandingPage/placeholder-square.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
=======
>>>>>>> 1d54320d6a14a43398d774cfd2fa8794d7c9f817

type ItineraryProps = {};

type ItineraryState = {
    state: string;
};

export default class Itinerary extends React.Component<
    ItineraryProps,
    ItineraryState
> {
    constructor(props: ItineraryProps) {
        super(props);
        this.state = {
            state: "good"
        };
    }
    render() {
        return (
            <div className="itinerary">
<<<<<<< HEAD
                <Container>
                    <Row>
                        <div className="itinerary-filler"><Col sm={6}></Col></div>
                        <div className="itinerary-div">
                            <Col>

                            <Row><div className="itinerary-header"><h1>Itinerary</h1></div></Row>

                        <div className="itinerary-list">
                        <Row><div className="itinerary-date"><h4>Saturday, January 26th</h4></div></Row>

                            <Row>
                                <Col><div className="itinerary-time"><p>9-9:30</p></div></Col>
                                <Col>
                                    <div className="itinerary-label"><p>Registration</p></div>
                                    <div className="itinerary-location"><p>Location</p></div>
                                </Col>
                            </Row>

                            <Row>
                                <Col><div className="itinerary-time"><p>9-9:30</p></div></Col>
                                <Col>
                                    <div className="itinerary-label"><p>Registration</p></div>
                                    <div className="itinerary-location"><p>Location</p></div>
                                </Col>
                            </Row>

                            <Row>
                                <Col><div className="itinerary-time"><p>9-9:30</p></div></Col>
                                <Col>
                                    <div className="itinerary-label"><p>Registration</p></div>
                                    <div className="itinerary-location"><p>Location</p></div>
                                </Col>
                            </Row>

                            <Row>
                                <Col><div className="itinerary-time"><p>9-9:30</p></div></Col>
                                <Col>
                                    <div className="itinerary-label"><p>Registration</p></div>
                                    <div className="itinerary-location"><p>Location</p></div>
                                </Col>
                            </Row>

                            <Row>
                                <Col><div className="itinerary-time"><p>9-9:30</p></div></Col>
                                <Col>
                                    <div className="itinerary-label"><p>Registration</p></div>
                                    <div className="itinerary-location"><p>Location</p></div>
                                </Col>
                            </Row>

                            <Row>
                                <Col><div className="itinerary-time"><p>9-9:30</p></div></Col>
                                <Col>
                                    <div className="itinerary-label"><p>Registration</p></div>
                                    <div className="itinerary-location"><p>Location</p></div>
                                </Col>
                            </Row>

                            <Row>
                                <Col><div className="itinerary-time"><p>9-9:30</p></div></Col>
                                <Col>
                                    <div className="itinerary-label"><p>Registration</p></div>
                                    <div className="itinerary-location"><p>Location</p></div>
                                </Col>
                            </Row>

                            <br></br>
                            <Row><div className="itinerary-date"><h4>Sunday, January 27th</h4></div></Row>

                            <Row>
                                <Col><div className="itinerary-time"><p>9-9:30</p></div></Col>
                                <Col>
                                    <div className="itinerary-label"><p>Registration</p></div>
                                    <div className="itinerary-location"><p>Location</p></div>
                                </Col>
                            </Row>

                            <Row>
                                <Col><div className="itinerary-time"><p>9-9:30</p></div></Col>
                                <Col>
                                    <div className="itinerary-label"><p>Registration</p></div>
                                    <div className="itinerary-location"><p>Location</p></div>
                                </Col>
                            </Row>

                            <Row>
                                <Col><div className="itinerary-time"><p>9-9:30</p></div></Col>
                                <Col>
                                    <div className="itinerary-label"><p>Registration</p></div>
                                    <div className="itinerary-location"><p>Location</p></div>
                                </Col>
                            </Row>

                            </div>
                            </Col>
                        </div>
                    </Row>
                </Container>
=======
                <div className="itinerary-div">
                    <table>
                    <tr className="itinerary-header"><h1>Itinerary</h1></tr>
                    
                    <div className="itinerary-list">
                    <tr className="itinerary-date">Saturday, January 25th</tr>
                    <div className="itinerary-items">
                        <tr>
                            <td className="itinerary-time">9:30</td>
                            <td className="itinerary-event">Registration</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="itinerary-location">Sayles Hall</td>
                        </tr>
                    </div>

                    <div className="itinerary-items">
                        <tr>
                            <td className="itinerary-time">9:30</td>
                            <td className="itinerary-event">Registration</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="itinerary-location">Sayles Hall</td>
                        </tr>
                    </div>

                    <div className="itinerary-items">
                        <tr>
                            <td className="itinerary-time">9:30</td>
                            <td className="itinerary-event">Registration</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="itinerary-location">Sayles Hall</td>
                        </tr>
                    </div>

                    <div className="itinerary-items">
                        <tr>
                            <td className="itinerary-time">9:30</td>
                            <td className="itinerary-event">Registration</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="itinerary-location">Sayles Hall</td>
                        </tr>
                    </div>

                    <div className="itinerary-items">
                        <tr>
                            <td className="itinerary-time">9:30</td>
                            <td className="itinerary-event">Registration</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="itinerary-location">Sayles Hall</td>
                        </tr>
                    </div>

                    <div className="itinerary-items">
                        <tr>
                            <td className="itinerary-time">9:30</td>
                            <td className="itinerary-event">Registration</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="itinerary-location">Sayles Hall</td>
                        </tr>
                    </div>

                    <div className="itinerary-items">
                        <tr>
                            <td className="itinerary-time">9:30</td>
                            <td className="itinerary-event">Registration</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="itinerary-location">Sayles Hall</td>
                        </tr>
                    </div>

                    <div className="itinerary-items">
                        <tr>
                            <td className="itinerary-time">9:30</td>
                            <td className="itinerary-event">Registration</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="itinerary-location">Sayles Hall</td>
                        </tr>
                    </div>

                    <div className="itinerary-items">
                        <tr>
                            <td className="itinerary-time">9:30</td>
                            <td className="itinerary-event">Registration</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="itinerary-location">Sayles Hall</td>
                        </tr>
                    </div>

                    <tr className="itinerary-date">Sunday, January 26th</tr>
                    <div className="itinerary-items">
                        <tr>
                            <td className="itinerary-time">9:30</td>
                            <td className="itinerary-event">Registration</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="itinerary-location">Sayles Hall</td>
                        </tr>
                    </div>

                    <div className="itinerary-items">
                        <tr>
                            <td className="itinerary-time">9:30</td>
                            <td className="itinerary-event">Registration</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="itinerary-location">Sayles Hall</td>
                        </tr>
                    </div>

                    <div className="itinerary-items">
                        <tr>
                            <td className="itinerary-time">9:30</td>
                            <td className="itinerary-event">Registration</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="itinerary-location">Sayles Hall</td>
                        </tr>
                    </div>

                    <div className="itinerary-items">
                        <tr>
                            <td className="itinerary-time">9:30</td>
                            <td className="itinerary-event">Registration</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="itinerary-location">Sayles Hall</td>
                        </tr>
                    </div>

                    <div className="itinerary-items">
                        <tr>
                            <td className="itinerary-time">9:30</td>
                            <td className="itinerary-event">Registration</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="itinerary-location">Sayles Hall</td>
                        </tr>
                    </div>

                    <div className="itinerary-items">
                        <tr>
                            <td className="itinerary-time">9:30</td>
                            <td className="itinerary-event">Registration</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="itinerary-location">Sayles Hall</td>
                        </tr>
                    </div>

                    <div className="itinerary-items">
                        <tr>
                            <td className="itinerary-time">9:30</td>
                            <td className="itinerary-event">Registration</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="itinerary-location">Sayles Hall</td>
                        </tr>
                    </div>

                    <div className="itinerary-items">
                        <tr>
                            <td className="itinerary-time">9:30</td>
                            <td className="itinerary-event">Registration</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="itinerary-location">Sayles Hall</td>
                        </tr>
                    </div>

                    <div className="itinerary-items">
                        <tr>
                            <td className="itinerary-time">9:30</td>
                            <td className="itinerary-event">Registration</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="itinerary-location">Sayles Hall</td>
                        </tr>
                    </div>
                    </div>
                </table>
                </div>
>>>>>>> 1d54320d6a14a43398d774cfd2fa8794d7c9f817
            </div>
        );
    }
}
