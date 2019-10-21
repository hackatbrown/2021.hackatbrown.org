import React from "react";
import "./SponsorTiers.css";
import Container from 'react-bootstrap/Container';

/**
 * define a type model for the props you are passing in to the component
 */
type SponsorTiersProps = {
};

/**
 * define a type model for the state of the page
 */
type SponsorTiersState = {
};

export default class SponsorTiers extends React.Component<
    SponsorTiersProps,
    SponsorTiersState
> {
    constructor(props: SponsorTiersProps) {
        super(props);
    }
    render() {
        return (
          <div className="sponsor-tiers">
            <Container>
              <h3>Sponsorship Tiers</h3>
            </Container>
          </div>
        );
    }
}
