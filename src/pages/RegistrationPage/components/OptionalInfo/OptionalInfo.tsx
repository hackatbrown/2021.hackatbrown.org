import React from "react";
import "./OptionalInfo.css";
import Button from '@material-ui/core/Button';

/**
 * define a type model for the props you are passing in to the component
 */
 type OptionalInfoProps = {
   handleFormChange: (arg0: any) => void
   incrementStage: () => void
   decrementStage: () => void
 };

/**
 * define a type model for the state of the page
 */
type OptionalInfoState = {};

export default class OptionalInfo extends React.Component<
    OptionalInfoProps,
    OptionalInfoState
> {
    constructor(props: OptionalInfoProps) {
        super(props);
    }
    render() {
        return (
            <div className="optional-info">
            </div>
        );
    }
}
