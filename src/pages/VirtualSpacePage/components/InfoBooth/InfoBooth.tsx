import React from "react";
import "./InfoBooth.css";

type InfoBoothProps = {
    infoType : string
};

type InfoBoothState = {
};

export default class InfoBooth extends React.Component<
    InfoBoothProps,
    InfoBoothState
> {
    constructor(props: InfoBoothProps) {
        super(props);
    }

    render() {
        return (
            // TODO
            <div></div>
        );
    }
}