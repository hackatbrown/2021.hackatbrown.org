import React from "react";
import "./Sponsors.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import placeholderImg from "../../../../assets/images/LandingPage/placeholder2.png"
import sponsorsImg from "../../../../assets/images/LandingPage/placeholder.png";

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
                <div className="sponsors-heading">
                    <h1>Sponsors</h1>
                </div>
                <div className="sponsors-items">
                    <div className="sponsors-peta">
                        <h2 className="sponsors-name">Peta</h2>
                        <div className="sponsors-img">
                            <img className="sponsors-img-peta" src={placeholderImg}></img>
                            <img className="sponsors-img-peta" src={placeholderImg}></img>
                            <img className="sponsors-img-peta" src={placeholderImg}></img>
                            <img className="sponsors-img-peta" src={placeholderImg}></img>
                        </div>
                    </div>
                    <div className="sponsors-tera">
                        <h2 className="sponsors-name">Tera</h2>
                        <div className="sponsors-img">
                            <img className="sponsors-img-tera" src={placeholderImg}></img>
                            <img className="sponsors-img-tera" src={placeholderImg}></img>
                            <img className="sponsors-img-tera" src={placeholderImg}></img>
                            <img className="sponsors-img-tera" src={placeholderImg}></img>
                        </div>
                    </div>
                    <div className="sponsors-giga">
                        <h2 className="sponsors-name">Giga</h2>
                        <div className="sponsors-img">
                            <img className="sponsors-img-giga" src={placeholderImg}></img>
                            <img className="sponsors-img-giga" src={placeholderImg}></img>
                            <img className="sponsors-img-giga" src={placeholderImg}></img>
                            <img className="sponsors-img-giga" src={placeholderImg}></img>
                        </div>
                    </div>
                    <div className="sponsors-mega">
                        <h2 className="sponsors-name">Mega</h2>
                        <div className="sponsors-img">
                            <img className="sponsors-img-mega" src={placeholderImg}></img>
                            <img className="sponsors-img-mega" src={placeholderImg}></img>
                            <img className="sponsors-img-mega" src={placeholderImg}></img>
                            <img className="sponsors-img-mega" src={placeholderImg}></img>
                        </div>
                    </div>
                    <div className="sponsors-kilo">
                        <h2 className="sponsors-name">Kilo</h2>
                        <div className="sponsors-img">
                            <img className="sponsors-img-kilo" src={placeholderImg}></img>
                            <img className="sponsors-img-kilo" src={placeholderImg}></img>
                            <img className="sponsors-img-kilo" src={placeholderImg}></img>
                            <img className="sponsors-img-kilo" src={placeholderImg}></img>
                        </div>
                    </div>
                    <div className="sponsors-micro">
                        <h2 className="sponsors-name">Micro</h2>
                        <div className="sponsors-img">
                            <img className="sponsors-img-micro" src={placeholderImg}></img>
                            <img className="sponsors-img-micro" src={placeholderImg}></img>
                            <img className="sponsors-img-micro" src={placeholderImg}></img>
                            <img className="sponsors-img-micro" src={placeholderImg}></img>
                        </div>
                    </div>
                    <div className="sponsors-img">
                        <img id="sponsors-image" src={sponsorsImg}></img>
                    </div>
                </div>
            </div>
        );
    }
}
