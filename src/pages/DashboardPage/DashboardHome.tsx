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
    background: "#1A9996",
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
            accepted: false,
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
                                        accepted: res.data.accepted
                                    });
                                }
                            });
                    })
                    .catch(function(error: any) {
                    });
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
            // if true, app hasn't been submitted
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
        } else {
            // else, app completed
            content = (
                // <div id="status">
                <div>
                    <div
                        id="outer-button"
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
                    </div>
                    <Button
                        id="reimbursement"
                        style={buttonStyle}
                        component={props => (
                            <Link to="/registration" {...props} />
                        )}
                        linkButton={false}
                        disabled
                    >
                        <p id="apply-reimbursement">
                            <span className="button-title">
                                Apply for Reimbursement
                            </span>
                            <br></br>
                            <span id="sub-text">
                                (Will be available after the hackathon!)
                            </span>
                        </p>
                    </Button>
                </div>
            );
        }

        return (
            <div className="dashboard">
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
