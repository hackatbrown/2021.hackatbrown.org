import React, { Component } from "react";
import AdminPanelDashboard from "./components/AdminPanelDashboard";

const PASSWORD = "123";

interface IState {
  currentPassword: String;
  verified: boolean;
  hasSubmit: boolean;
}

export default class AdminPanelHomePage extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      currentPassword: "",
      verified: false,
      hasSubmit: false,
    };
  }

  handleSubmit(e: any) {
    e.preventDefault();

    if (this.state.currentPassword === PASSWORD) {
      this.setState({
        currentPassword: "",
        verified: true,
        hasSubmit: true,
      });
    }

    // // Prepare form data
    // var email_signup_data = new FormData();
    // const email = this.fixEmail(this.state.currentTask);
    // if (email === "ERROR") {
    //     this.setState({
    //         errorStatus: "Invalid email address: " + this.state.currentTask,
    //         lastEmail: this.state.currentTask,
    //         hasSubmit: true
    //     });
    // } else {
    //     email_signup_data.append("email", email);
    //     // Need headers
    //     const config = {
    //         headers: { "Content-Type": "application/x-www-form-urlencoded" }
    //     };
    //     // send post request
    //     axios
    //         .post(
    //             "https://api2020-hackatbrown.herokuapp.com/email_signup/register",
    //             email_signup_data,
    //             config
    //         )
    //         .then(res => {
    //             // set the error status message in state
    //             this.setState({
    //                 errorStatus: res.data.message,
    //                 lastEmail: res.data.email,
    //                 hasSubmit: true
    //             });
    //         });
    // }
  }

  render() {
    return (
      <div className="container">
        <h1 className="my-5">Dev Team Rules!!!!</h1>
        
        {!this.state.verified && <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            className="form-control"
            type="text"
            placeholder="Password"
            //value={this.state.currentPassword}
            onChange={(e) => this.setState({ currentPassword: e.target.value })}
          />

          <button className="form-submit" type="submit">
            Submit
          </button>
        </form>}
        {this.state.verified && <AdminPanelDashboard/>}
      </div>
    );
  }
}
