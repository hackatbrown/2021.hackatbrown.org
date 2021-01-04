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
            <div>
            <div className="Announcements">
                <div className="top">
                    <img></img>
                    <h1>Announcements</h1>
                </div>
                <div className="bottom">
                    <p>Remember to submit your projects by 8AM! Use this devpost link!</p>
                </div>
            </div>
            <div className="Workshops">
                <div className="top">

                </div>
                <div className="bottom">
                  
                        <div className="dates">

                        </div>
                        <div className="times">

                        </div>
                        <div className="links"></div>
    
                </div>
            </div>
            <div className="Speaker Series">
                        <div className="dates">

                        </div>
                        <div className="times">

                        </div>
                        <div className="links"></div>
            </div>
            
            <div id ='modal'>
                <div className = "logo-container">
                    <img className="logo" src={asset} />
                </div>
                <div className = "content-container">
                <p>{description}</p>
                </div>
                
            </div>
            </div>
        );
    }
}