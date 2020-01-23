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
              <h3 className="tiers-header">Sponsorship Tiers</h3>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <th></th>
                        <th>micro<br/><span className="amount">$600</span></th>
                        <th>kilo<br/><span className="amount">$1.5k</span></th>
                        <th>mega<br/><span className="amount">$3k</span></th>
                        <th>giga<br/><span className="amount">$5k</span></th>
                        <th>tera<br/><span className="amount">$10k</span></th>
                        <th>peta<br/><span className="amount">$20k</span></th>
                    </thead>

                    <tbody className="day-of">
                        <tr>
                            <td className="category" colSpan={7}>Day-of Benefits</td>
                        </tr>
                        <tr>
                            <td>Send Representatives</td>



                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12"><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>

                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12"><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>

                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12"><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>

                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>

                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>

                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>


                                        </tr>
                                        <tr>
                                            <td>Table @ Sponsorship Fair</td>



                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>

                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>

                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>

                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>

                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>

                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>


                                        </tr>
                                        <tr>
                                            <td>Permanent Sponsor Table in Hacking Room</td>


                            <td></td>

                            <td></td>


                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>

                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>

                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>

                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>


                                        </tr>
                                        <tr>
                                            <td>Award Custom Prize</td>


                            <td></td>

                            <td></td>

                            <td></td>


                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>

                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>

                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>


                                        </tr>
                                        <tr>
                                            <td>Pre-Hackathon Tech Talk</td>


                            <td></td>

                            <td></td>

                            <td></td>


                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>

                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>

                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>


                                        </tr>
                                        <tr>
                                            <td>Host a Workshop/Demo</td>


                            <td></td>

                            <td></td>

                            <td></td>

                            <td></td>


                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>

                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>


                                        </tr>
                                        <tr>
                                            <td>Seat on Diversity + Inclusion Panel</td>


                            <td></td>

                            <td></td>

                            <td></td>

                            <td></td>


                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>

                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>


                                        </tr>
                                    </tbody>
                                    <tbody className="branding">
                                        <tr>
                                            <td className="category" colSpan={7}>Branding Awareness</td>
                                        </tr>
                                        <tr>
                                            <td>Logo on Website and Program</td>



                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>

                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>

                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>

                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>

                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>

                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>


                                        </tr>
                                        <tr>
                                            <td>Post-Hackathon Recruiting/API Email</td>


                            <td></td>


                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>

                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>

                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>

                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>

                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>


                                        </tr>
                                        <tr>
                                            <td>Company Blurb in Program</td>


                            <td></td>

                            <td></td>


                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>

                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>

                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>

                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>


                                        </tr>
                                        <tr>
                                            <td>Include Swag in Swag Bag</td>


                            <td></td>

                            <td></td>

                            <td></td>


                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>

                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>

                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>


                                        </tr>
                                        <tr>
                                            <td>Sponsored Raffles</td>


                            <td></td>

                            <td></td>

                            <td></td>

                            <td></td>


                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>

                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>


                                        </tr>
                                        <tr>
                                            <td>Hack@Brown: Sponsored by &lt;You&gt;</td>


                            <td></td>

                            <td></td>

                            <td></td>

                            <td></td>

                            <td></td>


                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>


                                        </tr>
                                    </tbody>

                                    <tbody className="recruiting">
                                        <tr>
                                            <td className="category" colSpan={7}>Recruiting</td>
                                        </tr>
                                        <tr>
                                            <td>Distribute Recruiting Materials</td>



                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>

                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>

                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>

                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>

                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>

                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>


                                        </tr>
                                        <tr>
                                            <td>Access to Resumes, Portfolios, + Websites</td>


                            <td></td>

                            <td></td>


                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>

                            <td className="check">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="-297 391 16 12" ><path d="M-281 393l-2-2 -8 8 -4-4 -2 2 6 6L-281 393z"/></svg>
                            </td>


                            <td className="check">Pre-Event</td>
                            <td className="check">Pre-Event</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </Container>
          </div>
        );
    }
}
