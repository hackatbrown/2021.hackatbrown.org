import React from "react";
import "./VirtualSpace.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FirebaseContextConsumer } from "../../../../components/Firebase/context";
import LoginJoin from "../LoginJoin/LoginJoin";
import spaceImg from "../../../../assets/images/LandingPage/virtual_space.png";

type VirtualProps = {
    hideToolbar: any;
    apiURL: string;
};

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
                    H@B Town
                    </h1>
                    <p className="virtual-blurb-text">
                        To make our events more interactive, we are launching
                        a virtual space that allows you to book coffee chats
                        with sponsors, check out the latest announcements, and
                        find the links to workshops! 
                        <br/><br/>
                        {/* Access the Virtual Space
                        by registering! */}
                        H@B Town will be available on the day of the event!
                        <br/><br/>
                     </p>
                    {/* <FirebaseContextConsumer>
                        {firebase => (
                            <LoginJoin
                                apiURL={this.props.apiURL}
                                firebase={firebase == null ? null : firebase.firebase}
                                hideToolbar={this.props.hideToolbar} />
                        )}
                    </FirebaseContextConsumer> */}
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
