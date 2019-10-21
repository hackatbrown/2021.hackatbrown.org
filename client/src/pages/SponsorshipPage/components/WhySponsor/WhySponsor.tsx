import React from "react";
import "./WhySponsor.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import legoMan from "../../../../assets/images/Sponsorship/LegoMan.png";
import legoBricks from "../../../../assets/images/Sponsorship/LegoBricks.png";
import bricks from "../../../../assets/images/Sponsorship/morebricks.png";

/**
 * define a type model for the props you are passing in to the component
 */
type WhySponsorProps = {};

/**
 * define a type model for the state of the page
 */
type WhySponsorState = {};

export default class WhySponsor extends React.Component<
    WhySponsorProps,
    WhySponsorState
> {
    constructor(props: WhySponsorProps) {
        super(props);
    }
    render() {
        return (
            <div className="why-sponsor">
                <Container>
                    <Row>
                        <Col sm={7}>
                            <div className="why-sponsor-left">
                                <h3>Why Sponsor Us?</h3>

                                <p>Meet with talented students:</p>

                                <ul>
                                    <li>
                                        Connect with amazing computer science,
                                        design, and engineering students from
                                        Brown, RISD, MIT, and more!
                                    </li>
                                    <li>
                                        Get access to 500+ applicant resumes,
                                        portfolios, websites, and Github
                                        profiles!
                                    </li>
                                </ul>

                                <p>Promote diversity and inclusion:</p>

                                <ul>
                                    <li>
                                        Nearly half of our attendees identify as
                                        female, and around 20% are from
                                        underrepresented minorities.
                                    </li>
                                    <li>
                                        Help promote diversity and inclusion in
                                        computer science, engineering, and
                                        design at top universities.
                                    </li>
                                </ul>

                                <p>Showcase your company and brand:</p>

                                <ul>
                                    <li>
                                        Boost your company's brand and show off
                                        your company's technical side through
                                        our sponsorship fair, workshops, and
                                        demos.
                                    </li>
                                    <li>
                                        We’ve had workshops hosted by Google,
                                        Facebook and MongoDB on topics ranging
                                        from Machine Learning to Security
                                        Engineering.
                                    </li>
                                </ul>
                            </div>

                            <div className="past-projects">
                                <h3> Past Projects </h3>
                                <p>Best potential for social impact:</p>
                                <p>Reach Mental Health</p>
                                <p>
                                    A portal to creating customized chat rooms
                                    based on the symptoms or problems that they
                                    encounter in daily life.
                                </p>

                                <p>Best Hack with Facebook:</p>
                                <p>Babel Fish</p>
                                <p>
                                    A video chat app that translates speech in
                                    real-time for everyone else in the chat,
                                    enabling people who don't speak a common
                                    language to easily converse over the
                                    internet.
                                </p>

                                <p>Best Hack with Spell:</p>
                                <p>Autism Inspire</p>
                                <p>
                                    A system that allows an AI to communicate
                                    with patients for early autism treatment via
                                    “sketch captioning technology”.
                                </p>
                            </div>
                        </Col>
                        <Col sm={5}>
                            <div className="why-sponsor-right">
                                <p>Questions?</p>
                                <a href="mailto:sponsor@hackatbrown.org">
                                    sponsor@hackatbrown.org
                                </a>

                                <p>
                                    You'll reach Martin Chu, our sponsorship
                                    lead.
                                </p>
                            </div>

                            <div className="lego-graphics">
                                <img id="lego-man" src={legoMan}></img>
                                <img id="lego-bricks" src={legoBricks}></img>
                                <img id="more-bricks" src={bricks}></img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
