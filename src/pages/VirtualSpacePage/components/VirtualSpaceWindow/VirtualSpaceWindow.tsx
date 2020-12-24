import React from "react";
import "./VirtualSpaceWindow.css";
import SponsorBooth from "../SponsorBooth/SponsorBooth";


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
              <div id="SponsorTests">
                  <SponsorBooth sponsorName={'dumbo'} />
              </div>
            </div>
        );
    }
}
