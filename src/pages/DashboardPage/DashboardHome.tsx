import React from "react";
import "./DashboardHome.css";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Firebase from "../../components/Firebase";
import axios from "axios";

/**
 * define a type model for the props you are passing in to the component
 */
type DashboardProps = {
    firebase : (Firebase | null)
};

/**
 * define a type model for the state of the page
 */
type DashboardState = {
    user: any,
    name: string,
    appSubmitted: boolean,
    error: string
};

const buttonStyle:React.CSSProperties = {
  textTransform: 'none',
  color: 'white',
  background: 'transparent',
  borderRadius: '15px',
  border: '2px solid #FFFFFF',
  //height: '82px',
  //width: '497px',
  //fontSize: '24px'
};

export default class DashboardHome extends React.Component<
    DashboardProps,
    DashboardState
> {
    constructor(props: DashboardProps) {
        super(props);
        this.state = {
            user: null,
            name: "there",
            appSubmitted: true,
            error: ""
        }
    }

    fetchHackerData = () => {
      let currFirebase = this.props.firebase;
      if (currFirebase == null) { // if true, error
        this.setState({
          error: "Sorry, something went wrong. Please try again later."
        });
      } else {
          if (this.state.user == null) { // if true, error
            this.setState({
              error: "Sorry, something went wrong. Please try again later."
            });
          } else {
            let session = this;
            session.state.user.getIdToken(true).then(function(idToken: any) {
              // Send request to hacker status route, field 'fire_token'
              axios
              .post(
                  "https://api2020-staging.herokuapp.com/hacker_account/hacker_status/",
                  idToken
              )
              .then(res => {
                  // get response
                  let name;
                  if (res.data.name == "") { // if true, user did not submit register form yet
                    // keep name as "there"
                  } else {
                    session.setState({
                      name: res.data.name,
                      appSubmitted: res.data.app_submitted
                    });
                  }
              });
              // console.log(idToken);
            });
          }
      }
        // let request: string = "https://api2020-staging.herokuapp.com/hacker_account/hacker_status/" + this.state.user.uid;
        // fetch(request)
        //   .then((response: any) => response.json())
        //   .then(info => this.setState({ name: info.name, appSubmitted: info.app_submitted }))
        //   .catch(error => this.setState({ error: "Sorry, something went wrong. Please try again later." }));
    }

    // Check if user is logged in when component mounts
    componentDidMount = () => {
      let currFirebase = this.props.firebase;
      if (currFirebase == null) { // if true, error

      } else {
        currFirebase.doAuthListener(this); // check if user is logged in or not
        this.fetchHackerData();
      }
    }

    render() {
      let content;
      if (this.state.error != "") { // if true, error
        content = <span className="message">{this.state.error}</span>
      } else if (!this.state.appSubmitted) { // if true, app hasn't been submitted
        content =
          <div className="start-app">
            <Button
              id="start"
              style={buttonStyle}
              component={props => <Link to="/registration" {...props}/>}
              linkButton={true}
            >
              Start Your Application
            </Button>
          </div>
      } else { // else, app completed
        content =
        <div id="status">
             <div id="outer-button"
             style={buttonStyle}
             //component={props => <Link to="/registration" {...props}/>}
             //linkButton={true}
             >
            <p id="app-stat">Application Status 
            <br></br>
            IN PROGRESS</p>
            <Button 
              id="inner-button"
              style={buttonStyle}
              component={props => <Link to="/registration" {...props}/>}
              linkButton={true}
              >
                Edit Your Application

            </Button>
            </div> 
            <Button 
            id="reimbursement"
            style={buttonStyle}
            component={props => <Link to="/registration" {...props}/>}
            linkButton={true}
            >
            <p id="apply-reimbursement">Apply for Reimbursement
            <br></br>
            *available after Hackathon</p>
            </Button>
          </div>
      }

      return (
        <div className="dashboard">
          <div className="main-pane">
            <div className="greeting">
              <h1> Hi, {this.state.name}! </h1>
            </div>
            {content}
          </div>
        </div>
      );
    }
}
