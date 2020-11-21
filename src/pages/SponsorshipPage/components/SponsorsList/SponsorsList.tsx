import React from "react";
import "./SponsorTiers.css";
import Container from 'react-bootstrap/Container';

/**
 * define a type model for the props you are passing in to the component
 */
type SponsorsListProps = {
};

/**
 * define a type model for the state of the page
 */
type SponsorsListState = {
};

export default class SponsorsList extends React.Component< 
    SponsorsListProps,
    SponsorsListState
> {
    constructor(props: SponsorsListProps){
        super(props);
    }
    render() {
        return (
            <div id="sponsors">
    <div className="sponsors">
        <div className="sponsors-heading">
            <h1>Sponsors</h1>
        </div>
        <div className="sponsors-items">
            <div className="sponsors-giga">
                <h2 className="sponsors-name">Giga</h2>
                <div className="sponsors-img"></div>
            </div>
            <div className="sponsors-mega">
                <h2 className="sponsors-name">Mega</h2>
                <div className="sponsors-img"></div>
            </div>
            <div className="sponsors-kilo">
                <h2 className="sponsors-name">Kilo</h2>
                <div className="sponsors-img"></div>
            </div>
            <div className="sponsors-micro">
                <h2 className="sponsors-name">Micro</h2>
                <div className="sponsors-img"></div>
            </div>
        </div>
        <div className="sponsors-img">
            
        </div>
    </div>
</div>
        );
    }
}