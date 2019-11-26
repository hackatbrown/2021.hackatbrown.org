import React from "react";
import "./BasicInfo.css";
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import NumberFormat from 'react-number-format';


interface currFormSelection {

}
/**
 * define a type model for the props you are passing in to the component
 */
type BasicInfoProps = {
  handleFormChange: (arg0: any) => void
  incrementStage: () => void
  decrementStage: () => void
  currentSelected: {
   [key: string]: string | boolean | any
  }
};

/**
 * define a type model for the state of the page
 */
type BasicInfoState = {
  needReimbursementDisplay: string
};

const textLeft = {
  marginRight: '50px',
  color: 'white'
};

export default class BasicInfo extends React.Component<
    BasicInfoProps,
    BasicInfoState
> {
    constructor(props: BasicInfoProps) {
        super(props);
        this.state = {
          needReimbursementDisplay: "hidden"
        }
    }

    updateTravelReimbursePref = (event: any) => {
      if (event.target.value === "yes") {
        this.setState({
          needReimbursementDisplay: "visible"
        });
      } else if (event.target.value === "no") {
        this.setState({
          needReimbursementDisplay: "hidden"
        });
      }
    }

    render() {
        const dynamicTextField = {
          color: "white",
          width: "130%",
          visibility: this.props.currentSelected['travelReimburse'] ? "visible" : this.state.needReimbursementDisplay
        } as React.CSSProperties;

        console.log(this.props.currentSelected['over18']);
        return (
            <div className="basic-info">
                <form>
                  <div className="basic-info-1">
                    <TextField
                      style={textLeft}
                      id="firstName"
                      defaultValue={this.props.currentSelected['firstName']}
                      placeholder="First Name"
                      margin="normal"
                      onChange={this.props.handleFormChange}
                      InputProps={{
                          style: {
                              color: "white"
                          }
                      }}
                    />
                    <TextField
                      id="lastName"
                      defaultValue={this.props.currentSelected['lastName']}
                      placeholder="Last Name"
                      margin="normal"
                      onChange={this.props.handleFormChange}
                      InputProps={{
                          style: {
                              color: "white"
                          }
                      }}
                    />
                  </div>

                  <div className="basic-info-2">
                    <TextField
                      style={textLeft}
                      id="school"
                      defaultValue={this.props.currentSelected['school']}
                      placeholder="School"
                      margin="normal"
                      onChange={this.props.handleFormChange}
                      InputProps={{
                          style: {
                              color: "white"
                          }
                      }}
                    />
                    <TextField
                      id="majors"
                      defaultValue={this.props.currentSelected['majors']}
                      placeholder="Major(s)"
                      margin="normal"
                      onChange={this.props.handleFormChange}
                      InputProps={{
                          style: {
                              color: "white"
                          }
                      }}
                    />
                  </div>

                  <div className="basic-info-3">
                    <label> Graduation Date </label>
                    <br/>
                    <NumberFormat
                      defaultValue={this.props.currentSelected['gradDate']}
                      placeholder="Month/Year"
                      id="gradDate"
                      onChange={this.props.handleFormChange}
                      customInput={TextField}
                      format="##/##"/>
                  </div>

                  <div className="basic-info-4">
                    <FormControl className="over18">
                      <FormLabel style={{color: "white"}}>Will you be over 18 on January 26th?</FormLabel>
                      <RadioGroup
                        defaultValue={this.props.currentSelected['over18'] == null ?
                        "none" : this.props.currentSelected['over18'] ? "yes" : "no"}>
                      <Grid container spacing={2}>
                          <Grid item >
                            <FormControlLabel
                              style={{color: "white"}}
                              control={<Radio style={{color: "white"}} id="over18" value="yes" />}
                              label="Yes"
                              onChange={this.props.handleFormChange}
                            />
                          </Grid>
                          <Grid item>
                            <FormControlLabel
                              style={{color: "white"}}
                              control={<Radio style={{color: "white"}} id="over18" value="no" />}
                              label="No"
                              onChange={this.props.handleFormChange}
                            />
                          </Grid>
                      </Grid>
                      </RadioGroup>
                    </FormControl>
                  </div>

                  <div className="basic-info-5">
                    <FormControl className="firstHack">
                      <FormLabel style={{color: "white"}}>Is this your first hackathon?</FormLabel>
                      <RadioGroup
                        defaultValue={this.props.currentSelected['firstHack'] == null ?
                        "none" : this.props.currentSelected['firstHack'] ? "yes" : "no"}>
                        <Grid container spacing={2}>
                            <Grid item >
                              <FormControlLabel
                                style={{color: "white"}}
                                control={<Radio style={{color: "white"}} id="firstHack" value="yes" />}
                                label="Yes"
                                onChange={this.props.handleFormChange}
                              />
                            </Grid>
                            <Grid item>
                              <FormControlLabel
                                style={{color: "white"}}
                                control={<Radio style={{color: "white"}} id="firstHack" value="no" />}
                                label="No"
                                onChange={this.props.handleFormChange}
                              />
                            </Grid>
                        </Grid>
                      </RadioGroup>
                    </FormControl>
                  </div>

                  <div className="basic-info-6">
                    <FormControl className="travelReimburse">
                      <FormLabel style={{color: "white"}}>Do you need travel reimbursements?</FormLabel>
                      <FormLabel style={{color: "white"}}>*Reimbursements only available for travel within the U.S.</FormLabel>
                      <RadioGroup
                        defaultValue={this.props.currentSelected['travelReimburse'] == null ?
                        "none" : this.props.currentSelected['travelReimburse'] ? "yes" : "no"}>
                        <Grid container spacing={3}>
                            <Grid item >
                              <FormControlLabel
                                style={{color: "white"}}
                                control={<Radio style={{color: "white"}} id="travelReimburse" value="yes" />}
                                label="Yes"
                                onChange={this.props.handleFormChange}
                                onInput={this.updateTravelReimbursePref}
                              />
                            </Grid>
                            <Grid item>
                              <FormControlLabel
                                style={{color: "white"}}
                                control={<Radio style={{color: "white"}} id="travelReimburse" value="no" />}
                                label="No"
                                onChange={this.props.handleFormChange}
                                onInput={this.updateTravelReimbursePref}
                              />
                            </Grid>
                            <Grid item>
                              <TextField
                                defaultValue={this.props.currentSelected['travelOrigin']}
                                style={dynamicTextField}
                                id="travelOrigin"
                                placeholder="Traveling from? (City, State)"
                                margin="dense"
                                fullWidth
                                onChange={this.props.handleFormChange}
                                InputProps={{
                                    style: {
                                        color: "white"
                                    }
                                }}
                              />
                            </Grid>
                        </Grid>
                      </RadioGroup>
                    </FormControl>
                  </div>
                </form>
            </div>
        );
    }
}
