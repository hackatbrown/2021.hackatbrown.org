import React from "react";
import "./RegistrationPage.css";
import BasicInfo from "./components/BasicInfo/BasicInfo";
import MoreInfo from "./components/MoreInfo/MoreInfo";
import OptionalInfo from "./components/OptionalInfo/OptionalInfo"

/**
 * define a type model for the props you are passing in to the component
 */
type RegistrationProps = {};

/**
 * define a type model for the state of the page
 */
type RegistrationState = {
    state: string;
};

export default class RegistrationPage extends React.Component<
    RegistrationProps,
    RegistrationState
> {
    constructor(props: RegistrationProps) {
        super(props);
        this.state = {
            state: "good"
        };
    }
    render() {
        return (
            <div className="registration">
                <BasicInfo />
                <MoreInfo />
                <OptionalInfo />
            </div>
        );
    }
}
