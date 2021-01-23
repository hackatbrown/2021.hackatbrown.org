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
                    <div className="table">
                        <table>
                        <tr>
                            <td className="dates grid-item">
                                <p><strong>Jan 22</strong></p>
                            </td>
                            <td className="times grid-item">
                                <p>12:30 - 13:30</p>
                            </td>
                            <td className="links grid-item">
                                <a href="https://us02web.zoom.us/j/86545850944?pwd=V0pvMU5jcTV4L0lEUGkrZFlGaEx5QT09">Workshop: Intro to HTML/CSS</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="dates grid-item">
                                <p><strong> </strong></p>
                            </td>
                            <td className="times grid-item">
                                <p>14:00 - 15:00</p>
                            </td>
                            <td className="links grid-item">
                                <a href="https://us02web.zoom.us/j/83295677717?pwd=U1V4cmZRTnFKWW5JaVNPMUFBeXdEdz09">Workshop: Google Cloud</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="dates grid-item">
                                <p><strong> </strong></p>
                            </td>
                            <td className="times grid-item">
                                <p>18:30 - 19:00</p>
                            </td>
                            <td className="links grid-item">
                                <a href="https://us02web.zoom.us/j/83187295277?pwd=Mk9nYnZTdDBvRkoxMElwZXJZM2J1dz09">Workshop: Cybersecurity (MLH)</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="dates grid-item">
                                <p><strong> </strong></p>
                            </td>
                            <td className="times grid-item">
                                <p>19:00 - 20:00</p>
                            </td>
                            <td className="links grid-item">
                                <a href="https://us02web.zoom.us/j/86347112241?pwd=K2ZNdmlxR2JDZ1RqbHhMb1hDL1laZz09">Workshop: Intro to Deep Learning</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="dates grid-item">
                                <p><strong> </strong></p>
                            </td>
                            <td className="times grid-item">
                                <p>21:00 - 22:00</p>
                            </td>
                            <td className="links grid-item">
                                <a href="https://us02web.zoom.us/j/86301279007?pwd=THZwY0sxeUE3S3FmTE92V2lVbTFHQT09">Design Workshop: Introduction to Figma</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="dates grid-item">
                                <p><strong>Jan 23</strong></p>
                            </td>
                            <td className="times grid-item">
                                <p>10:30 - 11:30</p>
                            </td>
                            <td className="links grid-item">
                                <a href="https://us02web.zoom.us/j/84252904233?pwd=OERDVDJwdXNMK1JXcmF3dHRUeVlSQT09">Workshop: Ethics in CS and Socially Responsible Computing</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="dates grid-item">
                                <p><strong>Recorded</strong></p>
                            </td>
                            <td className="times grid-item">
                                <p>Tech Talk</p>
                            </td>
                            <td className="links grid-item">
                                <a href="https://www.twitch.tv/videos/871505809">How to collaborate on code projects with GitHub</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="dates grid-item">
                                <p><strong></strong></p>
                            </td>
                            <td className="times grid-item">
                                <p>Tech Talk</p>
                            </td>
                            <td className="links grid-item">
                                <a href="https://www.youtube.com/watch?v=cgBB_JHBXSM&feature=youtu.be">Intro to Firebase</a>
                            </td>
                        </tr>
                        </table>
                    </div>
                </div>
        } else if (infoType === "Speaker Panel") {
            bottomSection = 
                <div className="bottom speaker-panel">
                    <div className="table">
                        <table>
                        <tr>
                            <td className="dates grid-item">
                                <p><strong>Jan 22</strong></p>
                            </td>
                            <td className="times grid-item">
                                <p>13:30 - 14:00</p>
                            </td>
                            <td className="links grid-item">
                                <a href="https://us02web.zoom.us/j/89725906434?pwd=c1hNbnVtUnVYSk8wa0RxdkExWGF1dz09"><strong>Talk: Professor Edgar</strong> A (Really) Brief History of American Surveillance</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="dates grid-item">
                                <p><strong> </strong></p>
                            </td>
                            <td className="times grid-item">
                                <p>15:00 - 15:30</p>
                            </td>
                            <td className="links grid-item">
                                <a href="https://us02web.zoom.us/j/83381000344?pwd=UXV3TktTbEpqdXpUZURVSXoxeE9BQT09"><strong>Talk: Professor Littman</strong> The Four Ways We Tell Machines What We Want, and How We Can Do Better</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="dates grid-item">
                                <p><strong> </strong></p>
                            </td>
                            <td className="times grid-item">
                                <p>16:00 - 17:00</p>
                            </td>
                            <td className="links grid-item">
                                <a href="https://us02web.zoom.us/j/84344188222?pwd=aTBwc0x2dDdOMXZwNVU1Mi91eUU3UT09"><strong>Panel: Diversity and Inclusion</strong></a>
                            </td>
                        </tr>
                        <tr>
                            <td className="dates grid-item">
                                <p><strong> </strong></p>
                            </td>
                            <td className="times grid-item">
                                <p>17:00 - 18:00</p>
                            </td>
                            <td className="links grid-item">
                                <a href="https://us02web.zoom.us/j/83877631019?pwd=N3RTbHpmSHNVaXVHdVRPMTQ4cW0xUT09"><strong>Panel: Start-ups and Entrepreneurship</strong></a>
                            </td>
                        </tr>
                        <tr>
                            <td className="dates grid-item">
                                <p><strong>Jan 23</strong></p>
                            </td>
                            <td className="times grid-item">
                                <p>11:30 - 12:00</p>
                            </td>
                            <td className="links grid-item">
                                <a href="https://us02web.zoom.us/j/84719148529?pwd=aEJDWVJ1ZGhLQzl3aS9Ock1vTldvdz09"><strong>Talk: Professor Srinath Sridhar</strong> Digitizing Physical Intelligence</a>
                            </td>
                        </tr>
                        </table>
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