import React from "react";
import "./Main.css";
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
                    <h1 style={{ color: '#444' }} className="top-text">Hack@Brown 2021 presents:</h1>
                    <h1 style={{ color: '#444' }} className="big-text">AfterSchool</h1>
                    <h1 style={{ color: '#444' }} className="bottom-text">Jan 22-24</h1>
                </div>
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
                    </FirebaseContextConsumer></div>
        );
    }
}
