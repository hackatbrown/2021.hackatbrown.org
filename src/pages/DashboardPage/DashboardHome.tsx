import React from "react";
import "./DashboardHome.css";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

/**
 * define a type model for the props you are passing in to the component
 */
type DashboardProps = {
};

/**
 * define a type model for the state of the page
 */
type DashboardState = {
};

const buttonStyle:React.CSSProperties = {
  textTransform: 'none',
  color: 'white',
  background: 'transparent',
  borderRadius: '15px',
  border: '2px solid #FFFFFF',
  height: '82px',
  width: '497px',
  fontSize: '24px'
};

export default class DashboardHome extends React.Component<
    DashboardProps,
    DashboardState
> {
    constructor(props: DashboardProps) {
        super(props);
        this.state = {
        }
    }

    render() {
      return (
        <div className="dashboard">
          <div className="main-pane">
            <div className="greeting">
              <h1> Hi, applicant! </h1>
            </div>
            <div className="start-app">
              <Button
                className="start"
                style={buttonStyle}
                component={props => <Link to="/registration" {...props}/>}
                linkButton={true}
              >
                Start Your Application
              </Button>
            </div>
          </div>
        </div>
      );
    }
}
