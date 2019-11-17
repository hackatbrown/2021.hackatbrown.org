import React from "react";
import "./Sponsors.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

type SponsorsProps = {};

type SponsorsState = {
    state: string;
};

export default class Sponsors extends React.Component<
    SponsorsProps,
    SponsorsState
> {
    constructor(props: SponsorsProps) {
        super(props);
        this.state = {
            state: "good"
        };
    }
    render() {
        return (
            <div className="sponsors">
                <Container>
                    <Row>
                        <Col>
                        <div className="sponsors-heading">
                            <h1>Sponsors</h1>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
