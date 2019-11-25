import React from "react";
import "./Toolbar.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logoImg from "../../../../assets/images/LandingPage/placeholder-square.png";

type ToolbarProps = {};

type ToolbarState = {
    state: string;
};

export default class Toolbar extends React.Component<
    ToolbarProps,
    ToolbarState
> {
    constructor(props: ToolbarProps) {
        super(props);
        this.state = {
            state: "good"
        };
    }
    render() {
        return (
            <div className="toolbar">
                <Container>
                    <Row>
                        <Col>
                        <div className="toolbar-logo">
                            <img id="logo-img" src={logoImg}></img>
                        </div>
                        </Col>

<<<<<<< HEAD
=======
                        <div className="toolbar-items">
>>>>>>> 1d54320d6a14a43398d774cfd2fa8794d7c9f817
                        <Col>
                        <div className="toolbar-about">
                            <p>About</p>
                        </div>
                        </Col>

                        <Col>
                        <div className="toolbar-itinerary">
                            <p>Itinerary</p>
                        </div>
                        </Col>

                        <Col>
                        <div className="toolbar-faq">
                            <p>FAQ</p>
                        </div>
                        </Col>

                        <Col>
                        <div className="toolbar-sponsors">
                            <p>Sponsors</p>
                        </div>
                        </Col>

                        <Col>
<<<<<<< HEAD
                        <div className="toolbar-logout">
                            <p>Logout</p>
                        </div>
                        </Col>
=======
                        <div className="toolbar-signin">
                            <p>Join/Login</p>
                        </div>
                        </Col>
                        </div>
>>>>>>> 1d54320d6a14a43398d774cfd2fa8794d7c9f817
                    </Row>
                </Container>
            </div>
        );
    }
}
