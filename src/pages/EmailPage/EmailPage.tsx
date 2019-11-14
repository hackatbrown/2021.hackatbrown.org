import React from "react";
//import logo from './logo.svg';
import "./EmailPage.css";
import error_img from "../../assets/images/EmailPage/error_img.png";

interface IState {
    currentTask: string;
    tasks: Array<string>;
}

export default class EmailPage extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            currentTask: "",
            tasks: []
        };
    }

    handleSubmit(e: any) {
        e.preventDefault();
        this.setState({
            currentTask: "",
            tasks: [...this.state.tasks, this.state.currentTask]
        });
    }

    render() {
        console.log(this.state);
        return (
            <div className="email-page">
                <img id="404-img" src={error_img}></img>
                <h1 style={{ color: "white" }}>Well, this is awkward...</h1>
                <p style={{ color: "#A6D3D0" }}>
                    {" "}
                    Our site is cuirrently under construction to prepare for
                    Hack@Brown 2020! <br />
                    Sign up to recieve email alerts below and we'll let you know
                    when we're back.
                </p>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input
                        className="input-box"
                        type="text"
                        placeholder="Enter your email here to get updated!"
                        value={this.state.currentTask}
                        onChange={e =>
                            this.setState({ currentTask: e.target.value })
                        }
                    />

                    <button className="input-button" type="submit">
                        Submit
                    </button>
                </form>
                <div style={{ color: "white" }}>
                    <a
                        style={{ color: "white" }}
                        href={"https://2019.hackatbrown.org/"}
                    >
                        Hack@Brown 2019
                    </a>{" "}
                    |{" "}
                    <a
                        style={{ color: "white" }}
                        href={"https://2018.hackatbrown.org/"}
                    >
                        Hack@Brown 2018
                    </a>{" "}
                    |{" "}
                    <a
                        style={{ color: "white" }}
                        href={"https://2017.hackatbrown.org/"}
                    >
                        Hack@Brown 2017
                    </a>{" "}
                    |{" "}
                    <a
                        style={{ color: "white" }}
                        href={"https://2016.hackatbrown.org/"}
                    >
                        Hack@Brown 2016
                    </a>
                </div>
            </div>
        );
    }
}
