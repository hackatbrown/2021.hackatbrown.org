import React from "react";
import "./EmailPage.css";
import axios from "axios";
import error_img from "../../assets/images/EmailPage/error_img.png";
interface IState {
    currentTask: string;
    tasks: Array<string>;
    errorStatus: string;
    hasSubmit: boolean;
    lastEmail: string;
}

export default class EmailPage extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            currentTask: "",
            tasks: [],
            errorStatus: "",
            lastEmail: "",
            hasSubmit: false
        };
    }
    /**
     * split the email around the @ symbol and put everything before it to lowercase
     *
     * @param email string of email
     */
    fixEmail(email: string) {
        let splitEmail = email.split("@");

        if (splitEmail.length !== 2) {
            return "ERROR";
        }
        console.log(splitEmail);
        let formatted = splitEmail[0];
        formatted = formatted.toLowerCase();
        console.log(formatted + "@" + splitEmail[1]);
        return formatted + "@" + splitEmail[1];
    }

    handleSubmit(e: any) {
        e.preventDefault();

        this.setState({
            currentTask: "",
            tasks: [this.state.currentTask]
        });

        // Prepare form data
        var email_signup_data = new FormData();
        const email = this.fixEmail(this.state.currentTask);
        if (email === "ERROR") {
            this.setState({
                errorStatus: "Invalid email address: " + this.state.currentTask,
                lastEmail: this.state.currentTask,
                hasSubmit: true
            });
        } else {
            email_signup_data.append("email", email);
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
                        lastEmail: res.data.email,
                        hasSubmit: true
                    });
                });
        }
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
                            {/* if there is an error message, print it, otherwise, it is a success */}
                            {this.state.errorStatus ||
                                "We have successfully added: " +
                                    this.state.lastEmail}
                        </p>
                    )}
                </div>

                <div className="past-websites-link">
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
