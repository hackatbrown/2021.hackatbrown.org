import React from "react";
import "./Toolbar.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logoImg from "../../../../assets/images/LandingPage/placeholder-square.png";
import Firebase from "../../../../components/Firebase";

type ToolbarProps = {
    firebase: (Firebase | null)
};

type ToolbarState = {
    user: any
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

    // Workaround of having nothing as else case if firebase is null
    doNothing = () => {}

    // Check if user is logged in when component mounts
    componentDidMount = () => {
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
                <button onClick={(this.props.firebase == null) ? this.doNothing : this.props.firebase.doLogOut} className="toolbar-signin">
                    <p>Log out</p>
                </button>
        } else { // else, user is not logged in
            // button =
            //     <button onClick={(this.props.firebase == null) ? this.doNothing : this.props.firebase.doLogOut} className="toolbar-signin">
            //                         <p>Join/Login</p>
            //                     </button>
        }
        return (
            <div className="toolbar">
                <Container>
                    <Row>
                        <Col>
                            <div className="toolbar-logo">
                                <img id="logo-img" src={logoImg}></img>
                            </div>
                        </Col>

                        <div className="toolbar-items">
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
                                {button}
                            </Col>
                        </div>
                    </Row>
                </Container>
            </div>
        );
    }
}
