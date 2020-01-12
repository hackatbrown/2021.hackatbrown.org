import React from "react";
import "./DashboardHome.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Firebase from "../../components/Firebase";
import axios from "axios";
import ConfirmForm from "./components/ConfirmForm/ConfirmForm";

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
    rsvp: any;
    size: string;
    legalFirstName: string;
    legalLastName: string;
    phoneNumber: string;
    dietary: string[];
    projects: string[];
    requireHost: boolean | null;
    brownStudent: boolean | null;
    willingHost: boolean | null;
    conduct: boolean | null;
    formSubmitted: boolean;
};

const buttonStyle: React.CSSProperties = {
    textTransform: "none",
    color: "white",
    borderRadius: "15px",
    border: "2px solid #FFFFFF"
};

const buttonClickedStyle: React.CSSProperties = {
    textTransform: "none",
    color: "#405464",
    borderRadius: "15px",
    background: "white",
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
            accepted: true, // TODO: CHANGE TO FALSE, SET AS TRUE FOR TESTING PURPOSES
            error: "",
            rsvp: null, // true = confirmed attendance, false = not attending anymore
            size: "",
            legalFirstName: "",
            legalLastName: "",
            phoneNumber: "",
            dietary: [],
            projects: [],
            requireHost: null,
            brownStudent: null,
            willingHost: null,
            conduct: null,
            formSubmitted: false
        };
    }

    formSubmittedRender = () => {
      this.setState({
        formSubmitted: true
      });
    }

    handleDisableAll = (event: any) => {
      let name = event.target.id;
      if (event.target.checked) {
        if (name === "projects") {
          this.setState({
            [name]: ["undecided"]
          } as any);
        }
      } else {
        this.setState({
          [name]: []
        } as any);
      }
    }

    handleFormChange = (event: any) => {
        let name = event.target.id;
        let value = event.target.value;

        /* case where value is yes/no -> convert to boolean */
        if (value === "yes") {
            value = true;
        } else if (value === "no") {
            value = false;
        }

        this.setState({
            [name]: value
        } as any);
    };

    handleMultiFormChange = (event: any) => {
        let name = event.target.id;

        let newVals;
        if (name === "dietary") {
            newVals = [...this.state.dietary];
        } else if (name === "projects") {
            newVals = [...this.state.projects];
        }

        if (event.target.checked) {
            newVals.push(event.target.value);
        } else {
            newVals.splice(newVals.indexOf(event.target.value), 1);
        }


        this.setState({
            [name]: newVals
        } as any);
    };

    styleConfirmButton = () => {
      // corresponds to button for "confirm attendance"
      if (this.state.rsvp == null) {
        // no rsvp status selected yet
        return buttonStyle;
      } else if (this.state.rsvp) {
        // confirmed attendance
        return buttonClickedStyle;
      } else {
        // not attending anymore
        return buttonStyle;
      }
    }

    styleNotConfirmButton = () => {
      // corresponds to button for "not attending anymore"
      if (this.state.rsvp == null) {
        // no rsvp status selected yet
        return buttonStyle;
      } else if (this.state.rsvp) {
        // confirmed attendance
        return buttonStyle;
      } else {
        // not attending anymore
        return buttonClickedStyle;
      }
    }

    confirmDenyAcceptance = (event:any) => {
      let status = event.target.parentNode.id === "confirm";

      if (!status) {
        // rsvp as no
        this.setState({
          formSubmitted: false
        });
      }

      this.setState({
        rsvp: status
      });
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
                                        // accepted: res.data.accepted // TODO: UNCOMMENT
                                        // rsvp: res.data.rsvp // TODO: UNCOMMENT
                                        // formSubmitted: res.data. // TODO: FIELD FOR WHETHER FORM WAS SUBMITTED
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

    appStatusMessage = () => {
      if (this.state.accepted && this.state.rsvp == null) {
        return "ACCEPTED";
      } else if (this.state.accepted && this.state.rsvp && this.state.formSubmitted) {
        return "CONFIRMED";
      } else if (this.state.accepted && !this.state.rsvp) {
        return "NO LONGER ATTENDING";
      } else if (!this.state.accepted) {
        return "SUBMITTED";
      }
    }

    render() {
        let content:any;
        if (this.state.error != "") {
            // if true, error
            content = <span className="message">{this.state.error}</span>;
        } else if (!this.state.appSubmitted) {
            // if app hasn't been submitted
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
        } else if (this.state.appSubmitted && !this.state.accepted){
            // if app has been submitted, but not accepted/decisions not out yet
            content = (
                <div>
                    <div
                        className="dashboard-button"
                        style={buttonStyle}
                    >
                        <p id="app-stat">
                            <span className="button-title">
                                Application Status
                            </span>
                            <br></br>
                            <strong>SUBMITTED</strong>
                        </p>
                        <Button
                            className="inner-button"
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
        } else if (this.state.accepted){
            // app has been accepted
            let confirmStyle = this.styleConfirmButton();
            let notConfirmStyle = this.styleNotConfirmButton();
            content = (
                <div>
                    <div
                        className="dashboard-button"
                        style={buttonStyle}
                    >
                        <p id="app-stat">
                            <span className="button-title">
                                Application Status
                            </span>
                            <br></br>
                            <strong>
                              {this.appStatusMessage()}
                            </strong>
                        </p>
                        <Button
                            className="inner-button"
                            id="confirm"
                            style={confirmStyle}
                            onClick={this.confirmDenyAcceptance}
                        >
                            {this.state.rsvp ? "Attendance Confirmed!" : "Confirm Attendance" }
                        </Button>
                        <Button
                            className="inner-button"
                            id="deny"
                            style={notConfirmStyle}
                            onClick={this.confirmDenyAcceptance}
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

        const renderConfirmForm = () => {
          if (this.state.rsvp == null) {
            // no response yet
            return content;
          } else if (this.state.rsvp && this.state.formSubmitted) {
            // clicked "attending", but form already submitted
            return content;
          } else if(this.state.rsvp) {
            // clicked "attending", form not submitted yet
            return <ConfirmForm
                      user={this.state.user}
                      apiURL={this.props.apiURL}
                      currentSelected={this.state}
                      handleFormChange={this.handleFormChange}
                      handleMultiFormChange={this.handleMultiFormChange}
                      handleDisableAll={this.handleDisableAll}
                      formSubmittedRender={this.formSubmittedRender}
                    >
                    </ConfirmForm>;
          } else if (this.state.rsvp && !this.state.formSubmitted) {
            // originally not attending, switch to attending
            return <ConfirmForm
                      user={this.state.user}
                      apiURL={this.props.apiURL}
                      currentSelected={this.state}
                      handleFormChange={this.handleFormChange}
                      handleMultiFormChange={this.handleMultiFormChange}
                      handleDisableAll={this.handleDisableAll}
                      formSubmittedRender={this.formSubmittedRender}
                    >
                    </ConfirmForm>;
          } else {
            return content;
          }
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
                    {renderConfirmForm()}
                </div>
            </div>
        );
    }
}
