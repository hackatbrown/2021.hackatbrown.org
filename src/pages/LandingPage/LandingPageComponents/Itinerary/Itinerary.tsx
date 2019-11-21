import React from "react";
import "./Itinerary.css";
import itineraryImg from "../../../../assets/images/LandingPage/placeholder-square.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
