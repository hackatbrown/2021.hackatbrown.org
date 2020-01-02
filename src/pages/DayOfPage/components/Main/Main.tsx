import React from "react";
import "./Main.css";
import title from "../../../../assets/images/DayOf/scene_day_of_no_background.png"

type MainProps = {
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
                <div id="title">
                    <div id="title-text">
                        <h2>Hack@Brown presents:</h2>
                        <h1>Garage 2020</h1>
                    </div>
                    <img id="title-img" src={title}/>
                </div>
            </div>
        );
    }
}
