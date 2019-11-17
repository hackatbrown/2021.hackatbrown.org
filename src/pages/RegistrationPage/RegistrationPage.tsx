import React from "react";
import "./RegistrationPage.css";
import BasicInfo from "./components/BasicInfo/BasicInfo";
import MoreInfo from "./components/MoreInfo/MoreInfo";
import OptionalInfo from "./components/OptionalInfo/OptionalInfo"
import Button from '@material-ui/core/Button';
import axios from 'axios';

/**
 * define a type model for the props you are passing in to the component
 */
type RegistrationProps = {};

/**
 * define a type model for the state of the page
 */
type RegistrationState = {
    /* 0 -> basic information, 1 -> more information, 2 -> optional information */
    formStage: number
    /* form submission information */
    firstName: string
    lastName: string
    school: string
    majors: string
    gradDate: string /* consider changing type */
    over18: boolean
    firstHack: boolean
    travelReimburse: boolean
    travelOrigin: string
    gender: string
    race: string
    website: string
    github: string
    linkedin: string
};

export default class RegistrationPage extends React.Component<
    RegistrationProps,
    RegistrationState
> {
    constructor(props: RegistrationProps) {
        super(props);
        this.state = {
            formStage: 0,
            firstName: "",
            lastName: "",
            school: "",
            majors: "",
            gradDate: "", /* consider changing type */
            over18: true,
            firstHack: true,
            travelReimburse: false,
            travelOrigin: "",
            gender: "",
            race: "",
            website: "",
            github: "",
            linkedin: ""
        };
        this.handleFormChange = this.handleFormChange.bind(this);
    }

    /* Functions to change the stage of the form */
    incrementStage = () => {
      this.setState({
        formStage: this.state.formStage + 1
      });
    }

    decrementStage = () => {
      this.setState({
        formStage: this.state.formStage - 1
      });
    }

    /* Function to handle changing state based on submitted data */
    handleFormChange = (event: any) => {
      let name = event.target.id;
      let value = event.target.value;

      /* case where value is yes/no -> convert to boolean */
      if (value === "yes") {
        value = true;
      } else if (value === "no") {
        value = false;
      }

      this.setState({
        [name]: value
      } as any);

    }

    /* Function that will send data to backend upon form submission */
    submitForm = (event: any) => {
      event.preventDefault();
      const registrationInfo = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        school: this.state.school,
        majors: this.state.majors,
        gradDate: this.state.gradDate,
        over18: this.state.over18,
        firstHack: this.state.firstHack,
        travelReimburse: this.state.travelReimburse,
        travelOrigin: this.state.travelOrigin,
        gender: this.state.gender,
        race: this.state.race,
        website: this.state.website,
        github: this.state.github,
        linkedin: this.state.linkedin
      };

      /* display contents of registration info for error checking */
      alert(`Form Details: \n
          First Name: ${registrationInfo.firstName} \n
          Last Name: ${registrationInfo.lastName} \n
          School: ${registrationInfo.school} \n
          Majors: ${registrationInfo.majors} \n
          Graduation Date: ${registrationInfo.gradDate} \n
          Over 18?: ${registrationInfo.over18} \n
          First Hackathon?: ${registrationInfo.firstHack} \n
          Travel Reimbursements?: ${registrationInfo.travelReimburse} \n
          Traveling From: ${registrationInfo.travelOrigin} \n`
      );

      // send post request
      axios.post('<api link to push form to database>', { registrationInfo })
        .then(res => {
          // depending on what is sent to backend
        })
    }

    /* Form Title list */
    nameList = ["Basic Information", "More Information", "Optional Information"];

    /* Components List */
    basicComp = (<BasicInfo handleFormChange={this.handleFormChange} incrementStage={this.incrementStage} decrementStage={this.decrementStage}/>);
    moreComp = (<MoreInfo handleFormChange={this.handleFormChange} incrementStage={this.incrementStage} decrementStage={this.decrementStage}/>);
    optionalComp = (<OptionalInfo handleFormChange={this.handleFormChange}incrementStage={this.incrementStage} decrementStage={this.decrementStage}/>);
    compList = [this.basicComp, this.moreComp, this.optionalComp];

    /* Button List */
    basicButtons = (
      <div className="form-buttons">
        <Button className="next" onClick={this.incrementStage}>Next</Button>
      </div>);
    moreButtons = (
      <div className="form-buttons">
        <Button className="back" onClick={this.decrementStage}>Back</Button>
        <Button className="next" onClick={this.incrementStage}>Next</Button>
      </div>
    );
    submitButtons = (
      <div className="form-buttons">
        <Button className="back" onClick={this.decrementStage}>Back</Button>
        <Button className="submit" onClick={this.submitForm}>Submit Application</Button>
      </div>
    );
    buttonList = [this.basicButtons, this.moreButtons, this.submitButtons];

    render() {
        return (
            <div className="registration">
                <div className="form-name">
                  <h1>{this.nameList[this.state.formStage]}</h1>
                </div>
                <div className="form-content">
                  {this.compList[this.state.formStage]}
                </div>
                {this.buttonList[this.state.formStage]}
            </div>
        );
    }
}
