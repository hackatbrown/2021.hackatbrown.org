import React from "react";
import "./Sponsors.css";
import placeholderImg from "../../../../assets/images/LandingPage/placeholder2.png";
import sponsorsImg from "../../../../assets/images/LandingPage/scene_sponsors_transparent_left1.png";
import facebookImg from "../../../../assets/images/LandingPage/companylogo/facebook.png";
import googleImg from "../../../../assets/images/LandingPage/companylogo/google.png";
import bookbubImg from "../../../../assets/images/LandingPage/companylogo/bookbub.jpg";
import assentureImg from "../../../../assets/images/LandingPage/companylogo/accenture.png";
import herokuImg from "../../../../assets/images/LandingPage/companylogo/heroku-purple.png";
import pathRiseimg from "../../../../assets/images/LandingPage/companylogo/pathrise.svg";
import citizensbankImg from "../../../../assets/images/LandingPage/companylogo/Citizens-Logo-1.jpg";
import mouserImg from "../../../../assets/images/LandingPage/companylogo/Mouser.jpg";
import bloombergImg from "../../../../assets/images/LandingPage/companylogo/Bloomberg.png";
import redfinImg from "../../../../assets/images/LandingPage/companylogo/Redfin.jpg";
import ripplematchImg from "../../../../assets/images/LandingPage/companylogo/ripplematch.svg";
import datamnrImg from "../../../../assets/images/LandingPage/companylogo/dataminr.png";
import neevaImg from "../../../../assets/images/LandingPage/companylogo/neeva.png";
import bluesocialImg from "../../../../assets/images/LandingPage/companylogo/bluesocial.png";

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
      state: "good",
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
              {/* <a href="https://www.facebook.com" target="_blank">
                <img className="sponsors-img-giga" src={facebookImg}></img>
              </a> */}
            </div>
          </div>
          <div className="sponsors-mega">
            <h2 className="sponsors-name">Mega</h2>
            <div className="sponsors-img">
              {/* <a href="https://www.google.com/" target="_blank">
                <img
                  className="sponsors-img-mega"
                  src={googleImg}
                  style={{
                    backgroundColor: "white",
                  }}
                ></img>
              </a> */}
            </div>
          </div>
          <div className="sponsors-kilo">
            <h2 className="sponsors-name">Kilo</h2>
            <div className="sponsors-img">
              <a href="https://www.bloomberg.com" target="_blank">
                <img className="sponsors-img-kilo" src={bloombergImg}></img>
              </a>
              <a href="https://www.neeva.co" target="_blank">
                <img className="sponsors-img-kilo" src={neevaImg}></img>
              </a>
            </div>
          </div>
          <div className="sponsors-micro">
            <h2 className="sponsors-name">Micro</h2>
            <div className="sponsors-img">
              {/* 
              <a href="https://ripplematch.com/" target="_blank">
                <img
                  className="sponsors-img-micro"
                  style={{
                    padding: "10px",
                    backgroundColor: "white",
                  }}
                  src={ripplematchImg}
                ></img>
              </a> */}
            </div>
          </div>
        </div>
        {/* <div className="sponsors-img">
          <img id="sponsors-image" src={sponsorsImg}></img>
        </div> */}
        <div className="sponsors-text">
          Interested in sponsoring Hack@Brown? Reach out to us on{" "}
          <a href="mailto:sponsor@hackatbrown.org">
            <b>sponsor@hackatbrown.org</b>
          </a>
          !
        </div>
      </div>
    );
  }
}
