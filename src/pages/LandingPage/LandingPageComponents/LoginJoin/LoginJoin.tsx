import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Modal from "simple-react-modal";
import "./LoginJoin.css";
import Firebase from "../../../../components/Firebase";
import * as EmailValidator from "email-validator";
import stickyNotePic from "../../../../assets/images/LandingPage/asset_sticky_note_transparent.png";
import axios from "axios";
import { Link } from "react-router-dom";

type LoginJoinProps = {
    firebase: Firebase | null;
    hideToolbar: any;
};

type LoginJoinState = {
    show: boolean; // for modal
    wantToLogIn: boolean; // if true, show login tab; else, show join tab
    forgotPassword: boolean; // if true, show forgot password tab

    user: any;
    email: string;
    password: string;
    passwordConfirm: string;

    emailError: string; // error message to display, if no error then set to ''
    passwordError: string;
    message: string;

    justLogged: boolean;
};

export default class LoginJoin extends Component<
    LoginJoinProps,
    LoginJoinState
> {
    constructor(props: LoginJoinProps) {
        super(props);
        this.state = {
            show: false,
            wantToLogIn: true,
            forgotPassword: false,

            user: null,
            email: "",
            password: "",
            passwordConfirm: "",

            emailError: "",
            passwordError: "",
            message: "",

            justLogged: false
        };
    }

    // Workaround of having nothing as else case if firebase is null
    doNothing = () => {};

    // Check if user is logged in when component mounts
    componentDidMount = () => {
        let currFirebase = this.props.firebase;
        if (currFirebase == null) {
            // if true, error
        } else {
            currFirebase.doAuthListener(this); // check if user is logged in or not
        }
    };

    show = () => {
        this.setState({ show: true });
        this.props.hideToolbar(false);
    };

    close = () => {
        this.setState({ show: false });
    };

    handleEmailChange = (e: { target: { value: any } }) => {
        this.setState({ email: e.target.value });
    };

    handlePasswordChange = (e: { target: { value: any } }) => {
        this.setState({ password: e.target.value });
    };

    handlePasswordConfirmChange = (e: { target: { value: any } }) => {
        this.setState({ passwordConfirm: e.target.value });
    };

    login = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        this.setState({
            passwordError: "" // clear passwordError since sucessful
        });

        let currFirebase = this.props.firebase;
        if (currFirebase == null) {
            // if true, error
            this.setState({
                message: "Sorry, something went wrong. Please try again later."
            });
        } else {
            currFirebase
                .doSignInWithEmailAndPassword(
                    this.state.email,
                    this.state.password
                )
                .then(() => {
                    this.setState({
                        show: false, // close modal
                        justLogged: true
                    });
                    this.props.hideToolbar(true);
                })
                .catch(error => {
                    this.setState({
                        passwordError:
                            "Please check your email and password and try again. "
                    });
                });
        }
    };

    join = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        if (EmailValidator.validate(this.state.email)) {
            // if true, proceed to check if passwords match
            this.setState({
                emailError: "" // clear emailError since sucessful
            });
            if (this.state.password == this.state.passwordConfirm) {
                // if true, proceed with registration
                this.setState({
                    passwordError: "" // clear passwordError since sucessful
                });

                let currFirebase = this.props.firebase;
                if (currFirebase == null) {
                    // if true, error
                    this.setState({
                        message:
                            "A Sorry, something went wrong. Please try again later."
                    });
                } else {
                    let userEmail = this.state.email;
                    let temp = this;
                    currFirebase
                        .doCreateUserWithEmailAndPassword(
                            this.state.email,
                            this.state.password
                        )
                        .then(function(u) {
                            u.user.getIdToken(true).then(function(idToken) {
                                // Send request to hacker creation route, fields 'fire_token' and 'email'
                                var registrationForm = new FormData();
                                registrationForm.append("email", userEmail);
                                registrationForm.append("fire_token", idToken);
                                const config = {
                                    headers: {
                                        "Content-Type":
                                            "application/x-www-form-urlencoded"
                                    }
                                };
                                axios
                                    .post(
                                        "https://api2020-staging.herokuapp.com/hacker_account/create_hacker",
                                        registrationForm,
                                        config
                                    )
                                    .then(res => {
                                        // set the error status message in state
                                        console.log(res);
                                    });
                                console.log(idToken);
                            });
                            temp.setState({
                                show: false, // close modal
                                justLogged: true
                            });
                            temp.props.hideToolbar(true);
                        })
                        .catch(error => {
                            console.log(error);
                            this.setState({
                                message:
                                    " B Sorry, something went wrong. Please try again later."
                            });
                        });
                }
            } else {
                // else, display error
                this.setState({
                    passwordError: "Passwords do not match!"
                });
            }
        } else {
            // else, display error
            this.setState({
                emailError: "Not a valid email!"
            });
        }
    };

    swapToForgotPassword = () => {
        this.setState({
            forgotPassword: true
        });
    };

    forgotPassword = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        let session = this;
        let currFirebase = this.props.firebase;
        if (currFirebase == null) {
            // if true, error
            this.setState({
                message: "Sorry, something went wrong. Please try again later."
            });
        } else {
            currFirebase.doPasswordReset(this.state.email);
        }
        session.setState({
            message:
                "If given email was found, you will receive your password reset email shortly."
        });
    };

    swapToLogIn = () => {
        // swap to login tab and clear any previous errors
        this.setState({
            wantToLogIn: true,
            forgotPassword: false,
            emailError: "",
            passwordError: "",
            message: ""
        });
    };

    swapToJoin = () => {
        // swap to join tab and clear any previous errors
        this.setState({
            wantToLogIn: false,
            forgotPassword: false,
            emailError: "",
            passwordError: "",
            message: ""
        });
    };

    modalContent = () => {
        let content;
        if (this.state.forgotPassword) {
            // if true, user want to recover password
            content = (
                <form className="loginJoin-form" onSubmit={this.forgotPassword}>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                            type="email"
                            name="email"
                            className="form-control"
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <div className="message">{this.state.message}</div>
                    <div className="button-row">
                        <button
                            onClick={this.swapToLogIn}
                            className="cancel-button"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            onClick={this.forgotPassword}
                            id="submit-button"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            );
        } else if (this.state.wantToLogIn) {
            // if true, user wants to log in
            content = (
                <form className="loginJoin-form" onSubmit={this.login}>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                            type="email"
                            name="email"
                            className="form-control"
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            value={this.state.password}
                            onChange={this.handlePasswordChange}
                            type="password"
                            name="password"
                            className="form-control"
                            id="exampleInputPassword1"
                        />
                        <span className="error-message">
                            {this.state.passwordError}
                        </span>
                        <a onClick={this.swapToForgotPassword} id="forgot-pw">
                            Forgot your password?
                        </a>
                    </div>
                    <div className="message">{this.state.message}</div>
                    <div className="button-row">
                        <button onClick={this.close} className="cancel-button">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            onClick={this.login}
                            className="login-join-button"
                        >
                            Log in
                        </button>
                    </div>
                </form>
            );
        } else {
            // else, user wants to join
            content = (
                <form className="loginJoin-form" onSubmit={this.join}>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                            type="email"
                            name="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                        <span className="error-message">
                            {this.state.emailError}
                        </span>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            value={this.state.password}
                            onChange={this.handlePasswordChange}
                            type="password"
                            name="password"
                            className="form-control"
                            id="exampleInputPassword1"
                        />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                            value={this.state.passwordConfirm}
                            onChange={this.handlePasswordConfirmChange}
                            type="password"
                            name="password-confirm"
                            className="form-control"
                            id="exampleInputPassword1"
                        />
                        <span className="error-message">
                            {this.state.passwordError}
                        </span>
                    </div>
                    <div className="message">{this.state.message}</div>
                    <div className="button-row">
                        <button onClick={this.close} className="cancel-button">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            onClick={this.join}
                            className="login-join-button"
                        >
                            Join
                        </button>
                    </div>
                </form>
            );
        }
        return content;
    };

    render() {
        let button; // display login/join or dashboard button

        if (this.state.justLogged) {
            return <Redirect to="/dashboard" />;
        }

        if (this.state.user != null) {
            // if true, user is logged in
            // TODO: Go to dashboard
            button = (
                <a href="/dashboard" className="stickynote-button transparent">
                    Dashboard
                </a>
            );
        } else {
            // else, user is not logged in
            button = (
                <p onClick={this.show} className="stickynote-button">
                    Log in/Join
                </p>
            );
        }

        let content = this.modalContent();
        let modal = (
            <Modal
                className="login-join-modal"
                containerClassName="login-join-body"
                closeOnOuterClick={false}
                show={this.state.show}
                onClose={this.close}
            >
                <button
                    onClick={this.swapToJoin}
                    className="join-tab"
                    id={this.state.wantToLogIn ? "other-tab" : "active-tab"}
                >
                    Join
                </button>
                <button
                    onClick={this.swapToLogIn}
                    className="login-tab"
                    id={this.state.wantToLogIn ? "active-tab" : "other-tab"}
                >
                    Log in
                </button>
                <br></br>
                {content}
            </Modal>
        );

        return (
            <div>
                <div className="main-login">
                    <img id="stickynote-img" src={stickyNotePic}></img>
                    {button}
                </div>
                <Modal
                    className="login-join-modal"
                    containerClassName="login-join-body"
                    closeOnOuterClick={false}
                    show={this.state.show}
                    onClose={this.close}
                    containerStyle={{ overflowY: "hidden" }}
                >
                    <button
                        onClick={this.swapToJoin}
                        className="join-tab"
                        id={this.state.wantToLogIn ? "other-tab" : "active-tab"}
                    >
                        Join
                    </button>
                    <button
                        onClick={this.swapToLogIn}
                        className="login-tab"
                        id={this.state.wantToLogIn ? "active-tab" : "other-tab"}
                    >
                        Log in
                    </button>
                    <br></br>
                    {content}
                </Modal>
            </div>
        );
    }
}
