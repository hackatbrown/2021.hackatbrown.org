import React from "react";
import { Row } from "react-bootstrap";
import "./InfoBoothModal.css";

type InfoBoothModalProps = {
    infoType : string
};

type InfoBoothModalState = {
};

export default class InfoBoothModal extends React.Component<
    InfoBoothModalProps,
    InfoBoothModalState
> {
    constructor(props: InfoBoothModalProps) {
        super(props);
    }

    render() {
        return (
            // TODO
            <div>
                <div className="Announcements">
                    <div className="top">
                        <img></img>
                        <h1>Announcements</h1>
                    </div>
                    <div className="bottom">
                        <p>Remember to submit your projects by 8AM! Use this devpost link!</p>
                    </div>
                </div>
                <div className="Workshops">
                    <div className="top">

                    </div>
                    <div className="bottom">
                        <Row>
                            <div className="dates">

                            </div>
                            <div className="times">

                            </div>
                            <div className="links"></div>
                        </Row>
                    </div>
                </div>
                <div className="Speaker Series">
                <Row>
                            <div className="dates">

                            </div>
                            <div className="times">

                            </div>
                            <div className="links"></div>
                        </Row>
                </div>
            </div>
            
        );
    }
}