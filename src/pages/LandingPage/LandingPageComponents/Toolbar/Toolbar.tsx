import React from "react";
import "./Toolbar.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logoImg from "../../../../assets/images/LandingPage/whitepaw.png";
import { Link, animateScroll as scroll } from "react-scroll";

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

    scrollToTop = () => {
        scroll.scrollToTop();
      };

    render() {
        return (
            <div className="toolbar">
                <Container>
                    <Row>
                        <Col>
                        <div className="toolbar-logo">
                            <img id="logo-img" src={logoImg} onClick={this.scrollToTop}></img>
                        </div>
                        </Col>

                        <div className="toolbar-items">
                        <Col>
                        <div className="toolbar-about">
                            <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-70} duration={500}>About</Link>
                        </div>
                        </Col>

                        <Col>
                        <div className="toolbar-itinerary">
                        <Link activeClass="active" to="itinerary" spy={true} smooth={true} offset={-70} duration={500}>Itinerary</Link>
                        </div>
                        </Col>

                        <Col>
                        <div className="toolbar-faq">
                        <Link activeClass="active" to="faq" spy={true} smooth={true} offset={-70} duration={500}>FAQ</Link>
                        </div>
                        </Col>

                        <Col>
                        <div className="toolbar-sponsors">
                        <Link activeClass="active" to="sponsors" spy={true} smooth={true} offset={-70} duration={500}>Sponsors</Link>
                        </div>
                        </Col>

                        <Col>
                        <div className="toolbar-signin">
                            <p>Join/Login</p>
                        </div>
                        </Col>
                        </div>
                    </Row>
                </Container>
            </div>
        );
    }
}
