import React from "react";
import "./SponsorVideo.css";
import ReactPlayer from "react-player";

/**
 * define a type model for the props you are passing in to the component
 */
type SponsorVideoProps = {};

/**
 * define a type model for the state of the page
 */
type SponsorVideoState = {};

export default class SponsorVideo extends React.Component<
    SponsorVideoProps,
    SponsorVideoState
> {
    constructor(props: SponsorVideoProps) {
        super(props);
    }
    render() {
        return (
            <div className="sponsor-vid">
                <ReactPlayer
                    id="sponsor-promo"
                    url="https://www.youtube.com/watch?v=mOw8sz48-T8&feature=youtu.be"
                    playing
                    controls
                />
            </div>
        );
    }
}
