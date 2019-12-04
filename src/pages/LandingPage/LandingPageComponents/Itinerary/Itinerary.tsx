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
            <div className="itinerary">
                <div className="itinerary-div">

                    <h1 className="itinerary-header">Itinerary</h1>
                    <div className="itinerary-list">
                        <h2 className="itinerary-date">Saturday, January 25th</h2>

                        <div className="row1">
                            <p className="time">9:00-10:00am</p>
                            <p className="event">Check in</p>
                        </div>

                        <div className="row2">
                            <p className="location">Friedman Lobby</p>
                        </div>

                        <div className="row1">
                            <p className="time">10:00-11:00am</p>
                            <p className="event">Sponsor Fair</p>
                        </div>

                        <div className="row2">
                            <p className="location">Sayles Auditorium</p>
                        </div>

                        <div className="row1">
                            <p className="time">11:00-12:00pm</p>
                            <p className="event">Kickoff!</p>
                        </div>

                        <div className="row2">
                            <p className="location">Salomon DECI</p>
                        </div>

                        <div className="row1">
                            <p className="time">12:00-1:00pm</p>
                            <p className="event">Lunch & Team Forming</p>
                        </div>

                        <div className="row2">
                            <p className="location">Sayles & Friedman</p>
                        </div>

                        <div className="row1">
                            <p className="time">1:00pm</p>
                            <p className="event">Hacking begins!</p>
                        </div>

                        <div className="row2">
                            <p className="location">Sayles & Friedman</p>
                        </div>

                        <div className="row1">
                            <p className="time">5:30-6:30pm</p>
                            <p className="event">Dinner</p>
                        </div>

                        <div className="row2">
                            <p className="location">Sayles Auditorium</p>
                        </div>

                        <div className="row1">
                            <p className="time">11:30pm</p>
                            <p className="event">Midnight Surprise</p>
                        </div>

                        <div className="row2">
                            <p className="location">Sayles Auditorium</p>
                        </div>

                        <h2 className="itinerary-date">Sunday, January 26th*</h2>

                        <div className="row1">
                            <p className="time">8:00-9:00am</p>
                            <p className="event">Breakfast</p>
                        </div>

                        <div className="row2">
                            <p className="location">Sayles Auditorium</p>
                        </div>

                        <div className="row1">
                            <p className="time">10:30am</p>
                            <p className="event">Hacking Ends</p>
                        </div>

                        <div className="row2">
                            <p className="location">Submit projects online!</p>
                        </div>

                        <div className="row1">
                            <p className="time">11:00am</p>
                            <p className="event">Judging Begins</p>
                        </div>

                        <div className="row1">
                            <p className="time">1:00-2:00pm</p>
                            <p className="event">Lunch</p>
                        </div>

                        <div className="row2">
                            <p className="location">Sayles Auditorium</p>
                        </div>

                        <div className="row1">
                            <p className="time">1:00-2:00pm</p>
                            <p className="event">Demo Fair</p>
                        </div>

                        <div className="row2">
                            <p className="location">Friedman 108</p>
                        </div>

                        <div className="row1">
                            <p className="time">2:30pm</p>
                            <p className="event">Closing Ceremonies</p>
                        </div>

                        <div className="row2">
                            <p className="location">Salomon DECI</p>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
