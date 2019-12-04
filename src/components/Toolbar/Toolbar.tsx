import React from "react";
import "./Toolbar.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Nav, Button, NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import logoImg from "../../assets/images/LandingPage/whitepaw.png";
import { Link, animateScroll as scroll } from "react-scroll";
import Firebase from "../Firebase";

type ToolbarProps = {
    firebase: Firebase | null;
};

type ToolbarState = {
    user: any;
};

export default class Toolbar extends React.Component<
    ToolbarProps,
    ToolbarState
> {
    constructor(props: ToolbarProps) {
        super(props);
        this.state = {
            user: null
        };
    }

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    // Workaround of having nothing as else case if firebase is null
    doNothing = () => {};

    // Check if user is logged in when component mounts
    componentDidMount = () => {
        let currFirebase = this.props.firebase;
        if (currFirebase == null) {
            // if true, error
        } else {
            currFirebase.doAuthListener(this); // check if user is logged in or not
        }
    };

    render() {
        let button; // display login/join or dashboard button
        if (this.state.user != null) {
            // if true, user is logged in
            // TODO: Go to dashboard
            button = (
                <button
                    onClick={
                        this.props.firebase == null
                            ? this.doNothing
                            : this.props.firebase.doLogOut
                    }
                    className="toolbar-signin"
                >
                    Log out
                </button>
            );
        } else {
            // else, user is not logged in
            // button =
            //     <button onClick={(this.props.firebase == null) ? this.doNothing : this.props.firebase.doLogOut} className="toolbar-signin">
            //                         <p>Join/Login</p>
            //                     </button>
        }
        return (
            <div className="toolbar">
                <Navbar collapseOnSelect expand="lg" className="toolbar">
                    <Navbar.Brand></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav
                            className="mr-auto"
                            style={{
                                alignItems: "center",
                                paddingLeft: "11vw"
                            }}
                        >
                            <div>
                                <img
                                    id="logo-img"
                                    src={logoImg}
                                    onClick={this.scrollToTop}
                                ></img>
                            </div>
                        </Nav>
                        <Nav
                            style={{
                                paddingRight: "11vw"
                            }}
                        >
                            <Col>
                                <div className="toolbar-about">
                                    <Link
                                        activeClass="active"
                                        to="intro"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        About
                                    </Link>
                                </div>
                            </Col>

                            <Col>
                                <div className="toolbar-itinerary">
                                    <Link
                                        activeClass="active"
                                        to="itinerary"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        Itinerary
                                    </Link>
                                </div>
                            </Col>

                            <Col>
                                <div className="toolbar-faq">
                                    <Link
                                        activeClass="active"
                                        to="faq"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        FAQ
                                    </Link>
                                </div>
                            </Col>

                            <Col>
                                <div className="toolbar-sponsors">
                                    <Link
                                        activeClass="active"
                                        to="sponsors"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        Sponsors
                                    </Link>
                                </div>
                            </Col>

                            <Col>{button}</Col>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
