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
                                <h3><div id="h3-2">Why sponsor us?</div></h3>

                                <p id="heading1"><b>Meet talented students:</b></p>
                                <ul>
                                    <li>
                                        Connect with amazing computer science,
                                        design, and engineering students from
                                        Brown, RISD, MIT, and more!
                                    </li>
                                    <li>
                                        Get access to <b>500+</b> applicant resumes,
                                        portfolios, websites, and Github
                                        profiles!
                                    </li>
                                </ul>

                                <p id="heading1"><b>Promote diversity and inclusion:</b></p>

                                <ul>
                                    <li>
                                        Nearly <b>50%</b> of our attendees identify as
                                        female, and around <b>20%</b> are from
                                        underrepresented minorities.
                                    </li>
                                    <li>
                                        Help promote <b>diversity</b> and inclusion in
                                        computer science, engineering, and
                                        design at top universities.
                                    </li>
                                </ul>

                                <p id="heading1"><b>Showcase your company and brand:</b></p>

                                <ul>
                                    <li>
                                        Boost your company's brand and show off
                                        your company's technical side through
                                        our sponsorship fair, workshops, and
                                        demos - all revamped on our <b>new
                                        virtual platform!</b>
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
                                <h3><div id="h3-2">Past Projects</div></h3>
                                <p id="headingL">Best potential for social impact:</p>
                                <p id="heading">Reach Mental Health</p>
                                <p id="text">
                                    A portal to creating customized chat rooms
                                    based on the symptoms or problems that they
                                    encounter in daily life.
                                </p>

                                <p id="headingL">Best Hack with Facebook:</p>
                                <p id="heading">Babel Fish</p>
                                <p id="text">
                                    A video chat app that translates speech in
                                    real-time for everyone else in the chat,
                                    enabling people who don't speak a common
                                    language to easily converse over the
                                    internet.
                                </p>

                                <p id="headingL">Best Hack with Spell:</p>
                                <p id="heading">Autism Inspire</p>
                                <p id="text">
                                    A system that allows an AI to communicate
                                    with patients for early autism treatment via
                                    “sketch captioning technology.”
                                </p>

                                <p id="headingL">Best Hack that Builds Community (Facebook):</p>
                                <p id="heading">LinguaML</p>
                                <p id="text">
                                    An app that takes a picture of anything
                                    and converts it to a flashcard in the
                                    language you are trying to learn.
                                </p>

                                <p id="headingL">Most Innovative Hack:</p>
                                <p id="heading">Quickmoji</p>
                                <p id="text">
                                    A tool that generates quick emoji and text
                                    responses by recognizing user emotion in
                                    real-time.
                                </p>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className="why-sponsor-right">
                                <p><b>Questions?</b></p>
                                <a id="sponsor-email" href="mailto:sponsor@hackatbrown.org">
                                    sponsor@hackatbrown.org
                                </a>

                                <p><br/>
                                    Reach out to Nick Wee and Sheri Zhang,
                                    our sponsorship leads.
                                </p>
                            </div>

                            <div className="lego-graphics">
                                <img id="lego-man" src={legoMan}></img>
                                <img id="lego-bricks" src={legoBricks}></img>
                                <img id="more-bricks" src={bricks}></img>
                            </div>
                        </Col>
                        <Col sm={1}></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
