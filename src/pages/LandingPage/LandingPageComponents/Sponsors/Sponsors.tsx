import React from "react";
import "./Sponsors.css";
import placeholderImg from "../../../../assets/images/LandingPage/placeholder2.png";
import bloombergImg from "../../../../assets/images/LandingPage/companylogo/Bloomberg.png";
import neevaImg from "../../../../assets/images/LandingPage/companylogo/neeva.png";
import sketchImg from "../../../../assets/images/LandingPage/companylogo/sketch.png";
import wolframImg from "../../../../assets/images/LandingPage/companylogo/wolfram.png";
import googleCloudImg from "../../../../assets/images/LandingPage/companylogo/googleCloud.png";
import blueSocialImg from "../../../../assets/images/LandingPage/companylogo/bluesocial.png";
import mouserImg from "../../../../assets/images/LandingPage/companylogo/Mouser.jpg";

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
          {/* <div className="sponsors-giga sponsors-section">
            <h2 className="sponsors-name">Giga</h2>
            <div className="sponsors-img">
            </div>
          </div>
          <div className="sponsors-mega sponsors-section">
            <h2 className="sponsors-name">Mega</h2>
            <div className="sponsors-img">
            </div>
          </div> */}
          <div className="sponsors-kilo sponsors-section">
            <h2 className="sponsors-name">Kilo</h2>
            <div className="sponsors-img">
              <a
                href="https://www.bloomberg.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="sponsors-img-kilo"
                  src={bloombergImg}
                  alt="bloomberg"
                ></img>
              </a>
              <a
                href="https://www.neeva.co"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="sponsors-img-kilo"
                  src={neevaImg}
                  alt="neeva"
                ></img>
              </a>
              <a
                href="https://blue.social/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="sponsors-img-kilo"
                  src={blueSocialImg}
                  alt="blue social"
                ></img>
              </a>
            </div>
          </div>
          <div className="sponsors-micro sponsors-section">
            <h2 className="sponsors-name">Micro</h2>
            <div className="sponsors-img">
              <a
                href="https://www.sketch.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="sponsors-img-micro"
                  style={{
                    padding: "10px",
                    backgroundColor: "white",
                  }}
                  src={sketchImg}
                  alt="sketch"
                ></img>
              </a>
              <a
                href="https://www.wolfram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="sponsors-img-micro"
                  style={{
                    padding: "10px",
                    backgroundColor: "white",
                  }}
                  src={wolframImg}
                  alt="wolfram"
                ></img>
              </a>
              <a
                href="https://www.mouser.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="sponsors-img-micro"
                  style={{
                    padding: "10px",
                    backgroundColor: "white",
                  }}
                  src={mouserImg}
                  alt="mouser electronics"
                ></img>
              </a>
            </div>
            <div className="partnership">
              <p>In partnership with</p>
              <a
                href="https://cloud.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="sponsors-img-micro"
                  style={{
                    backgroundColor: "white",
                    width: "15%",
                  }}
                  src={googleCloudImg}
                  alt="google cloud"
                ></img>
              </a>
            </div>
          </div>
        </div>
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
