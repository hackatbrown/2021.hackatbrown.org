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
                        <Col sm={4}>
                            <div className="current">
                                <h5 className="col-header">Hack@Brown 2021:</h5>
                                <p className="theme">Afterschool</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="socials">
                                <h5 className="col-header">Socials</h5>
                                <p>
                                    <a
                                        className="footerlink"
                                        href="https://www.instagram.com/hackatbrown/"
                                        target="_blank"
                                    >
                                        Instagram
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="footerlink"
                                        href="https://www.facebook.com/hackatbrown/"
                                        target="_blank"
                                    >
                                        Facebook
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="footerlink"
                                        href="https://twitter.com/hackatbrown/"
                                        target="_blank"
                                    >
                                        Twitter
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="footerlink"
                                        href="https://medium.com/hack-at-brown"
                                        target="_blank"
                                    >
                                        Medium
                                    </a>
                                </p>
                            </div>
                        </Col>
                        <Col>
                            <div className="previous">
                                <h5 className="col-header">Previous</h5>
                                <p>
                                    <a
                                        className="footerlink"
                                        href="https://2020.hackatbrown.org/"
                                        target="_blank"
                                    >
                                        Hack@Brown 2020
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="footerlink"
                                        href="https://2019.hackatbrown.org/"
                                        target="_blank"
                                    >
                                        Hack@Brown 2019
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="footerlink"
                                        href="https://2018.hackatbrown.org/"
                                        target="_blank"
                                    >
                                        Hack@Brown 2018
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="footerlink"
                                        href="https://2017.hackatbrown.org/"
                                        target="_blank"
                                    >
                                        Hack@Brown 2017
                                    </a>
                                </p>
                            </div>
                        </Col>
                        
                        <Col sm={3}>
                            <div className="misc">
                                <p className="message">
                                    Special thanks to Brown Computer Science and
                                    Brown HCRI!
                                </p>
                                <br/>
                                <a href="/code-of-conduct" className="footerlink">
                                    Copyright 2021 Hack@Brown. Code of Conduct
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
