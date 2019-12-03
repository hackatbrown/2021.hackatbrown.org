import React from "react";
import "./Main.css";
// import mainPic from "../../../../assets/images/LandingPage/placeholder.png";

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
                    {/* <img id="main-img" src={mainPic}></img> */}
                </div>
            </div>
        );
    }
}