import React from "react";
import "./InfoBoothModal.css";

type InfoBoothModalProps = {
    infoType : string,
    description: string,
    logo_asset: string
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
        const description = this.props.description;
        const asset = this.props.logo_asset;
        return (
            // TODO
            
            <div id ='modal'>
                <div className = "logo-container">
                    <img className="logo" src={asset} />
                </div>
                <div className = "content-container">
                <p>{description}</p>
                </div>
                
            </div>
        );
    }
}