import React from "react";
import "./Main.css";
import { FirebaseContextConsumer } from "../../../../components/Firebase/context";
import LoginJoin from "../LoginJoin/LoginJoin";
import mainImg from "../../../../assets/images/LandingPage/soccer_field.png";
import mainMobileImg from "../../../../assets/images/LandingPage/soccer_field_mobile.png";
import bganim from './web_animation.mp4';
import airplane from "../../../../assets/images/LandingPage/airplane.png";
import airplane2 from "../../../../assets/images/LandingPage/airplane2.png";
import airplane3 from "../../../../assets/images/LandingPage/airplane3.png";

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
            <><div className="main">
                <div className="main-div">
                    <h1 style={{ color: '#444' }} className="top-text">Hack@Brown presents:</h1>
                    <h1 style={{ color: '#444' }} className="big-text">After School</h1>
                    <h1 style={{ color: '#444' }} className="bottom-text">January 23 - 24, 2021</h1>
                </div>
                <FirebaseContextConsumer>
                    {firebase => (
                        <LoginJoin
                            apiURL={this.props.apiURL}
                            firebase={firebase == null ? null : firebase.firebase}
                            hideToolbar={this.props.hideToolbar} />
                    )}
                </FirebaseContextConsumer>
                <div className = "animated-scene">
                    <video className='videoTag' autoPlay loop muted>
                        <source src={ bganim } type='video/mp4' />
                    </video>
                </div>
                <div className = "static-scene">
                    <img src={mainMobileImg}></img>
                </div>
            </div></>
        );
    }
}
