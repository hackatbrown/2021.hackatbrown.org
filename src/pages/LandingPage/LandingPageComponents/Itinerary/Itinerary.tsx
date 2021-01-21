import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Itinerary.css";
import itinImg from "../../../../assets/images/LandingPage/itinerary.mp4";
import src from "*.bmp";


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
                    <Container>
                    {/* <div className="saturday itin-table"> */}
                        <Row>
                            <h1 className="itinerary-header">Itinerary</h1>
                            <br></br>
                        </Row>
                        <Row>
                            {/* <h3 className="coming-soon">Our itinerary will be posted here closer to the day of the event. Stay tuned!</h3> */}
                            <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FChicago&amp;src=ZXRoYW5nYXNpc0BnbWFpbC5jb20&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=YmU4bm1oNjhubmpvY2NhNDBuNzB0ZmNiajhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=Y25xbHNobHBqMTdqcjAzdjN2dmhwM3F1cjRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=azhyajI4M2lxczQ0ZGw3dTM1NWllNnY5ZWtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=cWhjMDBxaG5vc2FybTVuMW1yYXA4ZHY2NmNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=Y19hczZjMzYzYmE1MXY4dmM1MDdhNW9nNDYxa0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;src=Y19zN29hdjNqbzJ0Mm8yZ3FzbHRvcTc1NmxoY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%23F6BF26&amp;color=%2333B679&amp;color=%238E24AA&amp;color=%23C0CA33&amp;color=%23D50000&amp;color=%23D50000&amp;color=%23F6BF26&amp;color=%230B8043" width="100%" height="700vh" scrolling="no"></iframe>
                        </Row>
                        <Row>
                            <video className="video" muted autoPlay loop src={itinImg}/>
                        </Row>

                        {/* <div className="row">
                            <div className="col">
                                <div className="row">9:00-11:00am EST</div>
                            </div>
                            <div className="col">
                                <div className="row font-weight-bold">
                                    Check in
                                </div>
                                <div className="row">Location: (pending)</div>
                            </div>
                        </div>

                        <div className="row event">
                            <div className="col">
                                <div className="row">10:00-11:00am EST</div>
                            </div>
                            <div className="col">
                                <div className="row font-weight-bold">
                                    Sponsor Fair
                                </div>
                                <div className="row">Location: Virtual Platform</div>
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
                                <div className="row">Location: Virtual
                                Platform</div>
                            </div>
                        </div>

                        <div className="row event">
                            <div className="col">
                                <div className="row">12:00-1:00pm EST</div>
                            </div>
                            <div className="col">
                                <div className="row font-weight-bold">
                                    Team Forming
                                </div>
                                <div className="row">Location: (Pending)</div>
                            </div>
                        </div>

                        <div className="row event">
                            <div className="col">
                                <div className="row">1:00pm EST</div>
                            </div>
                            <div className="col">
                                <div className="row font-weight-bold">
                                    Hacking Begins!
                                </div>
                                <div className="row">Location (pending)</div>
                            </div>
                        </div> */}

                        {/* <div className="row event">
                            <div className="col">
                                <div className="row">6:00pm-7:00pm</div>
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
        </div> */}

                    {/* <div className="sunday itin-table1">
                        <div className="placeholder-itinerary">.</div>
                        <div className="row">
                            <h3>Day 2</h3>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="row">10:30am EST</div>
                            </div>
                            <div className="col">
                                <div className="row font-weight-bold">
                                    Hacking Ends
                                </div>
                                <div className="row">Location: *Submit your projects online!</div>
                            </div>
                        </div>

                        <div className="row event">
                            <div className="col">
                                <div className="row">11:00am EST</div>
                            </div>
                            <div className="col">
                                <div className="row font-weight-bold">
                                    Judging begins
                                </div>
                                <div className="row">
                                    Location: (Zoom links when available)
                                </div>
                            </div>
                        </div>

                        <div className="row event">
                            <div className="col">
                                <div className="row">1:00pm - 2:00pm</div>
                            </div>
                            <div className="col">
                                <div className="row font-weight-bold">
                                    Demo Fair
                                </div>
                                <div className="row">Location: (Zoom/Virtual Platform)</div></div>
                            </div>
                        </div>

                        <div className="row event">
                            <div className="col">
                                <div className="row">2:30pm EST</div>
                            </div>
                            <div className="col">
                                <div className="row font-weight-bold">
                                    Closing Ceremonies
                                </div>
                                <div className="row">Location (Zoom link when available)</div>
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
                        </div> */}
                    {/* </div> */}


                {/* <div className="sunday itin-table2">
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
                    </div> */}

                    {/* <div className="row event">
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
                </div> */}
                </Container>
            </div>
        );
    }
}
