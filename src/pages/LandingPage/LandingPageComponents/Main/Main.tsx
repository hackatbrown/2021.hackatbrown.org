import React from "react";
import "./Main.css";
import mainPic from "../../../../assets/images/LandingPage/scene_garage_transparent.png";
import calendarPic from "../../../../assets/images/LandingPage/asset_calendar_transparent.png";
// import stickyNotePic from "../../../../assets/images/LandingPage/asset_sticky_note_transparent.png";
import { FirebaseContextConsumer } from "../../../../components/Firebase/context";
import LoginJoin from "../LoginJoin/LoginJoin";

type MainProps = {
    hideToolbar: any;
    apiURL: string;
};

type MainState = {
    state: string;
};

export default class Main extends React.Component<MainProps, MainState> {
    constructor(props: MainProps) {
        super(props);
        this.state = {
            state: "good"
        };
    }
    render() {
        return (
            <div className="main">
                <div className="main-div">
                    <h1 className="main-text">Hack@Brown 2020 presents:</h1>
                    <img id="main-img" src={mainPic}></img>
                </div>
                <div className="main-items">
                    {/* <div className="main-login">
                        <img id="stickynote-img" src={stickyNotePic}></img> */}
                    <FirebaseContextConsumer>
                        {firebase => (
                            <LoginJoin
                                apiURL={this.props.apiURL}
                                firebase={
                                    firebase == null ? null : firebase.firebase
                                }
                                hideToolbar={this.props.hideToolbar}
                            />
                        )}
                    </FirebaseContextConsumer>
                    {/* <p className="stickynote-login">Log in/Join</p>
                        <p className="stickynote-dashboard">Dashboard</p> */}
                    {/* </div> */}

                    <div className="main-cal">
                        <img id="calendar-img" src={calendarPic}></img>
                        <p className="main-date">
                            <p style={{ marginBottom: "1rem" }}>January</p>{" "}
                            <div className="dates">25-26</div>
                            <p className="registration-duedate">
                                Registration due January 12th
                            </p>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
