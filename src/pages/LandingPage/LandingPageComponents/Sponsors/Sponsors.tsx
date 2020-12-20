import React from "react";
import "./Sponsors.css";
import placeholderImg from "../../../../assets/images/LandingPage/placeholder2.png";
import bloombergImg from "../../../../assets/images/LandingPage/companylogo/Bloomberg.png";
import neevaImg from "../../../../assets/images/LandingPage/companylogo/neeva.png";
import sketchImg from "../../../../assets/images/LandingPage/companylogo/sketch.png";

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
          <div className="sponsors-giga sponsors-section">
            <h2 className="sponsors-name">Giga</h2>
            <div className="sponsors-img">
              <a href="#" target="_blank">
                <img id="sponsors-img-giga" src={placeholderImg}></img>
              </a>
              {/* <a href="https://www.facebook.com" target="_blank">
                <img className="sponsors-img-giga" src={facebookImg}></img>
              </a> */}
            </div>
          </div>
          <div className="sponsors-mega sponsors-section">
            <h2 className="sponsors-name">Mega</h2>
            <div className="sponsors-img">
              <a href="#" target="_blank">
                <img id="sponsors-img-mega" src={placeholderImg}></img>
              </a>
            </div>
          </div>
          <div className="sponsors-kilo sponsors-section">
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
          <div className="sponsors-micro sponsors-section">
            <h2 className="sponsors-name">Micro</h2>
            <div className="sponsors-img">
              <a href="https://www.sketch.com/" target="_blank">
                <img
                  className="sponsors-img-micro"
                  style={{
                    padding: "10px",
                    backgroundColor: "white",
                  }}
                  src={sketchImg}
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
