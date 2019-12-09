import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import Modal from "react-modal";
import "./LoginJoin.css";
import Firebase from "../../../../components/Firebase";
import * as EmailValidator from "email-validator";
import stickyNotePic from "../../../../assets/images/LandingPage/asset_sticky_note_transparent.png";
import axios from "axios";
import { Link } from "react-router-dom";

type LoginJoinProps = {
    firebase: Firebase | null;
    hideToolbar: any;
    apiURL: string;
};

type LoginJoinState = {
    modalIsOpen: boolean; // for modal
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

Modal.setAppElement("#root"); // ??????????

export default class LoginJoin extends Component<
    LoginJoinProps,
    LoginJoinState
> {
    constructor(props: LoginJoinProps) {
        super(props);
        this.state = {
            modalIsOpen: false,
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
        console.log("updating things rnnn");
        // this.setState({
        //     justLogged: false
        // });
        let currFirebase = this.props.firebase;
        if (currFirebase == null) {
            // if true, error
        } else {
            currFirebase.doAuthListener(this); // check if user is logged in or not
        }
    };

    // show = () => {
    //     this.setState({ modalIsOpen: true });
    //     this.props.hideToolbar(false);
    // };

    // close = () => {
    //     this.setState({ modalIsOpen: false });
    // };

    openModal = () => {
        this.setState({ modalIsOpen: true });
        this.props.hideToolbar(false);
    };

    // afterOpenModal() {
    //   // references are now sync'd and can be accessed.
    //   this.subtitle.style.color = 'rgb(0, 0, 0, 0.8)';
    // }

    closeModal = () => {
        this.setState({ modalIsOpen: false });
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
            // this.setState({
            //     justLogged: true
            // });
            currFirebase
                .doSignInWithEmailAndPassword(
                    this.state.email,
                    this.state.password
                )
                .then(() => {
                    this.setState({
                        modalIsOpen: false // close modal
                        // justLogged: true
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

                if (this.state.password.length >= 6) {
                    // if true, proceed with registration
                    let currFirebase = this.props.firebase;
                    if (currFirebase == null) {
                        // if true, error
                        this.setState({
                            message:
                                "Sorry, something went wrong. Please try again later."
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
                                    registrationForm.append(
                                        "fire_token",
                                        idToken
                                    );
                                    const config = {
                                        headers: {
                                            "Content-Type":
                                                "application/x-www-form-urlencoded"
                                        }
                                    };
                                    axios
                                        .post(
                                            temp.props.apiURL +
                                                "/hacker_account/create_hacker",
                                            registrationForm,
                                            config
                                        )
                                        .then(res => {
                                            // set the error status message in state
                                        });
                                });
                                temp.setState({
                                    modalIsOpen: false, // close modal
                                    justLogged: true
                                });
                                temp.props.hideToolbar(true);
                            })
                            .catch(error => {
                                this.setState({
                                    message: "Account already exists!"
                                });
                            });
                    }
                } else {
                    // else, display error
                    this.setState({
                        passwordError: "Password must be at least 6 characters!"
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
                "If the given email was found, you will receive your password reset email shortly! Check your spam!"
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
                    <div className="info-message">{this.state.message}</div>
                    <div className="button-row">
                        <button
                            type="submit"
                            onClick={this.forgotPassword}
                            id="submit-button"
                        >
                            Submit
                        </button>
                        <button
                            onClick={this.swapToLogIn}
                            className="cancel-button"
                        >
                            Cancel
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
                    <div className="error-message">{this.state.message}</div>
                    <div className="button-row">
                        <button
                            type="submit"
                            onClick={this.login}
                            className="login-join-button"
                        >
                            Log in
                        </button>
                        <button
                            onClick={this.closeModal}
                            className="cancel-button"
                        >
                            Cancel
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
                    <div className="error-message">{this.state.message}</div>
                    <div className="button-row">
                        <button
                            type="submit"
                            onClick={this.join}
                            className="login-join-button"
                        >
                            Join
                        </button>
                        <button
                            onClick={this.closeModal}
                            className="cancel-button"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            );
        }
        return content;
    };

    // renderRedirect = () => {
    //     if (this.state.justLogged) {
    //         return <Redirect to="/dashboard" />;
    //     }
    // }

    render() {
        let button; // display login/join or dashboard button

        if (this.state.user != null) {
            // if true, user is logged in
            button = (
                <a href="/dashboard" className="stickynote-button transparent">
                    Dashboard
                </a>
            );
        } else {
            // else, user is not logged in
            button = (
                <p onClick={this.openModal} className="stickynote-button">
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
                show={this.state.modalIsOpen}
                onClose={this.closeModal}
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
                {this.state.justLogged ? (
                    <Redirect to="/dashboard" />
                ) : (
                    this.doNothing
                )}
                <div className="main-login">
                    <img id="stickynote-img" src={stickyNotePic}></img>
                    {button}
                </div>
                <Modal
                    className="login-join-body"
                    overlayClassName="login-join-modal"
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
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
