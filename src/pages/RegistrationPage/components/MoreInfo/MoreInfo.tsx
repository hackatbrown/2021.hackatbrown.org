import React from "react";
import "./MoreInfo.css";
import Button from '@material-ui/core/Button';

/**
 * define a type model for the props you are passing in to the component
 */
 type MoreInfoProps = {
   handleFormChange: (arg0: any) => void
   incrementStage: () => void
   decrementStage: () => void
 };

/**
 * define a type model for the state of the page
 */
type MoreInfoState = {};

export default class MoreInfo extends React.Component<
    MoreInfoProps,
    MoreInfoState
> {
    constructor(props: MoreInfoProps) {
        super(props);
    }
    render() {
        return (
            <div className="more-info">
            </div>
        );
    }
}
