import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Itinerary.css";

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
            <div className="dayof-itinerary">
                <table>
                    <tr>
                        <th className="day">SATURDAY</th>
                    </tr>
                    <tr>
                        <td>9:00am<br/>Registration & Sponsor Fair<br/><div className="caption">Check in at Friedman Lobby,<br/>or Check in at Sayles Hall 108</div></td>
                    </tr>
                    <tr>
                        <td>11:00am – 12:00pm<br/>Kickoff & Keynote Speech<br/><div className="caption">Head to Salomon Hall DECI</div></td>
                    </tr>
                    <tr>
                        <td>12:00pm – 1:00pm<br/>Lunch & Team Forming<br/><div className="caption">Sayles Hall & Friedman Hall 102</div></td>
                    </tr>
                    <tr>
                        <td>1:00pm<br/>Hacking begins!<br/><div className="caption">Sayles Hall<br/>Friedman 201, 202, 208</div></td>
                    </tr>
                    <tr>
                        <td>1:30pm – 2:30pm<br/>iOS Workshop<br/><div className="caption">Friedman 108</div></td>
                    </tr>
                    <tr>
                        <td>2:30pm – 3:30pm<br/>Android Workshop<br/><div className="caption">Friedman 108</div></td>
                    </tr>
                    <tr>
                        <td>4:00pm – 5:00pm<br/>Javascript Workshop<br/><div className="caption">Friedman 108</div></td>
                    </tr>
                    <tr>
                        <td>6:00pm – 7:00pm<br/>Dinner<br/><div className="caption">Sayles Hall</div></td>
                    </tr>
                    <tr>
                        <td>10:30pm<br/><div className="caption">Late Night Surprise!</div></td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <th>SUNDAY</th>
                    </tr>
                    <tr>
                        <td>8:00am – 10:00am<br/>Breakfast</td>
                    </tr>
                    <tr>
                        <td>10:30am<br/>Hacking ends!<br/><div className="caption">Submit projects online</div></td>
                    </tr>
                    <tr>
                        <td>11:00am<br/>Judging<br/><div className="caption">Judging for Sayles Hall Participants</div></td>
                    </tr>
                    <tr>
                        <td>12:00pm<br/>Judging<br/><div className="caption">Judging for Friedman Hall Participants</div></td>
                    </tr>
                    <tr>
                        <td>1:00pm – 2:00pm<br/>Lunch & Demo Fair<br/><div className="caption">Friedman 108</div></td>
                    </tr>
                    <tr>
                        <td>2:30pm – 3:00pm<br/>Closing Ceremony<br/><div className="caption">Salomon Auditorium DECI</div></td>
                    </tr>
                    <tr>
                        <th id="prize-title">Prizes</th>
                    </tr>
                    <tr>
                        <td id="prize-categories">Most Innovative<br/>Best First Time Hacker<br/>Best Hardware Hack<br/>Best Potential for Social Impact<br/>Best Real World Application</td>
                    </tr>
                    <tr>
                        <td></td>
                    </tr>
                </table>
            </div>
        );
    }
}