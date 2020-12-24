import React from "react";
import "./InfoBoothModal.css";

type InfoBoothModalProps = {
    infoType : string
};

type InfoBoothModalState = {
};

export default class InfoBoothModal extends React.Component<
    InfoBoothModalProps,
    InfoBoothModalState
> {
    constructor(props: InfoBoothModalProps) {
        super(props);
    }

    render() {
        return (
            // TODO
            <div></div>
        );
    }
}