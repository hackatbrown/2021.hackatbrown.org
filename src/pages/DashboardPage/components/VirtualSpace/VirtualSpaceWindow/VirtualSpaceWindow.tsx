import React from "react";
import "./VirtualSpaceWindow.css";
import SponsorBooth from "../SponsorBooth/SponsorBooth";
import InfoBooth from "../InfoBooth/InfoBooth";
import AnnouncementBooth from "../InfoBooth/AnnouncementBooth/AnnouncementBooth";

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
          <SponsorBooth sponsorName="bloomberg" />
        </div>
        <div id="neeva-button" className="booth">
          <SponsorBooth sponsorName="neeva" />
        </div>
        <div id="wolfram-button" className="booth">
          <SponsorBooth sponsorName="wolfram" />
        </div>
        <div id="sketch-button" className="booth">
          <SponsorBooth sponsorName="sketch" />
        </div>
        <div id="mouser-button" className="booth">
          <SponsorBooth sponsorName="mouser" />
        </div>
        <div id="blue-button" className="booth">
          <SponsorBooth sponsorName="blue" />
        </div>
        <div id="annoucement-button" className="booth">
          <AnnouncementBooth infoType="Announcements" />
        </div>
        <div id="workshops-button" className="booth">
          <InfoBooth infoType="Workshops" />
        </div>
        <div id="speaker-button" className="booth">
          <InfoBooth infoType="Speaker Panel" />
        </div>
      </div>
    );
  }
}
