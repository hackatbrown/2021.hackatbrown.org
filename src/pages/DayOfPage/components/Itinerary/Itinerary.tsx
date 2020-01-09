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
                <div className="parent-container d-flex justify-content-center">
                    <div className="saturday itin-table">
                        <div className="row">
                            <h3>SATURDAY</h3>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="row">9:00-10:00am</div>
                            </div>
                            <div className="col">
                                <div className="row font-weight-bold">
                                    Check in
                                </div>
                                <div className="row">Friedman Lobby</div>
                            </div>
                        </div>

                        <div className="row event">
                            <div className="col">
                                <div className="row">10:00-11:00am</div>
                            </div>
                            <div className="col">
                                <div className="row font-weight-bold">
                                    Sponsor Fair
                                </div>
                                <div className="row">Sayles Auditorium</div>
                            </div>
                        </div>

                        <div className="row event">
                            <div className="col">
                                <div className="row">11:00am-12:00pm</div>
                            </div>
                            <div className="col">
                                <div className="row font-weight-bold">
                                    Kickoff!
                                </div>
                                <div className="row">Salomon DECI</div>
                            </div>
                        </div>

                        <div className="row event">
                            <div className="col">
                                <div className="row">12:00-1:00pm</div>
                            </div>
                            <div className="col">
                                <div className="row font-weight-bold">
                                    Lunch & Team Forming
                                </div>
                                <div className="row">Sayles and Friedman</div>
                            </div>
                        </div>

                        <div className="row event">
                            <div className="col">
                                <div className="row">1:00pm</div>
                            </div>
                            <div className="col">
                                <div className="row font-weight-bold">
                                    Hacking Begins!
                                </div>
                                <div className="row">Sayles and Friedman</div>
                            </div>
                        </div>

                        <div className="row event">
                            <div className="col">
                                <div className="row">5:30pm-6:30pm</div>
                            </div>
                            <div className="col">
                                <div className="row font-weight-bold">
                                    Dinner
                                </div>
                                <div className="row">Sayles Auditorium</div>
                            </div>
                        </div>

                        <div className="row event">
                            <div className="col">
                                <div className="row">11:30pm</div>
                            </div>
                            <div className="col">
                                <div className="row font-weight-bold">
                                    Midnight Surprise
                                </div>
                                <div className="row">Sayles Auditorium</div>
                            </div>
                        </div>
                    </div>

                    <div className="sunday itin-table1">
                        <div className="row">
                            <h3>SUNDAY</h3>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="row">8:00-9:00am</div>
                            </div>
                            <div className="col">
                                <div className="row font-weight-bold">
                                    Breakfast
                                </div>
                                <div className="row">Sayles Auditorium</div>
                            </div>
                        </div>

                        <div className="row event">
                            <div className="col">
                                <div className="row">10:30am</div>
                            </div>
                            <div className="col">
                                <div className="row font-weight-bold">
                                    Hacking ends
                                </div>
                                <div className="row">
                                    *Submit your projects online!
                                </div>
                            </div>
                        </div>

                        <div className="row event">
                            <div className="col">
                                <div className="row">11:00am</div>
                            </div>
                            <div className="col">
                                <div className="row font-weight-bold">
                                    Judging begins
                                </div>
                            </div>
                        </div>

                        <div className="row event">
                            <div className="col">
                                <div className="row">1:00pm-2:00pm</div>
                            </div>
                            <div className="col">
                                <div className="row font-weight-bold">
                                    Lunch
                                </div>
                                <div className="row">Sayles Auditorium</div>
                            </div>
                        </div>

                        <div className="row event">
                            <div className="col">
                                <div className="row">1:00pm-2:00pm</div>
                            </div>
                            <div className="col">
                                <div className="row font-weight-bold">
                                    Demo Fair
                                </div>
                                <div className="row">Friedman 108</div>
                            </div>
                        </div>

                        <div className="row event">
                            <div className="col">
                                <div className="row">2:30pm</div>
                            </div>
                            <div className="col">
                                <div className="row font-weight-bold">
                                    Closing Ceremonies
                                </div>
                                <div className="row">Salomon DECI</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sunday itin-table2">
                    <div className="row">
                        <h3>Sunday, January 27th</h3>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="row">8:00-9:00am</div>
                        </div>
                        <div className="col">
                            <div className="row font-weight-bold">
                                Breakfast
                            </div>
                            <div className="row">Sayles Auditorium</div>
                        </div>
                    </div>

                    <div className="row event">
                        <div className="col">
                            <div className="row">10:30am</div>
                        </div>
                        <div className="col">
                            <div className="row font-weight-bold">
                                Hacking ends
                            </div>
                            <div className="row">
                                *Submit your projects online!
                            </div>
                        </div>
                    </div>

                    <div className="row event">
                        <div className="col">
                            <div className="row">11:00am</div>
                        </div>
                        <div className="col">
                            <div className="row font-weight-bold">
                                Judging begins
                            </div>
                        </div>
                    </div>

                    <div className="row event">
                        <div className="col">
                            <div className="row">1:00pm-2:00pm</div>
                        </div>
                        <div className="col">
                            <div className="row font-weight-bold">Lunch</div>
                            <div className="row">Sayles Auditorium</div>
                        </div>
                    </div>

                    <div className="row event">
                        <div className="col">
                            <div className="row">1:00pm-2:00pm</div>
                        </div>
                        <div className="col">
                            <div className="row font-weight-bold">
                                Demo Fair
                            </div>
                            <div className="row">Friedman 108</div>
                        </div>
                    </div>

                    <div className="row event">
                        <div className="col">
                            <div className="row">2:30pm</div>
                        </div>
                        <div className="col">
                            <div className="row font-weight-bold">
                                Closing Ceremonies
                            </div>
                            <div className="row">Salomon DECI</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}