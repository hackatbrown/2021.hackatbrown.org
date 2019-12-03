import React from "react";
import "./Toolbar.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Firebase from "../Firebase";

type ToolbarProps = {
    backgroundColor: string;
    firebase: (Firebase | null)
};

type ToolbarState = {
    user: any
};

/** custom styling for toolbar buttons */
const logoutStyle:React.CSSProperties = {
  textTransform: 'none',
  color: 'white',
  background: 'transparent',
  borderRadius: '16.5px',
  border: '2px solid #FFFFFF',
  height: '40px',
  width: '112px',
  padding: '15px',
  fontSize: '18px'
};

const tabStyle:React.CSSProperties = {
  textTransform: 'none',
  color: 'white',
  background: 'transparent',
  fontSize: '18px'
}

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

    // Workaround of having nothing as else case if firebase is null
    doNothing = () => {}

    // Check if user is logged in when component mounts
    componentWillMount = () => {
        let currFirebase = this.props.firebase;
        if (currFirebase == null) { // if true, error

        } else {
            currFirebase.doAuthListener(this); // check if user is logged in or not
        }
    }

    render() {
        let button; // display login/join or dashboard button
        if (this.state.user != null) { // if true, user is logged in
            // TODO: Go to dashboard
            button =
              <Button
                label="logout"
                style={logoutStyle}
                component={props => <Link to="/logout" {...props}/>}
                onClick={(this.props.firebase == null) ? this.doNothing : this.props.firebase.doLogOut}
                linkButton={true}>
                Log out
              </Button>
                // <button onClick={(this.props.firebase == null) ? this.doNothing : this.props.firebase.doLogOut} style={logoutStyle}>
                //     <p>Log out</p>
                // </button>
        } else { // else, user is not logged in
            // button =
            //     <button onClick={(this.props.firebase == null) ? this.doNothing : this.props.firebase.doLogOut} className="toolbar-signin">
            //                         <p>Join/Login</p>
            //                     </button>
        }
        return (
            <div className="toolbar" style={{backgroundColor: this.props.backgroundColor}}>
                <Container>
                    <Row>
                        <Col>
                        <div className="toolbar-logo">
                        </div>
                        </Col>

                        <Col>
                        <div className="toolbar-about">
                          <Button
                            style={tabStyle}
                            label="about"
                            component={props => <Link to="/about" {...props}/>}
                            linkButton={true}>
                            About
                          </Button>
                        </div>
                        </Col>

                        <Col>
                        <div className="toolbar-itinerary">
                          <Button
                            style={tabStyle}
                            label="itinerary"
                            component={props => <Link to="/itinerary" {...props}/>}
                            linkButton={true}>
                            Itinerary
                          </Button>
                        </div>
                        </Col>

                        <Col>
                        <div className="toolbar-faq">
                          <Button
                            style={tabStyle}
                            label="faq"
                            component={props => <Link to="/faq" {...props}/>}
                            linkButton={true}>
                            FAQ
                          </Button>
                        </div>
                        </Col>

                        <Col>
                        <div className="toolbar-sponsors">
                          <Button
                            style={tabStyle}
                            label="sponsors"
                            component={props => <Link to="/sponsor" {...props}/>}
                            linkButton={true}>
                            Sponsors
                          </Button>
                        </div>
                        </Col>

                        <Col>
                        <div className="toolbar-logout">
                          {button}
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
