import React from "react";
import "./Toolbar.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Nav, Button, NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import blackLogoImg from "../../assets/images/LandingPage/blackpaw.png";
import whiteLogoImg from "../../assets/images/LandingPage/whitepaw.png";
import mlhImg from "../../assets/images/LandingPage/mlh-badge.png";
import { Link, animateScroll as scroll } from "react-scroll";
import Firebase from "../Firebase";
import { Redirect } from "react-router-dom";
import { couldStartTrivia } from "typescript";

type ToolbarProps = {
  firebase: Firebase | null;
  backgroundColor: string;
};

type ToolbarState = {
  user: any;
  redirectLogout: boolean;
};

export default class Toolbar extends React.Component<
  ToolbarProps,
  ToolbarState
> {
  constructor(props: ToolbarProps) {
    super(props);
    this.state = {
      user: null,
      redirectLogout: false,
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

  logOut = () => {
    if (this.props.firebase != null) {
      this.props.firebase.doLogOut();
      this.setState({
        redirectLogout: true,
      });
    }
  };

  render() {
    let button; // display login/join or dashboard button
    if (this.state.user != null) {
      // if true, user is logged in
      // TODO: Go to dashboard
      button = (
        <button onClick={this.logOut} className="toolbar-signin">
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

    if (this.state.redirectLogout && window.location.pathname !== "/") {
      return <Redirect to="/" />;
    } else {
      let hostname = window.location.href;
      hostname = hostname.match(".+://.+/")[0];

      let toolbarContainerClassname; 
      switch(window.location.pathname) {
        case "/dashboard":
          toolbarContainerClassname = "dashboard-tool-bar-container";
          break;
        case "/registration": 
          toolbarContainerClassname = "regist-tool-bar-container";
          break;
        default:
          toolbarContainerClassname = "main-tool-bar-container";
          break;
      }
      console.log(toolbarContainerClassname)
      return (
        <>
          <img id="mlh-img" src={mlhImg} alt="MLH" style={{
            display:
              window.location.pathname === "/" ? "initial" : "none",
          }}></img>
          <div className="toolbar">
            <Navbar
              collapseOnSelect
              expand="lg"
              className="toolbar"
              style={{
                backgroundColor: this.props.backgroundColor,
                alignItems: "center",
                paddingLeft: "11vw",
                paddingRight: "11vw",
              }}
            >
              <Navbar.Brand>
                <div>
                  {/* white logo displayed on certain backgroundColor prop passed in*/}
                  {this.props.backgroundColor === "#211959" ? (
                    <a href="/">
                      <img
                        id="logo-img"
                        src={whiteLogoImg}
                        onClick={this.scrollToTop}
                        alt="Hack@Brown"
                      ></img>
                    </a>
                  ) : (
                    <a href="/">
                      <img
                        id="logo-img"
                        src={blackLogoImg}
                        onClick={this.scrollToTop}
                        alt="Hack@Brown"
                      ></img>
                    </a>
                  )}
                </div>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Nav className={toolbarContainerClassname}>
                  <Col>
                    {window.location.pathname === "/" ?
                    <div
                      className="toolbar-about"
                    >
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
                    </div> : <div className="toolbar-about">
                        <a
                            href={hostname + "#about"}
                            className="toolbar-about"
                        >
                        About
                        </a>
                    </div>}
                  </Col>

                  <Col>
                    {window.location.pathname === "/" ?
                    <div
                      className="toolbar-itinerary"
                    >
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
                    </div> : <div className="toolbar-itinerary">
                        <a
                            href={hostname + "#itinerary"}
                            className="toolbar-itinerary"
                        >
                          Itinerary
                        </a>
                    </div>}
                  </Col>

                  <Col>
                    {window.location.pathname === "/" ?
                    <div
                      className="toolbar-faq"
                    >
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
                    </div> : <div className="toolbar-faq">
                        <a
                            href={hostname + "#faq"}
                            className="toolbar-faq"
                        >
                          FAQ
                        </a>
                    </div>}
                  </Col>

                  <Col>
                    {window.location.pathname === "/" ?
                    <div
                      className="toolbar-virtual-space"
                    >
                      <Link
                        activeClass="active"
                        to="virtualSpace"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        Virtual&nbsp;Space
                      </Link>
                    </div> : <div className="toolbar-virtual-space">
                        <a
                            href={hostname + "#virtualSpace"}
                            className="toolbar-virtual-space"
                        >
                        Virtual&nbsp;Space
                        </a>
                    </div>}
                  </Col>

                  <Col>
                    {window.location.pathname === "/" ?
                    <div
                      className="toolbar-sponsors"
                    >
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
                    </div> : <div className="toolbar-sponsors">
                        <a
                            href={hostname + "#sponsors"}
                            className="toolbar-sponsors"
                        >
                        Sponsors
                        </a>
                    </div>}
                  </Col>

                  {/* <Col>
                                    <div
                                        className="toolbar-registration"
                                        style={{
                                            display:
                                                // window.location.pathname === "/"
                                                //     ? "initial"
                                                //     : "none"
                                                "none"
                                        }}
                                    >
                                        <Link id = "register"
                                            activeClass="active"
                                            to="register"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                        >        
                                            Register
                                        </Link>
                                    </div>
                                </Col> */}

                  <Col className="sign-in-col">{button}</Col>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </>
      );
    }
  }
}
