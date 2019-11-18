import React from "react";
import "./EmailPage.css";
import axios from "axios";
import error_img from "../../assets/images/EmailPage/error_img.png";
interface IState {
    currentTask: string;
    tasks: Array<string>;
    errorStatus: string;
    hasSubmit: boolean;
}

export default class EmailPage extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            currentTask: "",
            tasks: [],
            errorStatus: "",
            hasSubmit: false
        };
    }

    handleSubmit(e: any) {
        e.preventDefault();

        this.setState({
            currentTask: "",
            tasks: [this.state.currentTask]
        });

        // Prepare form data
        var email_signup_data = new FormData();
        email_signup_data.append("email", this.state.currentTask);

        // Need headers
        const config = {
            headers: { "Content-Type": "application/x-www-form-urlencoded" }
        };

        // send post request
        axios
            .post(
                "https://api2020-hackatbrown.herokuapp.com/email_signup/register",
                email_signup_data,
                config
            )
            .then(res => {
                // set the error status message in state
                this.setState({
                    errorStatus: res.data.message,
                    hasSubmit: true
                });
            });
    }

    render() {
        return (
            <div className="email-page">
                <div>
                    <img className="error-img" src={error_img}></img>
                    <h1 className="heading">Well, this is awkward...</h1>
                    <p style={{ color: "#A6D3D0", margin: "10px 0" }}>
                        {" "}
                        Our site is currently under construction to prepare for
                        Hack@Brown 2020! <br />
                        Sign up to recieve email alerts below and we'll let you
                        know when we're back.
                    </p>
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <input
                            className="input-box"
                            type="text"
                            placeholder="Email"
                            value={this.state.currentTask}
                            onChange={e =>
                                this.setState({ currentTask: e.target.value })
                            }
                        />

                        <button className="input-button" type="submit">
                            Submit
                        </button>
                    </form>
                    {this.state.hasSubmit && (
                        <p style={{ color: "#A6D3D0", margin: "10px 0" }}>
                            {this.state.errorStatus ||
                                "You have successfully added your email!"}
                        </p>
                    )}
                </div>
                <div className="past-websites-link">
                    <a href={"https://2020.hackatbrown.org/sponsors"}>
                        Sponsorship
                    </a>{" "}
                    |{" "}
                    <a href={"https://2019.hackatbrown.org/"}>
                        Hack@Brown 2019
                    </a>{" "}
                    |{" "}
                    <a href={"https://2018.hackatbrown.org/"}>
                        Hack@Brown 2018
                    </a>{" "}
                    |{" "}
                    <a href={"https://2017.hackatbrown.org/"}>
                        Hack@Brown 2017
                    </a>{" "}
                    |{" "}
                    <a href={"https://2016.hackatbrown.org/"}>
                        Hack@Brown 2016
                    </a>
                </div>
            </div>
        );
    }
}
