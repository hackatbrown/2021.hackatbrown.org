import React, { Component } from 'react';
import Modal from 'simple-react-modal'
import './LoginJoin.css'
import Firebase from '../../../../components/Firebase';
import * as EmailValidator from 'email-validator';
import stickyNotePic from "../../../../assets/images/LandingPage/asset_sticky_note_transparent.png";
import axios from 'axios';
import { Link } from 'react-router-dom';

type LoginJoinProps = {
  firebase : (Firebase | null)
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
};

export default class LoginJoin extends Component<
  LoginJoinProps,
  LoginJoinState
> {

  constructor(props: LoginJoinProps){
    super(props);
    this.state = {
      show: false,
      wantToLogIn: true,
      forgotPassword: false,

      user: null,
      email: '',
      password: '',
      passwordConfirm: '',

      emailError: '',
      passwordError: '',
      message: '',
    }
  }

  // Workaround of having nothing as else case if firebase is null
  doNothing = () => {}

  // Check if user is logged in when component mounts
  componentDidMount = () => {
      let currFirebase = this.props.firebase;
      if (currFirebase == null) { // if true, error

      } else {
          currFirebase.doAuthListener(this); // check if user is logged in or not
      }
  }

  show = () => {
    this.setState({show: true})
  }

  close = () => {
    this.setState({show: false})
  }

  handleEmailChange = (e: { target: { value: any; }; }) => {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange = (e: { target: { value: any; }; }) => {
    this.setState({ password: e.target.value });
  }

  handlePasswordConfirmChange = (e: { target: { value: any; }; }) => {
    this.setState({ passwordConfirm: e.target.value });
  }

  login = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    this.setState({
      passwordError: "" // clear passwordError since sucessful
    });

    let currFirebase = this.props.firebase;
    if (currFirebase == null) { // if true, error
      this.setState({
        message: "Sorry, something went wrong. Please try again later."
      });
    } else {
      currFirebase.doSignInWithEmailAndPassword(this.state.email, this.state.password).then(()=>{
        this.setState({
          show: false // close modal
        });
      }).catch((error) => {
          this.setState({
            passwordError: "Please check your email and password and try again. "
          });
        });
    }
  }

  join = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (EmailValidator.validate(this.state.email)) { // if true, proceed to check if passwords match
        this.setState({
          emailError: "" // clear emailError since sucessful
        });
        if (this.state.password == this.state.passwordConfirm) { // if true, proceed with registration
            this.setState({
              passwordError: "" // clear passwordError since sucessful
            });

            let currFirebase = this.props.firebase;
            if (currFirebase == null) { // if true, error
              this.setState({
                message: "Sorry, something went wrong. Please try again later."
              });
            } else {
              currFirebase.doCreateUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
                
              }).then((u)=>{
                // sucessfully signed up
                let curr = this;
                this.state.user.getIdToken(/* forceRefresh */ true).then((idToken: any) => {
                  // Send token to your backend via HTTPS
                  const hackerInfo = {
                    fire_id: idToken,
                    email: curr.state.email
                  }

                  axios.post('<api link to push form to database>', { hackerInfo })
                  .then(res => {
                    // depending on what is sent to backend
                  })
                  }).catch((error: any) => {
                    // Handle error
                  });

                  this.setState({
                    show: false // close modal
                  });
              })
              .catch((error) => {
                this.setState({
                  message: "Sorry, something went wrong. Please try again later."
                });
              })
            }
        } else { // else, display error
          this.setState({
              passwordError: "Passwords do not match!"
          });
        }
    } else { // else, display error
      this.setState({
        emailError: "Not a valid email!"
      });
    }
  }

  swapToForgotPassword = () => {
    this.setState({
      forgotPassword: true
    });
  }

  forgotPassword = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    let session = this;
    let currFirebase = this.props.firebase;
    if (currFirebase == null) { // if true, error
      this.setState({
        message: "Sorry, something went wrong. Please try again later."
      });
    } else {
      currFirebase.doPasswordReset(this.state.email);
    }
    session.setState({
      message: "If given email was found, you will receive your password reset email shortly."
    });
  }

  swapToLogIn = () => { // swap to login tab and clear any previous errors
    this.setState({
      wantToLogIn: true,
      forgotPassword: false,
      emailError: '',
      passwordError: '',
      message: ''
    });
  }

  swapToJoin = () => { // swap to join tab and clear any previous errors
    this.setState({
      wantToLogIn: false,
      forgotPassword: false,
      emailError: '',
      passwordError: '',
      message: ''
    });
  }
 
 
  render(){
    let content;
    if (this.state.forgotPassword) { // if true, user want to recover password
        content = 
            <form onSubmit={this.forgotPassword}>
                <div className="form-group">
                    <label>Email</label>
                    <input value={this.state.email} onChange={this.handleEmailChange} type="email" name="email" className="form-control" aria-describedby="emailHelp" />
                </div>
                <div className="message">
                  {this.state.message}
                </div>
                <div className="button-row">
                  <button onClick={this.swapToLogIn} className="cancel-button">Cancel</button>
                  <button type="submit" onClick={this.forgotPassword} id="submit-button">Submit</button>
                </div>
            </form>;
    } else if (this.state.wantToLogIn) { // if true, user wants to log in
        content = 
            <form onSubmit={this.login}>
                <div className="form-group">
                    <label>Email</label>
                    <input value={this.state.email} onChange={this.handleEmailChange} type="email" name="email" className="form-control" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input value={this.state.password} onChange={this.handlePasswordChange} type="password" name="password" className="form-control" id="exampleInputPassword1" />
                    <span className="error-message">{this.state.passwordError}</span>
                    <a onClick={this.swapToForgotPassword} id="forgot-pw">Forgot your password?</a>
                </div>
                <div className="message">
                  {this.state.message}
                </div>
                <div className="button-row">
                  <button onClick={this.close} className="cancel-button">Cancel</button>
                  <button type="submit" onClick={this.login} className="login-join-button">Log in</button>
                </div>
            </form>;
      } else { // else, user wants to join
        content =
            <form onSubmit={this.join}>
                <div className="form-group">
                    <label>Email</label>
                    <input value={this.state.email} onChange={this.handleEmailChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <span className="error-message">{this.state.emailError}</span>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input value={this.state.password} onChange={this.handlePasswordChange} type="password" name="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input value={this.state.passwordConfirm} onChange={this.handlePasswordConfirmChange} type="password" name="password-confirm" className="form-control" id="exampleInputPassword1" />
                    <span className="error-message">{this.state.passwordError}</span>
                </div>
                <div className="message">
                  {this.state.message}
                </div>
                <div className="button-row">
                  <button onClick={this.close} className="cancel-button">Cancel</button>
                  <button type="submit" onClick={this.join} className="login-join-button">Join</button>
                </div>
            </form>
      }

      let button; // display login/join or dashboard button
        if (this.state.user != null) { // if true, user is logged in
            // TODO: Go to dashboard
            button = <a href="/dashboard" className="stickynote-button transparent">Dashboard</a>
        } else { // else, user is not logged in
            button = <p onClick={this.show} className="stickynote-button">Log in/Join</p>
        }
      
    return (
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
        >
          <button onClick={this.swapToJoin} className="join-tab" id={this.state.wantToLogIn ? "other-tab" : "active-tab"}>Join</button>
          <button onClick={this.swapToLogIn} className="login-tab" id={this.state.wantToLogIn ? "active-tab" : "other-tab"}>Log in</button>
          <br></br>
          {content}
        </Modal>
      </div>
    )
  }
}