import React from "react";
import "./InfoBoothModal.css";

type InfoBoothModalProps = {
    infoType : string,
    logo_asset: string,
    head_color: string,
    htext_color: string,
    announcement?: string
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
        const infoType = this.props.infoType;
        const asset = this.props.logo_asset;
        const type = this.props.infoType;
        const color = this.props.head_color;
        const textcolor = this.props.htext_color;

        const topSection = 
            <div className="top" style={{backgroundColor: color}}>
                <img src={asset} id="asset-image"></img>
                <h1 style={{color:textcolor}}>{type}</h1>
            </div>

        let bottomSection;
        if (infoType === "Announcements") {
            bottomSection = 
                <div className="announcements bottom">
                    {/* <p>Remember to submit your projects by 8AM! Use this devpost link!</p> */}
                    <p>{this.props.announcement}</p>   
                </div>
        } else if (infoType === "Workshops") {
            bottomSection = 
                <div className="bottom workshops">
                    <div className="grid">
                        <div className="dates">
                            <p><strong>Jan 22</strong></p>
                        </div>
                        <div className="times">
                            <p>11:30 - 12:30</p>
                        </div>
                        <div className="links">
                            <a href="https://us02web.zoom.us/j/86545850944?pwd=V0pvMU5jcTV4L0lEUGkrZFlGaEx5QT09">Intro to HTML/CSS</a>
                        </div>
                        <div className="dates">
                            <p><strong> </strong></p>
                        </div>
                        <div className="times">
                            <p>13:00 - 14:00</p>
                        </div>
                        <div className="links">
                            <a href="https://us02web.zoom.us/j/83295677717?pwd=U1V4cmZRTnFKWW5JaVNPMUFBeXdEdz09">Workshop: Google Cloud</a>
                        </div>
                        <div className="times">
                            <p>17:30 - 18:30</p>
                        </div>
                        <div className="dates">
                            <p><strong> </strong></p>
                        </div>
                        <div className="links">
                            <a href="https://us02web.zoom.us/j/83187295277?pwd=Mk9nYnZTdDBvRkoxMElwZXJZM2J1dz09">Workshop: (MLH) Cybersecurity Cloud</a>
                        </div>
                        <div className="times">
                            <p>18:00 - 19:00</p>
                        </div>
                        <div className="dates">
                            <p><strong> </strong></p>
                        </div>
                        <div className="links">
                            <a href="https://us02web.zoom.us/j/86347112241?pwd=K2ZNdmlxR2JDZ1RqbHhMb1hDL1laZz09">Workshop: Intro to Deep Learning</a>
                        </div>
                        <div className="times">
                            <p>20:00 - 21:00</p>
                        </div>
                        <div className="dates">
                            <p><strong> </strong></p>
                        </div>
                        <div className="links">
                            <a href="https://us02web.zoom.us/j/86301279007?pwd=THZwY0sxeUE3S3FmTE92V2lVbTFHQT09">Design Workshop: Introduction to Figma</a>
                        </div>
                        <div className="dates">
                            <p><strong>Jan 23</strong></p>
                        </div>
                        <div className="times">
                            <p>9:30 - 10:30</p>
                        </div>
                        <div className="links">
                            <a href="https://us02web.zoom.us/j/84252904233?pwd=OERDVDJwdXNMK1JXcmF3dHRUeVlSQT09">Workshop: Ethics in CS and Socially Responsible Computing</a>
                        </div>
                    </div>
                </div>
        } else if (infoType === "Speaker Panel") {
            bottomSection = 
                <div className="bottom speaker-panel">
                    <div className="grids">
                        <div className="dates">
                            <p><strong>Jan 22</strong></p>
                        </div>
                        <div className="times">
                            <p>12:30 - 13:30</p>
                        </div>
                        <div className="links">
                            <a href="https://us02web.zoom.us/j/89725906434?pwd=c1hNbnVtUnVYSk8wa0RxdkExWGF1dz09"><strong>Talk: Professor Edgar</strong></a>
                        </div>
                        <div className="dates">
                            <p><strong> </strong></p>
                        </div>
                        <div className="times">
                            <p>14:00 - 15:00</p>
                        </div>
                        <div className="links">
                            <a href="https://us02web.zoom.us/j/83381000344?pwd=UXV3TktTbEpqdXpUZURVSXoxeE9BQT09"><strong>Talk: Professor Litman</strong> The Four Ways We Tell Machines What We Want, and How We Can Do Better</a>
                        </div>
                        <div className="dates">
                            <p><strong> </strong></p>
                        </div>
                        <div className="times">
                            <p>15:00 - 16:00</p>
                        </div>
                        <div className="links">
                            <a href="https://us02web.zoom.us/j/84344188222?pwd=aTBwc0x2dDdOMXZwNVU1Mi91eUU3UT09"><strong>Panel: Diversity and Inclusion</strong></a>
                        </div>
                        <div className="dates">
                            <p><strong> </strong></p>
                        </div>
                        <div className="times">
                            <p>16:00 - 7:00</p>
                        </div>
                        <div className="links">
                            <a href="https://us02web.zoom.us/j/83877631019?pwd=N3RTbHpmSHNVaXVHdVRPMTQ4cW0xUT09"><strong>Panel: Startups and Entrepeneurship</strong></a>
                        </div>
                        <div className="dates">
                            <p><strong>Jan 23</strong></p>
                        </div>
                        <div className="times">
                            <p>10:00 - 11:30</p>
                        </div>
                        <div className="links">
                            <a href="https://us02web.zoom.us/j/84719148529?pwd=aEJDWVJ1ZGhLQzl3aS9Ock1vTldvdz09"><strong>Talk: Professor Srinath Sridhar</strong></a>
                        </div>
                    </div>
                </div>
        }

        return (
            // TODO
            <>
                {topSection}
                {bottomSection}
            </>
        );
    }
}