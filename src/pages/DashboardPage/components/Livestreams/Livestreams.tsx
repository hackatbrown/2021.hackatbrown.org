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

    render() {
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
                    <div className="welcome-container" 
                        style={{
                            display: this.state.tab === "welcome" ? "flex" : "none"
                    }}>
                        <iframe 
                        width="60%" 
                        src="https://www.youtube-nocookie.com/embed/CrJM1i8g19I" 
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

                    <div className="ceremony-container"
                        style={{
                            display: this.state.tab === "ceremony" ? "flex" : "none"
                    }}>
                        {/* <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fhackatbrown%2Fposts%2F3401091640001981&width=1280" 
                        width="750" height="100%" style={{border:"none", overflow:"hidden"}} scrolling="no" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe> */}
                        <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fhackatbrown%2Fvideos%2F153449813213597%2F&show_text=false&width=560" width="900" height="100%" style={{border:"none", overflow:"hidden"}} scrolling="no" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    </div>

                    <div className="spotify-container"
                        style={{
                            display: this.state.tab === "spotify" ? "flex" : "none"
                    }}>
                        <iframe 
                        src="https://open.spotify.com/embed/playlist/7hQvIt3sMOmhkb3WYFTbIw" 
                        width="80%" 
                        frameBorder="0"
                        allow="encrypted-media"></iframe>
                    </div>
                </div>
            </div>
          );
    }
}