import React from "react";
import "./faq.css";
import faqImg from "../../../../assets/images/LandingPage/faq.gif";

type FAQprops = {};

type FAQstate = {
    state: string;
};

export default class FAQ extends React.Component<FAQprops, FAQstate> {
    constructor(props: FAQprops) {
        super(props);
        this.state = {
            state: "good"
        };
    }
    render() {
        return (
            <div className="faq">
                <div className="faq-text">
                    <div className="faq-header">
                        <h1>F.A.Q</h1>
                    </div>

                    <div className="faq-1">
                        <h4>Who can attend?</h4>
                        <p>
                            All undergraduate and graduate students are welcome.
                        </p>
                    </div>
                    <br></br>
                    <div className="faq-2">
                        <h4>I don't have a team. Can I still participate???</h4>
                        <p>
                            Of course! It is not necessary to have a team prior
                            to coming to Hack@Brown. We’ll have some fun
                            team-forming sessions where you can find an awesome
                            group of people to work with. You’re welcome to have
                            up to four people on a team.
                        </p>
                    </div>
                    <br></br>
                    <div className="faq-3">
                        <h4>
                           
                        </h4>
                        <p>
                           
                        </p>
                    </div>
                </div>

                <div className="faq-img-div">
                    <img id="faq-img" src={faqImg}></img>
                </div>
            </div>
        );
    }
}
