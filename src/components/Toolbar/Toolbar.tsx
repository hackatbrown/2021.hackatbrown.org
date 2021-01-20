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
import LoginJoin from '../../pages/LandingPage/LandingPageComponents/LoginJoin/LoginJoin';
import { FirebaseContextConsumer } from "../Firebase/context";

type ToolbarProps = {
  firebase: Firebase | null;
  backgroundColor: string;
  hideToolbar: any;
  apiURL: string;
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

  logOut = async () => {
    if (this.props.firebase != null) {
      await this.props.firebase.doLogOut();
      this.setState({
        redirectLogout: true,
      });
    }

    // Refresh the page if logging out from homepage
    // This is done in order to reset justLogged state in LoginJoin
    if (window.location.pathname === "/") {
      window.location.reload(); 
    }
  };

  render() {
    let button; // display login/join or dashboard button
    if (this.state.user != null) {
      // if true, user is logged in
      // TODO: Go to dashboard
      button = (
        <button onClick={this.logOut} className="toolbar-signin">
          Log&nbsp;out
        </button>
      );
    } else {
      // else, user is not logged in
      // button =
      //     <button onClick={(this.props.firebase == null) ? this.doNothing : this.props.firebase.doLogOut} className="toolbar-signin">
      //                         <p>Join/Login</p>
      //                     </button>
      button = 
        <FirebaseContextConsumer>
          {firebase => (
              <LoginJoin
                  apiURL={this.props.apiURL}
                  firebase={firebase == null ? null : firebase.firebase}
                  hideToolbar={this.props.hideToolbar} />
          )}
        </FirebaseContextConsumer>
    }

    if (this.state.redirectLogout && window.location.pathname !== "/") {
      return <Redirect to="/" />;
    } else {
      let hostname = window.location.href;
      hostname = hostname.match(".+://.+/")[0];

      let toolbarClassname; 
      let applicationNav;
      let ceremonyNav;
      let brownTownNav;
      if (window.location.pathname === "/dashboard" 
        && this.state.user !== null) {
        toolbarClassname = "dashboard-toolbar";
        applicationNav = <div className="toolbar-about">
            <Nav.Link 
              eventKey="1" 
              activeClass="active"
              as={Link} 
              to="dashboard" 
              spy={true}
              smooth={true}
              offset={-65}
              duration={500}>
              Application
            </Nav.Link>
          </div>
        ceremonyNav = <div className="toolbar-itinerary">
          <Nav.Link
            eventKey="2"
            activeClass="active"
            as={Link} 
            to="livestreams-body"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Ceremonies
          </Nav.Link>
        </div>
        brownTownNav = <div className="toolbar-virtual-space">
            <Nav.Link
              eventKey="3"
              activeClass="active"
              as={Link} 
              to="brown-town-intro"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              H@B&nbsp;Town
            </Nav.Link>
          </div>
      } else if (window.location.pathname === "/registration" 
          && this.state.user !== null) {
          toolbarClassname = "regist-toolbar";
          applicationNav = <div className="toolbar-about">
                <a
                    href={hostname + "dashboard#dashboard"}
                    className="toolbar-about"
                >
                Application
                </a>
            </div>
          ceremonyNav = <div className="toolbar-about">
            <a
                href={hostname + "dashboard#dashboard"}
                className="toolbar-itinerary"
            >
            Ceremonies
            </a>
        </div>
          brownTownNav = <div className="toolbar-virtual-space">
                <a
                    href={hostname + "dashboard#dashboard"}
                    className="toolbar-virtual-space"
                >
                H@B&nbsp;Town
                </a>
            </div>
      } else {
        toolbarClassname = "main-toolbar";
      }
      
      return (
        <>
          <img id="mlh-img" src={mlhImg} alt="MLH" style={{
            display:
              window.location.pathname === "/" ? "initial" : "none",
          }}></img>
          <div className={"toolbar " + toolbarClassname}>
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
                <Nav className="tool-bar-container">
                  <Col>
                    {window.location.pathname === "/" || this.state.user === null ?
                    <div
                      className="toolbar-about"
                    >
                      <Nav.Link 
                        eventKey="1" 
                        activeClass="active"
                        as={Link} 
                        to="intro" 
                        spy={true}
                        smooth={true}
                        offset={-65}
                        duration={500}>
                        About
                      </Nav.Link>
                    </div> : applicationNav}
                  </Col>

                  <Col>
                    {window.location.pathname === "/" || this.state.user === null ?
                    <div
                      className="toolbar-itinerary"
                    >
                      <Nav.Link
                        eventKey="2"
                        activeClass="active"
                        as={Link} 
                        to="itinerary"
                        spy={true}
                        smooth={true}
                        offset={-65}
                        duration={500}
                      >
                        Itinerary
                      </Nav.Link>
                    </div> : ceremonyNav}
                  </Col>

                  {window.location.pathname === "/" || this.state.user === null ?
                  <Col>
                    <div
                      className="toolbar-faq"
                    >
                    <Nav.Link
                      eventKey="3"
                      activeClass="active"
                      as={Link}
                      to="faq"
                      spy={true}
                      smooth={true}
                      offset={-65}
                      duration={500}
                    >
                      FAQ
                    </Nav.Link>
                    </div> 
                  </Col> : brownTownNav}

                  {window.location.pathname === "/" || this.state.user === null ?
                  <Col>
                    <div
                      className="toolbar-virtual-space"
                    >
                      <Nav.Link
                        eventKey="4"
                        activeClass="active"
                        as={Link}
                        to="virtualSpace"
                        spy={true}
                        smooth={true}
                        offset={-65}
                        duration={500}
                      >
                        H@B&nbsp;Town
                      </Nav.Link>
                    </div> 
                  </Col> : null}

                  {window.location.pathname === "/" || this.state.user === null ?
                  <Col>
                    <div
                      className="toolbar-sponsors"
                    >
                      <Nav.Link
                        eventKey="5"
                        activeClass="active"
                        as={Link}
                        to="sponsors"
                        spy={true}
                        smooth={true}
                        offset={-65}
                        duration={500}
                      >
                        Sponsors
                      </Nav.Link>
                    </div>
                  </Col> : null}
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
