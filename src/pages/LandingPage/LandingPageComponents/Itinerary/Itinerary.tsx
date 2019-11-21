import React from "react";
import "./Itinerary.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import itineraryImg from "../../../../assets/images/LandingPage/scene_itinerary_mobile.png";

type ItineraryProps = {};

type ItineraryState = {
    state: string;
};

export default class Itinerary extends React.Component<
    ItineraryProps,
    ItineraryState
> {
    constructor(props: ItineraryProps) {
        super(props);
        this.state = {
            state: "good"
        };
    }
    render() {
        return (
            <div className="itinerary">
                <div className="itinerary-bg-img">
                    <img id="itinerary-img" src={itineraryImg}></img>
                </div>
                <table className="itinerary-div">
                    <tr className="itinerary-header"><h1>Itinerary</h1></tr>
                    
                    <div className="itinerary-list">
                    <tr className="itinerary-date">Saturday, January 25th</tr>
                    <div className="itinerary-items">
                        <tr>
                            <td className="itinerary-time">9:30</td>
                            <td className="itinerary-event">Registration</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="itinerary-location">Sayles Hall</td>
                        </tr>
                    </div>

                    <div className="itinerary-items">
                        <tr>
                            <td className="itinerary-time">9:30</td>
                            <td className="itinerary-event">Registration</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="itinerary-location">Sayles Hall</td>
                        </tr>
                    </div>

                    <div className="itinerary-items">
                        <tr>
                            <td className="itinerary-time">9:30</td>
                            <td className="itinerary-event">Registration</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="itinerary-location">Sayles Hall</td>
                        </tr>
                    </div>

                    <div className="itinerary-items">
                        <tr>
                            <td className="itinerary-time">9:30</td>
                            <td className="itinerary-event">Registration</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="itinerary-location">Sayles Hall</td>
                        </tr>
                    </div>

                    <div className="itinerary-items">
                        <tr>
                            <td className="itinerary-time">9:30</td>
                            <td className="itinerary-event">Registration</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="itinerary-location">Sayles Hall</td>
                        </tr>
                    </div>

                    <div className="itinerary-items">
                        <tr>
                            <td className="itinerary-time">9:30</td>
                            <td className="itinerary-event">Registration</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="itinerary-location">Sayles Hall</td>
                        </tr>
                    </div>

                    <div className="itinerary-items">
                        <tr>
                            <td className="itinerary-time">9:30</td>
                            <td className="itinerary-event">Registration</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="itinerary-location">Sayles Hall</td>
                        </tr>
                    </div>

                    <div className="itinerary-items">
                        <tr>
                            <td className="itinerary-time">9:30</td>
                            <td className="itinerary-event">Registration</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="itinerary-location">Sayles Hall</td>
                        </tr>
                    </div>

                    <div className="itinerary-items">
                        <tr>
                            <td className="itinerary-time">9:30</td>
                            <td className="itinerary-event">Registration</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="itinerary-location">Sayles Hall</td>
                        </tr>
                    </div>

                    </div>
                </table>
            </div>
        );
    }
}
