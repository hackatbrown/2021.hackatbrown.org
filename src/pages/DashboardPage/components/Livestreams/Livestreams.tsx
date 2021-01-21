import React, { Component } from "react";
import "./Livestreams.css";
import guideIcon from "../../../../assets/images/Dashboard/document.png";
import zoomIcon from "../../../../assets/images/Dashboard/download.png";

type LivestreamsProps = {
};
  
type LivestreamsState = {
    tab: string; 
};

export default class Livestreams extends Component<LivestreamsProps, LivestreamsState> {
    constructor(props: LivestreamsProps) {
        super(props);
        this.state = {
            tab: "welcome"
        };
    }

    swapToWelcome = () => {
        // swap to welcome tab
        this.setState({
          tab: "welcome",
        });
    };

    swapToCeremony = () => {
        // swap to ceremony tab
        this.setState({
          tab: "ceremony",
        });
    };

    swapToSpotify = () => {
        // swap to spotify tab
        this.setState({
            tab: "spotify",
        });
    };

    livestreamsContent = () => {
        let content;
        if (this.state.tab == "welcome") {
            content = (
                <div className="welcome-container">
                    <iframe 
                    width="60%" 
                    src="https://www.youtube.com/embed/5qap5aO4i9A" 
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    ></iframe>
                    <div className="button-col">
                        <a 
                            href="https://www.notion.so/H-B-Hacker-Guide-745f5a9083a64bf9819a1786e29d372e"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button onClick={()=>{}} className="hacker-guide-button" >
                                <img className="button-icon" src={guideIcon} alt="Icon"/>
                                Hacker Guide
                            </button>
                        </a>
                        <a 
                            href="zoom_backgrounds.zip"
                            target="_blank"
                            download
                        >
                            <button onClick={()=>{}} className="zoom-bg-button">
                                <img className="button-icon" src={zoomIcon} alt="Icon"/>
                                Zoom Backgrounds
                            </button>
                        </a>
                    </div>
                </div>
            );
        } else if (this.state.tab == "ceremony") {
            content = (
                <div className="ceremony-container">
                    <iframe 
                    width="80%" 
                    src="https://www.youtube.com/embed/j9HPtZcssNo" 
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    ></iframe>
                </div>
            );
        } else if (this.state.tab == "spotify") {
            content = (
                <div className="spotify-container">
                    <iframe 
                    src="https://open.spotify.com/embed/playlist/6ZZE3bWGdFooMPomeeiiX1" 
                    width="80%" 
                    frameBorder="0" 
                    allow="encrypted-media
                    "></iframe>
                </div>
            );
        }
        return content;
    };

    render() {
        let content = this.livestreamsContent();

        return (
            <div className="livestreams-body">
                <div className="livestreams-tabs">
                    <button
                    onClick={this.swapToWelcome}
                    className="welcome-tab"
                    id={this.state.tab == "welcome" ? "active-tab" : "other-tab"}
                    >
                    Welcome
                    </button>
                    <button
                    onClick={this.swapToCeremony}
                    className="ceremony-tab"
                    id={this.state.tab == "ceremony" ? "active-tab" : "other-tab"}
                    >
                    Opening/Closing Ceremony
                    </button>
                    <button
                    onClick={this.swapToSpotify}
                    className="spotify-tab"
                    id={this.state.tab == "spotify" ? "active-tab" : "other-tab"}
                    >
                    H@B Spotify Playlist
                    </button>
                </div>
                <div className="livestreams-content">
                {content}
                </div>
            </div>
          );
    }
}