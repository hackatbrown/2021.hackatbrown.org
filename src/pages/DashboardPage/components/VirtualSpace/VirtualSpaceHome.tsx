import React from "react";
import "./VirtualSpaceHome.css";
import VirtualSpaceWindow from "./VirtualSpaceWindow/VirtualSpaceWindow";
import liveIcon from "../../../../assets/images/VirtualSpace/icon/live.png";
import discordIcon from "../../../../assets/images/VirtualSpace/icon/discord.png";
import devpostIcon from "../../../../assets/images/VirtualSpace/icon/devpost.png";

type VirtualSpaceHomeProps = {};

type VirtualSpaceHomeState = {
  state: string;
};

export default class VirtualSpaceHome extends React.Component<
  VirtualSpaceHomeProps,
  VirtualSpaceHomeState
> {
  constructor(props: VirtualSpaceHomeProps) {
    super(props);
    this.state = {
      state: "good",
    };
  }

  render() {
    const blurb = 
    <div className="town-blurb">
        <h1>H@B Town: All-In-One Info Panel</h1>
        <br/>
        <p><b>Coffee chats:</b> hover on a company to book on their GCal!</p>
        <p><b>Annoucements:</b> general notifications</p>
        <p><b>Workshops</b> and <b>Speaker Panel:</b> links to all our events!</p>
    </div>

    const buttons = 
    <div className="town-buttons">
      <a href={""} className="live-button" target="_blank">
        <img className="button-icon" src={liveIcon} alt="Icon"/>
        <b>Live Stream</b>
      </a>
      <a href={"https://discord.gg/s8u4PRGAJ3"} className="discord-button" target="_blank">
        <img className="button-icon" src={discordIcon} alt="Icon"/>
        <b>Discord</b>
      </a>
      <a href={""} className="devpost-button" target="_blank">
        <img className="button-icon" src={devpostIcon} alt="Icon"/>
        <b>Devpost</b>
      </a>
    </div>

    return (
      <>
        <div className="brown-town-intro">
          {blurb}
          {buttons}
        </div>
        <div className="brown-town">
          <VirtualSpaceWindow />
        </div>
      </>
    );
  }
}
