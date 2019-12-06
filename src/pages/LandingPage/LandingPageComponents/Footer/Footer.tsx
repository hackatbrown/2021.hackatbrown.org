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
                                <p><a className="footerlink" href="https://www.instagram.com/hackatbrown/" target="_blank">Instagram</a></p>
                                <p><a className="footerlink" href="https://www.facebook.com/hackatbrown/" target="_blank">Facebook</a></p>
                                <p><a className="footerlink" href="https://twitter.com/hackatbrown/" target="_blank">Twitter</a></p>
                                <p><a className="footerlink" href="https://medium.com/hack-at-brown" target="_blank">Medium</a></p>
                            </div>
                        </Col>
                        <Col>
                            <div className="previous">
                                <h5>Previous</h5>
                                <p><a className="footerlink" href="https://2019.hackatbrown.org/" target="_blank">Hack@Brown 2019</a></p>
                                <p><a className="footerlink" href="https://2018.hackatbrown.org/" target="_blank">Hack@Brown 2018</a></p>
                                <p><a className="footerlink" href="https://2017.hackatbrown.org/" target="_blank">Hack@Brown 2017</a></p>
                                <p><a className="footerlink" href="https://2016.hackatbrown.org/" target="_blank">Hack@Brown 2016</a></p>
                            </div>
                        </Col>
                        <Col>
                            <div className="links">
                                <h5>Links</h5>
                                <p><a className="footerlink" href="/dashboard">Application form</a></p>
                                <p><a className="footerlink" href="/">Landing page</a></p>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="misc">
                                <p className="message">Special thanks to Brown Computer
                                    Science and Brown HCRI!
                                </p>
                                <p>Copyright 2019 Hack@Brown. Code of Conduct</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            );
        }
    }
    