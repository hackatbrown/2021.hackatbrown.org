import React from "react";
import "./VirtualSpaceWindow.css";

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
                // TODO: Place different booth buttons using SponsorBooth component
            </div>
        );
    }
}
