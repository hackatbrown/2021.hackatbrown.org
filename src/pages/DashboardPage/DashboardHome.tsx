import React from "react";
import "./DashboardHome.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Firebase from "../../components/Firebase";
import axios from "axios";

/**
 * define a type model for the props you are passing in to the component
 */
type DashboardProps = {
    apiURL: string;
    firebase: Firebase | null;
};

/**
 * define a type model for the state of the page
 */
type DashboardState = {
    user: any;
    fetchedData: boolean;
    firstName: string;
    appSubmitted: boolean;
    accepted: boolean;
    error: string;
};

const buttonStyle: React.CSSProperties = {
    textTransform: "none",
    color: "white",
    borderRadius: "15px",
    border: "2px solid #FFFFFF"
};

export default class DashboardHome extends React.Component<
    DashboardProps,
    DashboardState
> {
    constructor(props: DashboardProps) {
        super(props);
        this.state = {
            user: null,
            fetchedData: false,
            firstName: "there", // say "Hi, there!" if no name
            appSubmitted: false,
<<<<<<< Updated upstream
            accepted: true,
=======
            accepted: true, // TODO: CHANGE TO FALSE, SET AS TRUE FOR TESTING PURPOSES
>>>>>>> Stashed changes
            error: ""
        };
    }

    fetchHackerData = () => {
        let currFirebase = this.props.firebase;
        if (currFirebase == null) {
            // if true, error
            this.setState({
                error: "Sorry, something went wrong. Please try again later."
            });
        } else {
            if (this.state.user == null) {
                // if true, error
                this.setState({
                    error:
                        "Sorry, something went wrong. Please try again later."
                });
            } else {
                // setTimeout(() => {
                let session = this;
                const api = this.props.apiURL;
                this.state.user
                    .getIdToken(true)
                    .then(function(idToken: string) {
                        var hackerID = new FormData();
                        hackerID.append("fire_token", idToken);
                        const config = {
                            headers: {
                                "Content-Type":
                                    "application/x-www-form-urlencoded"
                            }
                        };
                        axios
                            .post(
                                api + "/hacker_account/hacker_status",
                                hackerID,
                                config
                            )
                            .then(res => {
                                // get response
                                let name;
                                if (res.data.first_name == "") {
                                    // if true, user did not submit register form yet
                                    // keep name as "there"
                                } else {
                                    session.setState({
                                        firstName: res.data.first_name,
                                        appSubmitted: res.data.app_submitted,
<<<<<<< Updated upstream
                                       // accepted: res.data.accepted
=======
                                        // accepted: res.data.accepted // TODO: UNCOMMENT
>>>>>>> Stashed changes
                                    });
                                }
                            });
                    })
                    .catch(function(error: any) {});
            }
        }
    };

    // Check if user is logged in when component mounts
    componentWillMount = () => {
        let currFirebase = this.props.firebase;
        if (currFirebase == null) {
            // if true, error
        } else {
            if (currFirebase != null) {
                currFirebase.doAuthListener(this); // check if user is logged in or not
            }
        }
    };

    componentDidUpdate = () => {
        if (!this.state.fetchedData) {
            this.fetchHackerData();
            this.setState({
                fetchedData: true
            });
        }
    };

    render() {
        let content;
        if (this.state.error != "") {
            // if true, error
            content = <span className="message">{this.state.error}</span>;
        } else if (!this.state.appSubmitted) {
            // app hasn't been submitted
            content = (
                <div className="start-app">
                    <Button
                        id="start"
                        style={buttonStyle}
                        component={props => (
                            <Link to="/registration" {...props} />
                        )}
                        linkButton={true}
                    >
                        Start Your Application
                    </Button>
                </div>
            );
<<<<<<< Updated upstream
        } else if (!this.state.appSubmitted) {
            // else, app completed
=======
        } else if (this.state.appSubmitted){
            // if app has been submitted, but decisions not out
>>>>>>> Stashed changes
            content = (
                // <div id="status">
                <div>
                    <div
                        className="dashboard-button"
                        style={buttonStyle}
                        //component={props => <Link to="/registration" {...props}/>}
                        //linkButton={true}
                    >
                        <p id="app-stat">
                            <span className="button-title">
                                Application Status
                            </span>
                            <br></br>
                            <strong>SUBMITTED</strong>
                        </p>
                        <Button
                            id="inner-button"
                            style={buttonStyle}
                            component={props => (
                                <Link to="/registration" {...props} />
                            )}
                            linkButton={true}
                        >
                            Edit Your Application
                        </Button>
                        <p className="sub-text">
                            A confirmation email has been sent to you.
                        </p>
                    </div>
                    <Button
                        className="dashboard-button"
                        id="reimbursement"
                        style={buttonStyle}
                        component={props => (
                            <Link to="/registration" {...props} />
                        )}
                        linkButton={false}
                        disabled
                    >
                        <p id="apply-reimbursement">
                            <div className="button-title" id="apply-title">
                                Apply for Reimbursement
                            </div>
                            <div id="coming-soon" className="sub-text">
                                (Will be available after the hackathon!)
                            </div>
                        </p>
                    </Button>
                </div>
            );
        }else if (this.state.accepted){
            // else, app accepted
            content = (
                // <div id="status">
                <div>
                    <div
                        className="dashboard-button"
                        style={buttonStyle}
                        //component={props => <Link to="/registration" {...props}/>}
                        //linkButton={true}
                    >
                        <p id="app-stat">
                            <span className="button-title">
                                Application Status
                            </span>
                            <br></br>
                            <strong>APPROVED</strong>
                        </p>
                        <Button
                            id="inner-button"
                            style={buttonStyle}
                            component={props => (
                                <Link to="/registration" {...props} />//what should this link to?
                            )}
                            linkButton={true}
                        >
                            Confirm Attendance
                        </Button>
                        <Button
                            id="inner-button"
                            style={buttonStyle}
                            component={props => (
                                <Link to="/registration" {...props} />//what should this link to?
                            )}
                            linkButton={true}
                        >
                            Not Attending Anymore
                        </Button>
                    </div>
                    <Button
                        className="dashboard-button"
                        id="reimbursement"
                        style={buttonStyle}
                        component={props => (
                            <Link to="/registration" {...props} />
                        )}
                        linkButton={false}
                        disabled
                    >
                        <p id="apply-reimbursement">
                            <div className="button-title" id="apply-title">
                                Reimbursement Status:
                            </div>
                            <div id="coming-soon" className="sub-text">
                                IN PROGRESS
                            </div>
                        </p>
                    </Button>
                </div>
            );
            }

        return (
            <div className="dashboard">
                <div id="lights-container">
                    <img id="lamp" src={require('../../assets/images/Dashboard/dash_lamp.png')}/>
                    <img id="lamp-light" src={require('../../assets/images/Dashboard/dash_light.png')}/>
                </div>
                <div className="main-pane">
                    <div className="greeting">
                        <h1> Hi, {this.state.firstName}! </h1>
                    </div>
                    {content}
                </div>
            </div>
        );
    }
}
