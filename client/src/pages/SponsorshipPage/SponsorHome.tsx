import React from "react";
import "./SponsorHome.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import banner from './assets/Banner0000.png';

/**
 * define a type model for the props you are passing in to the component
 */
type SponsorHomeProps = {
};

/**
 * define a type model for the state of the page
 */
type SponsorHomeState = {
};

export default class SponsorHome extends React.Component<
    SponsorHomeProps,
    SponsorHomeState
> {
    constructor(props: SponsorHomeProps) {
        super(props);
    }
    render() {
        return (
          <div className="sponsor-home">
            <Container>
              <Row>
                <Col sm={6}>
                  <div className="banner-img-sect">
                    <img id="banner-img" src={banner}></img>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="sponsor-home-blurb">
                    <h1>Sponsoring</h1>

                    <h1>Hack@Brown 2020</h1>
                    <p>Hack@Brown is Brown University’s annual hackathon, and we’re
                    back for the seventh time on January 26-27, 2020.</p>

                    <p>At Hack@Brown 2020, we’ll bring together 500+ students from
                    Brown, RISD, MIT, and other top schools across the country to Providence, RI.</p>

                    <p>In 24 hours, these students will experiment with and create
                    a variety of technical projects using your technologies and APIs.</p>

                    <p>To make it happen, we need some awesome sponsors, and
                    we would love for you to be one of them!</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        );
    }
}
