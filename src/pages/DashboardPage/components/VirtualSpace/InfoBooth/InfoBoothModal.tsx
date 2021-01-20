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
                            <p>Intro to HTML/CSS</p>
                        </div>
                        <div className="dates">
                            <p><strong> </strong></p>
                        </div>
                        <div className="times">
                            <p>13:00 - 14:00</p>
                        </div>
                        <div className="links">
                            <p>Workshop: Google Cloud</p>
                        </div>
                        <div className="times">
                            <p>17:30 - 18:30</p>
                        </div>
                        <div className="dates">
                            <p><strong> </strong></p>
                        </div>
                        <div className="links">
                            <p>Workshop: (MLH) Cybersecurity Cloud</p>
                        </div>
                        <div className="times">
                            <p>18:00 - 19:00</p>
                        </div>
                        <div className="dates">
                            <p><strong> </strong></p>
                        </div>
                        <div className="links">
                            <p>Workshop: Intro to Deep Learning</p>
                        </div>
                        <div className="times">
                            <p>20:00 - 21:00</p>
                        </div>
                        <div className="dates">
                            <p><strong> </strong></p>
                        </div>
                        <div className="links">
                            <p>Workshop: Introduction to Figma</p>
                        </div>
                        <div className="dates">
                            <p><strong>Jan 23</strong></p>
                        </div>
                        <div className="times">
                            <p>9:30 - 10:30</p>
                        </div>
                        <div className="links">
                            <p>Workshop: Ethics in CS and Socially Responsible Computing</p>
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
                            <p><strong>Talk: Professor Edgar</strong></p>
                        </div>
                        <div className="dates">
                            <p><strong> </strong></p>
                        </div>
                        <div className="times">
                            <p>14:00 - 15:00</p>
                        </div>
                        <div className="links">
                            <p><strong>Talk: Professor Litman</strong> The Four Ways We Tell Machines What We Want, and How We Can Do Better</p>
                        </div>
                        <div className="dates">
                            <p><strong> </strong></p>
                        </div>
                        <div className="times">
                            <p>15:00 - 16:00</p>
                        </div>
                        <div className="links">
                            <p><strong>Panel: Diversity and Inclusion</strong></p>
                        </div>
                        <div className="dates">
                            <p><strong> </strong></p>
                        </div>
                        <div className="times">
                            <p>16:00 - 7:00</p>
                        </div>
                        <div className="links">
                            <p><strong>Panel: Startups and Entrepeneurship</strong></p>
                        </div>
                        <div className="dates">
                            <p><strong>Jan 23</strong></p>
                        </div>
                        <div className="times">
                            <p>10:00 - 11:30</p>
                        </div>
                        <div className="links">
                            <p><strong>Talk: Professor Srinath Sridhar</strong></p>
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