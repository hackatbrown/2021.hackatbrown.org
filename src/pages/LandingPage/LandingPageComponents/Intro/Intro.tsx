import React from "react";
import "./Intro.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import introImg from "../../../../assets/images/LandingPage/placeholder-square.png";

type IntroProps = {};

type IntroState = {
    state: string;
};

export default class Intro extends React.Component<
    IntroProps,
    IntroState
> {
    constructor(props: IntroProps) {
        super(props);
        this.state = {
            state: "good"
        };
    }
    render() {
        return (
            <div className="intro">
                <Container>
                    <Row>
                        <Col sm={6}>
                        <div className="intro-blurb">
                            <h1 className="intro-blurb-header">Welcome to the Garage</h1>
                            <p className="intro-blurb-text">
                                Hack@Brown is all about learning. Spend a weekend 
                                with us and 500 other students to take a step out 
                                of your comfort zone. Use Hack@Brown as an opportunity 
                                to experiment with a new platform, API, or that idea 
                                that’s always been in the back of your mind!
                            </p>
                            <p>
                                <br></br>Whether you’re building your first website, dabbling in 
                                Photoshop, or hacking with an Oculus Rift, Hack@Brown is 
                                for individuals of all backgrounds and experiences. 
                                This year, our theme is ‘Garage.’ We want you take 
                                inspiration from your passions and experiment with your 
                                wildest ideas. Build away!
                            </p>
                        </div>
                        </Col>

                        <Col sm={6}>
                        <div className="intro-img-div">
                            <img id="intro-img" src={introImg}></img>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
