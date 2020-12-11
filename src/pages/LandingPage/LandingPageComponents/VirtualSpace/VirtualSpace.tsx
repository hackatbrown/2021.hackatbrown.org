import React from "react";
import "./VirtualSpace.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import spaceImg from "../../../../assets/images/LandingPage/virtual_space.png";

type VirtualProps = {};

type VirtualState = {
    state: string;
};

export default class Virtual extends React.Component<VirtualProps, VirtualState> {
    constructor(props: VirtualProps) {
        super(props);
        this.state = {
            state: "good"
        };
    }
    render() {
        return (
            <div className="virtual">
            <Container>
              <Row>
                <Col sm={6}>
                  <div className="virtual-blurb">
                    <h1 className="virtual-blurb-header">
                    Virtual Space
                    </h1>
                    <p className="virtual-blurb-text">
                        To make our events more interactive, we are launching
                        a new virtual space that allowd you to book coffee chats
                        with sponsors, check out the latest announcements, and
                        find the links to workshops! Access the Virtual Space
                        by registering!
                        <br/><br/>
                     </p>
                     <button id="registerBtn">Register</button>
                  </div>
                </Col>
                <Col sm={6}>
                </Col>
              </Row>
            </Container>
              <div className="space">
                  <img id="spaceImg" src={spaceImg}></img>
              </div>
            </div>
        );
    }
}
