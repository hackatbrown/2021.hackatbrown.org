import React from "react";
import "./ConfirmForm.css";
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import NumberFormat from 'react-number-format';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Popper, Paper, ClickAwayListener } from "@material-ui/core";
import axios from "axios";

/**
 * define a type model for the props you are passing in to the component
 */
type ConfirmFormProps = {
  user: any
  apiURL: string
  formSubmittedRender: () => void
  handleFormChange: (arg0: any) => void
  handleMultiFormChange: (arg0: any) => void
  handleDisableAll: (arg0: any) => void
  currentSelected: {
   [key: string]: string | boolean | any
 }
};

/**
 * define a type model for the state of the page
 */
type ConfirmFormState = {
  projectUndecided: boolean;
  errorMessage: string;
};

let dietary = ["vegetarian", "vegan", "kosher", "halal", "nut-allergy", "shellfish-allergy"];
let dietaryLabels = ["Vegetarian", "Vegan", "Kosher", "Halal", "Nut Allergy", "Shellfish Allergy"];

let projects = ["web", "ios", "android", "hardware", "undecided"];
let projectsLabels = ["Web Application", "iOS Application", "Android Application", "Hardware Hack", "Undecided"];

const textLeft = {
  marginRight: '50px',
  color: 'white'
};

const buttonStyle: React.CSSProperties = {
    textTransform: "none",
    color: "white",
    background: "transparent",
    borderRadius: "16.5px",
    border: "2px solid #FFFFFF",
    height: "40px",
    fontSize: "10px"
};


export default class ConfirmForm extends React.Component<
    ConfirmFormProps,
    ConfirmFormState
