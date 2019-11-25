import React from "react";
import "./Main.css";
import mainPic from "../../../../assets/images/LandingPage/scene_garage_transparent.png";
import calendarPic from "../../../../assets/images/LandingPage/asset_calendar_transparent.png";
import stickyNotePic from "../../../../assets/images/LandingPage/asset_sticky_note_transparent.png";

type MainProps = {};

type MainState = {
    state: string;
};

export default class Main extends React.Component<
    MainProps,
    MainState
> {
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
                <div className="main-date">
                    <img id="stickynote-img" src={stickyNotePic}></img>
                </div>

                <div className="main-login">
                    <img id="calendar-img" src={calendarPic}></img>
                </div>
                </div>
            </div>
        );
    }
}