import React from "react";
import "./Itinerary.css";
import itineraryImg from "../../../../assets/images/LandingPage/placeholder-square.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
            </div>
        );
    }
}
