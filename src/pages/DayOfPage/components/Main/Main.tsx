import React from "react";
import "./Main.css";
import Countdown from "react-countdown";

type MainProps = {
};

type MainState = {
    state: string;
};

// // Random component
// const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({days, hours, minutes, seconds} : {days: any, hours: any, minutes: any, seconds: any}) => {
//   if (completed) {
//     // Render a complete state
//     return <Completionist />;
//   } else {
    // Render a countdown
    const daysPadding = days < 10 ? "0" : "";
    const hoursPadding = hours < 10 ? "0" : "";
    const minutesPadding = minutes < 10 ? "0" : "";
    const secondsPadding = seconds < 10 ? "0" : "";
    return (
        <div id="coundown-container">
            <div className="digit-container">
                <div className="countdown-digit">
                    {daysPadding}{days}
                </div>
                <div className="countdown-digit-label">
                    Days    
                </div>
            </div>
            <div className="digit-container">
                <div className="countdown-digit">
                    {hoursPadding}{hours}
                </div>
                <div className="countdown-digit-label">
                    Hours   
                </div>
            </div>
            <div className="digit-container">
                <div className="countdown-digit">
                    {minutesPadding}{minutes}
                </div>
                <div className="countdown-digit-label">
                    Minutes    
                </div>
            </div>
            <div className="digit-container" id="last-digit">
                <div className="countdown-digit">
                    {secondsPadding}{seconds}
                </div>
                <div className="countdown-digit-label">
                    Seconds  
                </div>
            </div>
        </div>
    )
  }
// };

export default class Main extends React.Component<MainProps, MainState> {
    constructor(props: MainProps) {
        super(props);
        this.state = {
            state: "good"
        };
    }
    render() {
        const finish = new Date('January 25, 2020 09:00:00');
        return (
            <div id="main-section">
                <div id="title">
                    <div id="title-text">
                        <h2>Hack@Brown presents:</h2>
                        <h1>Garage 2020</h1>
                    </div>
                    <Countdown date={finish} renderer={renderer} zeroPadTime={2}/>
                    <div id="wifi">Wifi: HackAtBrown <span>|</span> Password: HackATbrown2020</div>
                </div>
            </div>
        );
    }
}
