import React from "react";
import "./VirtualSpaceWindow.css";
import SponsorBooth from "../SponsorBooth/SponsorBooth";
import InfoBooth from "../../../DashboardPage/InfoBooth/InfoBooth";

type VirtualSpaceWindowProps = {
};

type VirtualSpaceWindowState = {
    state: string;
};

export default class VirtualSpaceWindow extends React.Component<VirtualSpaceWindowProps, VirtualSpaceWindowState> {
    constructor(props: VirtualSpaceWindowProps) {
        super(props);
        this.state = {
            state: "good"
        };
    }
    render() {
        return (
            <div id="window">
              <div>
                  // TODO: Place different booth buttons using SponsorBooth component
              </div>
              <div id="SponsorModal">
                  <SponsorBooth sponsorName="bloomberg" />
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
        );
    }
}
