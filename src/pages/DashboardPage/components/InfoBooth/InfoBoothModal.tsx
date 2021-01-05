import React from "react";
import "./InfoBoothModal.css";

type InfoBoothModalProps = {
    infoType : string,
    description: string,
    logo_asset: string,
    head_color:string,
    htext_color: string,
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
        const type = this.props.infoType;
        const color = this.props.head_color;
        const textcolor = this.props.htext_color;
        return (
            // TODO
            <div>
            <div className="Announcements">
                <div className="top" style={{backgroundColor: color}}>
                    <img src={asset} id="asset-image"></img>
                    <h1 style={{color:textcolor}}>{type}</h1>
                </div>
                <div className="bottom">
                    <p>Remember to submit your projects by 8AM! Use this devpost link!</p>
                </div>
            </div>
            <div className="Workshops">
                <div className="top">

                </div>
                <div className="bottom">
                        <div className="grid">
                            <div className="dates">
                                <p><strong>Jan 22</strong></p>
                            </div>
                            <div className="times">
                                <p>9:00 - 10:00</p>
                            </div>
                            <div className="links">
                                <p>Introduction to Python</p>
                            </div>
                            <div className="dates">
                                <p><strong> </strong></p>
                            </div>
                            <div className="times">
                                <p>12:00 - 13:00</p>
                            </div>
                            <div className="links">
                                <p>Introduction to HTML/CSS</p>
                            </div>
                            <div className="dates">
                                <p><strong>Jan 23</strong></p>
                            </div>
                            <div className="times">
                                <p>12:00 - 13:00</p>
                            </div>
                            <div className="links">
                                <p>Build a Chrome extension</p>
                            </div>
                            <div className="dates">
                                <p><strong> </strong></p>
                            </div>
                            <div className="times">
                                <p>12:00 - 13:00</p>
                            </div>
                            <div className="links">
                                <p>Introduction to React</p>
                            </div>
                            <div className="dates">
                                <p><strong> </strong></p>
                            </div>
                            <div className="times">
                                <p>12:00 - 13:00</p>
                            </div>
                            <div className="links">
                                <p>Introduction to Python</p>
                            </div>
                        </div>
                            
                            
                        </div>
            </div>
            <div className="SpeakerSeries">
                    <div className="bottom">
                        <div className="grids">
                            <div className="dates">
                                <p><strong>Jan 22</strong></p>
                            </div>
                            <div className="times">
                                <p>9:00 - 10:00</p>
                            </div>
                            <div className="links">
                                <p><strong>John Smith, CEO of XXX</strong> Tech Social Change in the Time of Covid-19</p>
                            </div>
                            <div className="dates">
                                <p><strong>Jan 23</strong></p>
                            </div>
                            <div className="times">
                                <p>12:00 - 13:00</p>
                            </div>
                            <div className="links">
                                <p><strong>Jane Doe, Ex-Software Engineer at Facebook</strong> How to Start at Startup</p>
                            </div>
                            <div className="dates">
                                <p><strong> </strong></p>
                            </div>
                            <div className="times">
                                <p>12:00 - 13:00</p>
                            </div>
                            <div className="links">
                                <p><strong>Bob Henry, Brown Alum '01</strong> Changes in Tech since the 2000s</p>
                            </div>
                        </div>
                    </div>
            </div>
            
            <div id ='modal'>
                <div className = "logo-container">
                    
                </div>
                <div className = "content-container">
                <p>{description}</p>
                </div>
                
            </div>
            </div>
        );
    }
}