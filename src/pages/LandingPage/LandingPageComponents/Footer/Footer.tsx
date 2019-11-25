import React from "react";
import "./Footer.css";
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
            <div className="footer">
                <Container>
                    <Row>
                        <Col sm={3}>
                            <div className="current">
                                <h5>Hack@Brown 2020:</h5>
                                <h3>Garage</h3>
                            </div>
                        </Col>
                        <Col>
                            <div className="socials">
                                <h5>Socials</h5>
                                <p>Instagram</p>
                                <p>Facebook</p>
                                <p>Twitter</p>
                                <p>Medium</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="previous">
                                <h5>Previous</h5>
                                <p>Hack@Brown 2019</p>
                                <p>Hack@Brown 2018</p>
                                <p>Hack@Brown 2017</p>
                                <p>Hack@Brown 2016</p>
                                <p>Hack@Brown 2015</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="links">
                                <h5>Links</h5>
                                <p>Application form</p>
                                <p>Sign in page</p>
                                <p>Landing page</p>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="misc">
                                <p className="message">Special thanks to Brown Computer
                                    Science and Brown HCRI!
                                </p>
                                <p>Copyright 2018 Hack@Brown. Code of Conduct</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            );
        }
    }
    