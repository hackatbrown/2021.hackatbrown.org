import React from "react";
import "./CodeOfConductPage.css";

/**
 * define a type model for the props you are passing in to the component
 */
type CodeOfConductProps = {};

/**
 * define a type model for the state of the page
 */
type CodeOfConductState = {};

export default class CodeOfConductPage extends React.Component<
    CodeOfConductProps,
    CodeOfConductState
> {
    constructor(props: CodeOfConductProps) {
        super(props);
    }
    render() {
        return (
            <div className="conduct">
                <main className="conduct-container">
                    <div className="conduct-header">
                        <header>
                            <h1>Code of Conduct</h1>
                            <p className="conduct-subtitle">Rules to follow, and ways to report violations.</p>
                        </header>
                    </div>

                    <div>
                        <section className="code-of-conduct">
                            <p>
                                Hack@Brown aims to be a welcoming, encouraging and
                                safe event for all participants. All attendees,
                                including sponsors, students, speakers, judges,
                                volunteers and organizers are therefore required to
                                abide by the following code of conduct at all times.
                            </p>

                            <h2>
                                <b>Summary</b>
                            </h2>

                            <p>
                                Our hackathon is dedicated to providing a
                                harassment-free event experience for everyone,
                                regardless of gender, age, sexual orientation,
                                disability, physical appearance, body size, race, or
                                religion (or lack thereof).
                            </p>

                            <p>
                                <strong>
                                    We do not tolerate harassment of event
                                    participants in any form.
                                </strong>{" "}
                                We do not tolerate harassment of event participants
                                in any form. Sexual language/ imagery and hateful
                                speech is not appropriate for submitted projects or
                                any event venue, including talks, workshops,
                                receptions, and online media.{" "}
                                <strong>
                                    Event participants violating these rules may be
                                    sanctioned or expelled from the event without
                                    travel reimbursement at the discretion of the
                                    event organisers.
                                </strong>
                            </p>

                            <h2>
                                <b>Full Version</b>
                            </h2>

                            <p>
                                Harassment includes offensive verbal comments
                                related to gender, age, sexual orientation,
                                disability, physical appearance, body size, race,
                                religion, sexual images in public spaces, deliberate
                                intimidation, stalking, following, harassing
                                photography or recording, sustained disruption of
                                talks or other events, inappropriate physical
                                contact, and unwelcome sexual attention.
                            </p>

                            <p>
                                Participants asked to stop any harassing behavior
                                are expected to comply immediately.
                            </p>

                            <p>
                                Sponsors are also subject to the anti-harassment
                                policy. In particular, sponsors should not use
                                sexualised images, activities, or other material.
                                Booth staff (including volunteers) should not use
                                sexualised clothing/uniforms/costumes, or otherwise
                                create a sexualised environment.
                            </p>

                            <p>
                                In addition,{" "}
                                <strong>
                                    hacks or projects submitted by teams that
                                    violate this code
                                </strong>
                                , contain sexual language or imagery, or are
                                otherwise considered discriminatory or harassing in
                                nature <strong>may be disqualified</strong> or
                                denied the right to demo at the discretion of the
                                event organizers.
                            </p>

                            <p>
                                If a participant engages in harassing behavior, the
                                event organisers may take any action they deem
                                appropriate, including warning the offender or
                                expulsion from the event with no reimbursement. If
                                you are being harassed, notice that someone else is
                                being harassed, or have any other concerns, please
                                follow the reporting procedures at the bottom of
                                this document and report the incident immediately.
                                Hackathon staff can be identified as they’ll be
                                wearing branded t-shirts.
                            </p>

                            <p>
                                Hackathon staff will be happy to help participants
                                contact venue security or local law enforcement,
                                provide escorts, or otherwise assist those
                                experiencing harassment to feel safe for the
                                duration of the event. We value your attendance.
                            </p>

                            <p>
                                We expect participants to follow these rules at
                                hackathon and workshop venues and all related social
                                events.
                            </p>

                            <p>
                                For privacy policy, we follow Brown University
                                Computer Science Department's Privacy Policy which
                                can be found{" "}
                                <a href="https://e5.onthehub.com/WebStore/Support/PrivacyPolicy.aspx?ws=2b344e41-c29b-e011-969d-0030487d8897&vsro=8#1">
                                    here
                                </a>
                                .
                            </p>

                            <p>
                                I also grant to Hack@Brown, its representatives and
                                employees the right to take photographs of me and my
                                property in connection with the above-identified
                                subject. I authorize Hack@Brown, its assigns and
                                transferees to copyright, use and publish the same
                                in print and/or electronically.
                            </p>

                            <p>
                                I agree that Hack@Brown may use such photographs of
                                me with or without my name and for any lawful
                                purpose, including for example such purposes as
                                publicity, illustration, advertising, and Web
                                content.
                            </p>

                            <h2>
                                <b>Reporting Procedures</b>
                            </h2>

                            <p>
                                If you feel uncomfortable or think there may be a
                                potential violation of the code of conduct, please
                                report it through the following methods. All
                                reporters have the right to remain anonymous. You
                                can email us at{" "}
                                <a href="mailto:report@hackatbrown.org">
                                    report@hackatbrown.org
                                </a>{" "}
                                or fill out the anonymous reporting form that we
                                will have open during the hackathon.
                            </p>

                            <p>
                                Please also don’t hesitate to contact any of the
                                organizers or the security guard on duty at any
                                time. You can get in direct touch with the
                                co-directors below:
                            </p>

                            <ul>
                                <li>
                                    YJ Kim:{" "}
                                    <a href="mailto:yeon_jun_kim@brown.edu">
                                        yeon_jun_kim@brown.edu
                                    </a>
                                </li>
                                <li>
                                    Kendrick Tan:{" "}
                                    <a href="mailto:kendrick_tan@brown.edu">
                                        kendrick_tan@brown.edu
                                    </a>
                                </li>
                            </ul>

                            <p>
                                If you’re in need of emergency help, please contact
                                the following Brown University resources
                                immediately:
                            </p>

                            <ul>
                                <li>
                                    Police, Fire, or Medical Emergency (24-hours):
                                    +1 (401) 863-4111
                                </li>
                                <li>
                                    Confidential Sexual Assault Line: +1 (401)
                                    863-6000
                                </li>
                            </ul>

                            <p>
                                More information about emergency services can be
                                found{" "}
                                <a href="http://www.brown.edu/campus-life/health/services/">
                                    here.
                                </a>
                            </p>
                        </section>

                        <section className="attribution">
                            <p>
                                Last updated on January 7, 2019. If you have any
                                questions about the code of conduct, please reach
                                out to us at{" "}
                                <a href="mailto:hello@hackatbrown.org">
                                    hello@hackatbrown.org
                                </a>
                                .
                            </p>

                            <p>
                                Credit for this Code of Conduct goes to The Ada
                                Initiative, with the original source{" "}
                                <a href="http://2012.jsconf.us/#/about">here</a>.
                                You can find their unmodified Code of Conduct at{" "}
                                <a href="http://confcodeofconduct.com">
                                    http://confcodeofconduct.com
                                </a>
                                .
                            </p>

                            <p>
                                This work is licensed under a{" "}
                                <a href="http://creativecommons.org/licenses/by/3.0/deed.en_US">
                                    Creative Commons Attribution 3.0 Unported
                                    License
                                </a>
                                .
                            </p>
                        </section>
                    </div>
                </main>
            </div>
        );
    }
}
