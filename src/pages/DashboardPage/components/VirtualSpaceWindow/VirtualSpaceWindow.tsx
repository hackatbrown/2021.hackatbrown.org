import React from "react";
import "./VirtualSpaceWindow.css";
import SponsorBooth from "../SponsorBooth/SponsorBooth";
import announcementImg from "../../../../assets/images/VirtualSpace/annoucements.png";
import speakerImg from "../../../../assets/images/VirtualSpace/speakers.png";
import workshopsImg from "../../../../assets/images/VirtualSpace/workshops.png";
import bloombergImg from "../../../../assets/images/VirtualSpace/bloomberg.png";
import neevaImg from "../../../../assets/images/VirtualSpace/neeva.png";
import wolframImg from "../../../../assets/images/VirtualSpace/wolfram.png";
import sketchImg from "../../../../assets/images/VirtualSpace/sketch.png";
import InfoBooth from "../InfoBooth/InfoBooth";

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
          {/* // TODO: Place different booth buttons using SponsorBooth component */}

          {/* TODO: Figure out z-index issues */}
          <div id="bloomberg-button" className="booth">
            <SponsorBooth sponsorName="bloomberg" sponsorImg={bloombergImg} />
          </div>
          <div id="neeva-button" className="booth">
            <SponsorBooth sponsorName="neeva" sponsorImg={neevaImg} />
          </div>
          <div id="wolfram-button" className="booth">
            <SponsorBooth sponsorName="wolfram" sponsorImg={wolframImg} />
          </div>
          <div id="sketch-button" className="booth">
            <SponsorBooth sponsorName="sketch" sponsorImg={sketchImg} />
          </div>
          <div id="annoucement-button" className="booth">
            <InfoBooth infoType="Announcements" infoImg={announcementImg} />
          </div>
          <div id="workshops-button" className="booth">
            <InfoBooth infoType="Workshops" infoImg={workshopsImg} />
          </div>
          <div id="speaker-button" className="booth">
            <InfoBooth infoType="Speaker Series" infoImg={speakerImg} />
          </div>
      </div>
    );
  }
}
