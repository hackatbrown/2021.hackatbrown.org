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
    over18: boolean | null
    firstHack: boolean | null
    travelReimburse: boolean | null
    travelOrigin: string
    gender: string[]
    race: string[]
    website: string
    github: string
    linkedin: string
    resume: any
    findout: string[]
    comments: string
    fileName: string
};

const buttonStyle:React.CSSProperties = {
  textTransform: 'none',
  color: 'white',
  background: 'transparent',
  borderRadius: '16.5px',
  border: '2px solid #FFFFFF',
  height: '40px',
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
            over18: null,
            firstHack: null,
            travelReimburse: null,
            travelOrigin: "",
            gender: [],
            race: [],
            website: "",
            github: "",
            linkedin: "",
            resume: null,
            findout: [],
            comments: "",
            fileName: ""
        };
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleFileUpload = this.handleFileUpload.bind(this);
    }

    /* Functions to change the stage of the form */
    incrementStage = () => {
      if ((this.state.formStage + 1) <= 2 ){
        this.setState({
          formStage: this.state.formStage + 1
        });
      }
    }

    decrementStage = () => {
      if ((this.state.formStage - 1) >= 0) {
        this.setState({
          formStage: this.state.formStage - 1
        });
      }
    }

    /* Function to handle changing state based on submitted data */
    handleFormChange = (event: any) => {
      let name = event.target.id;
      let value = event.target.value;

      console.log(name);
      console.log(value);

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

    handleMultiFormChange = (event: any) => {
      let name = event.target.id;
      let newVals;
      if (name === "gender") {
        newVals = [...this.state.gender];
      } else if (name === "race") {
        newVals = [...this.state.race]
      } else {
        newVals = [...this.state.findout]
      }

      if (event.target.checked) {
        newVals.push(event.target.value);
      } else {
        newVals.splice(newVals.indexOf(event.target.value), 1);
      }

      console.log(newVals);

      this.setState({
        [name]: newVals
      } as any);
    }

    /* Function to handle file uploads */
    handleFileUpload = (event: any) => {
      this.setState({
        resume: event.target.files[0],
        fileName: event.target.files[0].name
      })
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
        linkedin: this.state.linkedin,
        resume: this.state.resume,
        findout: this.state.findout,
        comment: this.state.comments
      };

      /* display contents of registration info for error checking */
      console.log(`Form Details: \n
          First Name: ${registrationInfo.firstName} \n
          Last Name: ${registrationInfo.lastName} \n
          School: ${registrationInfo.school} \n
          Majors: ${registrationInfo.majors} \n
          Graduation Date: ${registrationInfo.gradDate} \n
          Over 18?: ${registrationInfo.over18} \n
          First Hackathon?: ${registrationInfo.firstHack} \n
          Travel Reimbursements?: ${registrationInfo.travelReimburse} \n
          Traveling From: ${registrationInfo.travelOrigin} \n
          Gender: ${registrationInfo.gender} \n
          Race: ${registrationInfo.race} \n
          Website: ${registrationInfo.website} \n
          Github: ${registrationInfo.github} \n
          LinkedIn: ${registrationInfo.linkedin} \n
          Resume: ${registrationInfo.resume} \n
          Findout: ${registrationInfo.findout} \n
          Comment: ${registrationInfo.comment}`
      );

      // send post request
      axios.post('<api link to push form to database>', { registrationInfo })
        .then(res => {
          // depending on what is sent to backend
        })
    }

    /* Form Title list */
    nameList = ["Basic Information", "More Information", "Optional Information"];

    /* Button List */
    basicButtons = (
      <div className="form-buttons">
        <Button className="next" style={buttonStyle} onClick={this.incrementStage}>Next</Button>
      </div>);
    moreButtons = (
      <div className="form-buttons">
        <Button className="back" style={buttonStyle} onClick={this.decrementStage}>Previous</Button>
        <Button className="next" style={buttonStyle} onClick={this.incrementStage}>Next</Button>
      </div>
    );
    submitButtons = (
      <div className="form-buttons">
        <Button className="back" style={buttonStyle} onClick={this.decrementStage}>Previous</Button>
        <Button className="submit" style={buttonStyle} onClick={this.submitForm}>Submit Application</Button>
      </div>
    );
    buttonList = [this.basicButtons, this.moreButtons, this.submitButtons];

    render() {
        /* Components List */
        let basicComp = (<BasicInfo
          currentSelected={this.state}
          handleFormChange={this.handleFormChange}
          incrementStage={this.incrementStage}
          decrementStage={this.decrementStage}/>
        );
        let moreComp = (<MoreInfo
          currentSelected={this.state}
          handleMultiFormChange={this.handleMultiFormChange}
          handleFormChange={this.handleFormChange}
          incrementStage={this.incrementStage}
          decrementStage={this.decrementStage}/>
        );
        let optionalComp = (<OptionalInfo
          currentSelected={this.state}
          handleFileUpload={this.handleFileUpload}
          handleFormChange={this.handleFormChange}
          incrementStage={this.incrementStage}
          decrementStage={this.decrementStage}
          fileName={this.state.fileName}/>
        );
        let compList = [basicComp, moreComp, optionalComp];

        return (
            <div className="registration">
                <div className="form-name">
                  <h1>{this.nameList[this.state.formStage]}</h1>
                </div>
                <div className="form-content">
                  {compList[this.state.formStage]}
                </div>
                <div className="form-progress">
                  <div className="buttons">
                    {this.buttonList[this.state.formStage]}
                  </div>
                  <div className="stage">
                    <p>{this.state.formStage + 1}/3</p>
                  </div>
                </div>
            </div>
        );
    }
}