> {
    constructor(props: ConfirmFormProps) {
        super(props);
        this.state = {
          projectUndecided: this.props.currentSelected['projects'].includes("undecided"),
          errorMessage: ""
        }
    }

    isChecked = (id:string, value:string) => {
      return this.props.currentSelected[id].includes(value)
    }

    disableRestProjects = (event:any) => {
      this.props.handleDisableAll(event);
      this.setState({
        projectUndecided: this.state.projectUndecided ? false: true,
      });
    }

    checkMissing = () => {
        if (this.props.currentSelected.size === "" ||
            this.props.currentSelected.legalFirstName.trim() === "" ||
            this.props.currentSelected.legalLastName.trim() === "" ||
            this.props.currentSelected.phoneNumber.trim() === "" ||
            this.props.currentSelected.projects.length === 0 ||
            this.props.currentSelected.requireHost === null ||
            this.props.currentSelected.brownStudent === null ||
            this.props.currentSelected.willingHost === null ||
            this.props.currentSelected.conduct === null) {

          return "You are missing required field(s)!";
        } else {
          return null;
        }
    };

    submitForm = (event:any) => {
        event.preventDefault();
        let errorMessage: string | null = this.checkMissing();
        if (errorMessage == null) {
          const confirmData = {
              sweater_size: this.props.currentSelected.size,
              legal_first: this.props.currentSelected.legalFirstName,
              legal_last: this.props.currentSelected.legalLastName,
              phone: this.props.currentSelected.phoneNumber,
              dietary: this.props.currentSelected.dietary,
              projects: this.props.currentSelected.projects,
              require_host: this.props.currentSelected.requireHost,
              brown_student: this.props.currentSelected.brownStudent,
              willing_host: this.props.currentSelected.willingHost,
              conduct: this.props.currentSelected.conduct
          };
          console.log(confirmData);

          const api = this.props.apiURL;
          let session = this;
          this.props.user
              .getIdToken(true)
              .then(async function(idToken: string) {
                  var confirmForm = new FormData();
                  confirmForm.append(
                      "data",
                      JSON.stringify(confirmData)
                  );
                  confirmForm.append("fire_token", idToken);
                  const config = {
                      headers: {
                          "Content-Type": "application/x-www-form-urlencoded"
                      }
                  };
                  await axios
                      .post(
                          api + "/hacker_registration/submit", // TODO: CORRECT URL PATH
                          confirmForm,
                          config
                      )
                      .then(res => {
                        session.props.formSubmittedRender();
                      });
              })
              .catch(function(error: any) {
              });
        } else {
            this.setState({
              errorMessage: errorMessage
            });
        }
    };

    render() {
        return (
          <div className="confirm-info">
            <h3> Awesome :) </h3>
            <p> We can't wait to meet you in person. In the meantime, we have a couple
            more questions to make sure you have a great time: </p>
            <form>
              <div className="confirm">
                <FormControl className="size">
                  <FormLabel style={{color: "white"}}>Sweatshirt Size</FormLabel>
                  <RadioGroup
                    value={this.props.currentSelected['size'] == null ?
                    "none" : this.props.currentSelected['size']}>
                  <Grid container spacing={3}>
                      <Grid item >
                        <FormControlLabel
                          style={{color: "white"}}
                          control={<Radio style={{color: "white"}} id="size" value="small" />}
                          label="S"
                          onChange={this.props.handleFormChange}
                        />
                      </Grid>
                      <Grid item>
                        <FormControlLabel
                          style={{color: "white"}}
                          control={<Radio style={{color: "white"}} id="size" value="medium" />}
                          label="M"
                          onChange={this.props.handleFormChange}
                        />
                      </Grid>
                      <Grid item>
                        <FormControlLabel
                          style={{color: "white"}}
                          control={<Radio style={{color: "white"}} id="size" value="large" />}
                          label="L"
                          onChange={this.props.handleFormChange}
                        />
                      </Grid>
                  </Grid>
                  </RadioGroup>
                </FormControl>
              </div>

              <div className="confirm-text">
                <FormLabel style={{color: "white"}}>Legal Name (in case of an emergency)</FormLabel>
                <div className="legal-name">
                  <TextField
                    placeholder="First Name"
                    autoComplete="new-password"
                    style={textLeft}
                    id="legalFirstName"
                    value={this.props.currentSelected['legalFirstName']}
                    margin="normal"
                    onChange={this.props.handleFormChange}
                    InputProps={{
                        style: {
                            color: "white"
                        }
                    }}
                  />
                  <TextField
                    id="legalLastName"
                    value={this.props.currentSelected['legalLastName']}
                    placeholder="Last Name"
                    autoComplete="new-password"
                    margin="normal"
                    onChange={this.props.handleFormChange}
                    InputProps={{
                        style: {
                            color: "white"
                        }
                    }}
                  />
                </div>
              </div>

              <div className="confirm-text">
                <FormLabel style={{color: "white"}}>Phone Number</FormLabel>
                <br/>
                <NumberFormat
                  value={this.props.currentSelected['phoneNumber']}
                  format="(###) ###-####"
                  id="phoneNumber"
                  autoComplete="new-password"
                  customInput={TextField}
                  onChange={this.props.handleFormChange}
                />
              </div>

              <div className="confirm-select">
                <FormLabel style={{color: "white"}}>Dietary Restrictions</FormLabel>
                {dietary.slice(0, dietary.length).map((value, index) => {
                  return <div className="options">
                    <FormControlLabel
                    control={<Checkbox style={{color: "white"}} checked={this.isChecked("dietary", value)} id="dietary" value={value} />}
                    label={dietaryLabels[index]}
                    onChange={this.props.handleMultiFormChange}
                    />
                  </div>
                })}
              </div>

              <div className="confirm-select">
                <FormLabel style={{color: "white"}}>What kind of project are you planning to make or learn about?</FormLabel>
                <p> You can always change this! Having a better idea of what hackers are interested in helps us support you. </p>
                {projects.slice(0, projects.length - 1).map((value, index) => {
                  return <div className="options">
                    <FormControlLabel
                    control={<Checkbox disabled={this.state.projectUndecided} style={{color: "white"}} checked={this.isChecked("projects", value)} id="projects" value={value} />}
                    label={projectsLabels[index]}
                    onChange={this.props.handleMultiFormChange}
                    />
                  </div>
                })}
                <div className="options">
                  <FormControlLabel
                  control={<Checkbox onClick={this.disableRestProjects} style={{color: "white"}} checked={this.isChecked("projects", "undecided")} id="projects" value={"undecided"} />}
                  label={projectsLabels[projects.length - 1]}
                  onChange={this.props.handleDisableAll}
                  />
                </div>
            </div>

            <div className="confirm">
              <FormControl className="requireHost">
                <FormLabel style={{color: "white"}}>Need somewhere to stay before or after the hackathon?</FormLabel>
                <p> Hack@Brown is more than happy to host students who will be arriving early on Friday or leaving
                late after Sunday. We have plenty of sleeping spaces and air mattresses during the hackathon, but we
                will also have a limited number of spots for staying in a dorm Saturday night. If you require housing,
                we will send you a form to match you with a Brown/RISD student in the weeks preceding the hackathon.</p>
                <RadioGroup
                  value={this.props.currentSelected['requireHost'] == null ?
                  "none" : this.props.currentSelected['requireHost'] ? "yes" : "no"}>
                  <FormControlLabel
                    style={{color: "white"}}
                    control={<Radio style={{color: "white"}} id="requireHost" value="yes" />}
                    label="I need a host"
                    onChange={this.props.handleFormChange}
                  />
                  <FormControlLabel
                    style={{color: "white"}}
                    control={<Radio style={{color: "white"}} id="requireHost" value="no" />}
                    label="I don't need a host"
                    onChange={this.props.handleFormChange}
                  />
                </RadioGroup>
              </FormControl>
            </div>

            <div className="confirm">
              <FormControl className="brownStudent">
                <FormLabel style={{color: "white"}}>Are you a Brown student living on campus?</FormLabel>
                <RadioGroup
                  value={this.props.currentSelected['brownStudent'] == null ?
                  "none" : this.props.currentSelected['brownStudent'] ? "yes" : "no"}>
                  <FormControlLabel
                    style={{color: "white"}}
                    control={<Radio style={{color: "white"}} id="brownStudent" value="yes" />}
                    label="Yes"
                    onChange={this.props.handleFormChange}
                  />
                  <FormControlLabel
                    style={{color: "white"}}
                    control={<Radio style={{color: "white"}} id="brownStudent" value="no" />}
                    label="No"
                    onChange={this.props.handleFormChange}
                  />
                </RadioGroup>
              </FormControl>
            </div>

            <div className="confirm">
              <FormControl className="willingHost">
                <FormLabel style={{color: "white"}}>Are you willing to host a hacker?</FormLabel>
                <p> All you need is a place on the floor & we'll provide everything else (air mattresses,
                blankets, etc.). We'll send out a form asking for more details in the following weeks! </p>
                <h5> <strong> Why should you host? </strong></h5>
                <p> - You'll get to meet a new friend from across the country! </p>
                <p> - You'll get to show them how cool Brown students are and why Providence was named the coolest
                city in the US by GQ in 2015. </p>
                <p> - Someone will be really grateful that you gave them a warm place to stay and a place to shower.
                We can all agree that showers are great </p>
                <RadioGroup
                  value={this.props.currentSelected['willingHost'] == null ?
                  "none" : this.props.currentSelected['willingHost'] ? "yes" : "no"}>
                  <FormControlLabel
                    style={{color: "white"}}
                    control={<Radio style={{color: "white"}} id="willingHost" value="yes" />}
                    label="Yes! I'll host a hacker"
                    onChange={this.props.handleFormChange}
                  />
                  <FormControlLabel
                    style={{color: "white"}}
                    control={<Radio style={{color: "white"}} id="willingHost" value="no" />}
                    label="No :("
                    onChange={this.props.handleFormChange}
                  />
                </RadioGroup>
              </FormControl>
            </div>

            <div className="confirm">
              <FormControl className="conduct">
                <FormLabel style={{color: "white"}}>Please read over the Hack@Brown code of conduct.</FormLabel>
                <RadioGroup
                  value={this.props.currentSelected['conduct'] == null ?
                  "none" : this.props.currentSelected['conduct'] ? "yes" : "no"}>
                  <FormControlLabel
                    style={{color: "white"}}
                    control={<Radio style={{color: "white"}} id="conduct" value="yes" />}
                    label="I have read over and agree to the Hack@Brown code of conduct."
                    onChange={this.props.handleFormChange}
                  />
                </RadioGroup>
              </FormControl>
            </div>

            <Button
                className="submit"
                style={buttonStyle}
                onClick={this.submitForm}
            >
                Submit
            </Button>

            <div
                className="error"
                style={{
                    paddingTop: "1em",
                    paddingBottom: "1em",
                }}
            >
                {this.state.errorMessage}
            </div>

          </form>
        </div>
      );
    }
}
