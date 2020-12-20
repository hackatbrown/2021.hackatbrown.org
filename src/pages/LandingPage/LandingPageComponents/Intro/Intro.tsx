import React from "react";
import "./Intro.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import juiceImg from "../../../../assets/images/LandingPage/JuiceBattery.gif";

type IntroProps = {};

type IntroState = {
    state: string;
};

export default class Intro extends React.Component<IntroProps, IntroState> {
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
            <div className="juice">
                <img id="juiceImg" src={juiceImg}></img>
            </div>
            </Col>
            <Col sm={1}></Col>
                        <Col sm={5}>
                <div className="intro-blurb">
                    <h1 className="intro-blurb-header">
                        Welcome to H@B!
                    </h1>
                    <p className="intro-blurb-text">
                        Hack@Brown is all about learning. Spend a <span className='bold'>virtual</span> weekend
                        with 500 other students to take a step out of your comfort
                        zone!
                        <br/><br/>
                        Whether you’re building your first website, dabbling in Photoshop,
                        or hacking with an Oculus Rift, Hack@Brown is for individuals of
                        all backgrounds.
                        <br/><br/>
                        This year, our theme is <span className='bold'>"After School." </span>
                        Take inspiration from your passions and experiment with your wildest ideas.
                        Build away!
                    </p>
                </div>
                </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
