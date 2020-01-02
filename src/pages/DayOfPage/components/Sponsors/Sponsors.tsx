import React from "react";
import "./Sponsors.css";
import placeholderImg from "../../../../assets/images/LandingPage/placeholder2.png";
import sponsorsImg from "../../../../assets/images/LandingPage/scene_sponsors_transparent_left1.png";
import facebookImg from "../../../../assets/images/LandingPage/companylogo/facebook.png";
import googleImg from "../../../../assets/images/LandingPage/companylogo/google.png";
import bookbubImg from "../../../../assets/images/LandingPage/companylogo/bookbub.jpg";
import digitalAssetImg from "../../../../assets/images/LandingPage/companylogo/digital-asset.png";
import herokuImg from "../../../../assets/images/LandingPage/companylogo/heroku-purple.png";
import pathRiseimg from "../../../../assets/images/LandingPage/companylogo/pathrise.svg";
import citizensbankImg from "../../../../assets/images/LandingPage/companylogo/Citizens-Logo-1.jpg";
import mouserImg from "../../../../assets/images/LandingPage/companylogo/Mouser.jpg";
import bloombergImg from "../../../../assets/images/LandingPage/companylogo/Bloomberg.png";
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
                    {/* <div className="sponsors-peta">
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
                    </div> */}
                    <div className="sponsors-giga">
                        <h2 className="sponsors-name">Giga</h2>
                        <div className="sponsors-img">
                            <a href="https://www.facebook.com" target="_blank">
                                <img
                                    className="sponsors-img-giga"
                                    src={facebookImg}
                                ></img>
                            </a>
                            <a href="https://digitalasset.com/" target="_blank">
                                <img
                                    className="sponsors-img-giga"
                                    src={digitalAssetImg}
                                ></img>
                            </a>
                        </div>
                    </div>
                    <div className="sponsors-mega">
                        <h2 className="sponsors-name">Mega</h2>
                        <div className="sponsors-img">
                            <a href="https://www.google.com/" target="_blank">
                                <img
                                    className="sponsors-img-mega"
                                    src={googleImg}
                                ></img>
                            </a>
                            <a
                                href="https://www.citizensbank.com"
                                target="_blank"
                            >
                                <img
                                    className="sponsors-img-mega"
                                    src={citizensbankImg}
                                ></img>
                            </a>
                            <a href="https://www.bloomberg.com" target="_blank">
                                <img
                                    className="sponsors-img-mega"
                                    src={bloombergImg}
                                ></img>
                            </a>
                        </div>
                    </div>
                    <div className="sponsors-kilo">
                        <h2 className="sponsors-name">Kilo</h2>
                        <div className="sponsors-img">
                            <a href="https://www.heroku.com/" target="_blank">
                                <img
                                    className="sponsors-img-kilo"
                                    src={herokuImg}
                                ></img>
                            </a>
                        </div>
                    </div>
                    <div className="sponsors-micro">
                        <h2 className="sponsors-name">Micro</h2>
                        <div className="sponsors-img">
                            <a href="https://www.bookbub.com" target="_blank">
                                <img
                                    className="sponsors-img-micro"
                                    src={bookbubImg}
                                ></img>
                            </a>
                            <a href="https://www.pathrise.com" target="_blank">
                                <img
                                    className="sponsors-img-micro"
                                    style={{
                                        padding: "10px",
                                        backgroundColor: "white"
                                    }}
                                    src={pathRiseimg}
                                ></img>
                            </a>
                            <a href="https://www.mouser.com" target="_blank">
                                <img
                                    className="sponsors-img-micro"
                                    style={{
                                        padding: "10px",
                                        backgroundColor: "white"
                                    }}
                                    src={mouserImg}
                                ></img>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="sponsors-img">
                    <img id="sponsors-image" src={sponsorsImg}></img>
                </div>
            </div>
        );
    }
}
