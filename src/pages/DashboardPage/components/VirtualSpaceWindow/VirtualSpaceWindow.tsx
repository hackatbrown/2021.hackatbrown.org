import React from "react";
import "./VirtualSpaceWindow.css";
import SponsorBooth from "../SponsorBooth/SponsorBooth";
import AnnouncementImg from "../../../../assets/images/VirtualSpace/annoucements.png";
import bloombergImg from "../../../../assets/images/VirtualSpace/bloomberg.png";
import neevaImg from "../../../../assets/images/VirtualSpace/neeva.png";
import wolframImg from "../../../../assets/images/VirtualSpace/wolfram.png";
import sketchImg from "../../../../assets/images/VirtualSpace/sketch.png";
import InfoBooth from "../../../DashboardPage/components/InfoBooth/InfoBooth";

type VirtualSpaceWindowProps = {};

type VirtualSpaceWindowState = {
  state: string;
};

export default class VirtualSpaceWindow extends React.Component<
  VirtualSpaceWindowProps,
  VirtualSpaceWindowState
> {
  constructor(props: VirtualSpaceWindowProps) {
    super(props);
    this.state = {
      state: "good",
    };
  }
  render() {
    return (
      <div id="window">
        <div>
          {/* // TODO: Place different booth buttons using SponsorBooth component */}
          <button id="announcement-button">
            <img src={AnnouncementImg} id="announcement-image" />
          </button>

          {/* TODO: Figure out z-index issues */}
          <div id="bloomberg-button">
            <SponsorBooth sponsorName="bloomberg" sponsorImg={bloombergImg} />
          </div>
          <div id="neeva-button">
            <SponsorBooth sponsorName="neeva" sponsorImg={neevaImg} />
          </div>
          <div id="wolfram-button">
            <SponsorBooth sponsorName="wolfram" sponsorImg={wolframImg} />
          </div>
          <div id="sketch-button">
            <SponsorBooth sponsorName="sketch" sponsorImg={sketchImg} />
          </div>
          <div id="InfoModal">
                  <InfoBooth infoType="Announcements" />
          </div>
          <div id="InfoModal">
              <InfoBooth infoType="Workshops" />
          </div>
          <div id="InfoModal">
              <InfoBooth infoType="Speaker Series" />
          </div>
        </div>
      </div>
    );
  }
}
