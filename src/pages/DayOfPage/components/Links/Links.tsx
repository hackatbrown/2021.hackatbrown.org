import React from "react";
import Register from "../../../../assets/images/DayOf/register.png";
import Mentor from "../../../../assets/images/DayOf/request.png";
import Submit from "../../../../assets/images/DayOf/submission.png";
import Starter from "../../../../assets/images/DayOf/link.png";
import "./Links.css";

type LinksProps = {};

type LinksState = {
    state: string;
};

export default class Links extends React.Component<
    LinksProps,
    LinksState
> {
    constructor(props: LinksProps) {
        super(props);
        this.state = {
            state: "good"
        };
    }
    render() {
        return (
            <div id="links">
            <div className="items">
              <div className="item" id="registerTeam">
                <a className="item-link" href="https://forms.gle/CNZEuuUvg3wKvZg88" target="_blank">
                <img className="item-img" src={Register}></img>
                <p className="links-subheading">Register your team</p>
                </a>
              </div>

              <div className="item" id="requestMentor">
                <a className="item-link" href="http://helpq.hackatbrown.org/" target="_blank">
                <img className="item-img" src={Mentor}></img>
                <p className="links-subheading">Request a mentor</p>
                </a>
              </div>

              <div className="item" id="submitProject">
                <a className="item-link" href="https://hackatbrown2020.devpost.com/" target="_blank">
                <img className="item-img" src={Submit}></img>
                <p className="links-subheading">Project submission</p>
                </a>
              </div>

              <div className="item" id="starterProjects">
                <a className="item-link" href="" target="_blank">
                <img className="item-img" src={Starter}></img>
                <p className="links-subheading">Links to starter projects</p>
                </a>
              </div>
            </div>
          </div>
            );
        }
    }
