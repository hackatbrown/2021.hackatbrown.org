import React from "react";
import "./Main.css";
import { FirebaseContextConsumer } from "../../../../components/Firebase/context";
import LoginJoin from "../LoginJoin/LoginJoin";
import mainImg from "../../../../assets/images/LandingPage/soccer_field.png";
import mainMobileImg from "../../../../assets/images/LandingPage/soccer_field_mobile.png";
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
                    <h1 style={{ color: '#444' }} className="top-text">Hack@Brown 2021 presents:</h1>
                    <h1 style={{ color: '#444' }} className="big-text">AfterSchool</h1>
                    <h1 style={{ color: '#444' }} className="bottom-text">January 22 - 24, 2021</h1>
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
                    <img src={mainImg} className="main-img"></img>
                    <img src={airplane} className="plane-one"></img><br/>
                    <img src={airplane2} className="plane-two"></img><br/>
                    <img src={airplane3} className="plane-three"></img><br/>
                    <img src={airplane} className="plane-one-st"></img><br/><br/>
                    <img src={airplane2} className="plane-two-st"></img><br/>
                    <img src={airplane3} className="plane-three-st"></img>
                </div>
                <div className = "static-scene">
                    <img src={mainMobileImg}></img>
                </div>
            </div></>
        );
    }
}
