import React from "react";
import "./BasicInfo.css";
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from '@material-ui/core/Button';

/**
 * define a type model for the props you are passing in to the component
 */
type BasicInfoProps = {
  handleFormChange: (arg0: any) => void
  incrementStage: () => void
  decrementStage: () => void
};

/**
 * define a type model for the state of the page
 */
type BasicInfoState = {};

export default class BasicInfo extends React.Component<
    BasicInfoProps,
    BasicInfoState
> {
    constructor(props: BasicInfoProps) {
        super(props);
    }

    render() {
        return (
            <div className="basic-info">
                <form>
                  <div className="basic-info-1">
                    <TextField
                      id="firstName"
                      placeholder="First Name"
                      margin="normal"
                      onChange={this.props.handleFormChange}
                    />
                    <TextField
                      id="lastName"
                      placeholder="Last Name"
                      margin="normal"
                      onChange={this.props.handleFormChange}
                    />
                  </div>

                  <div className="basic-info-2">
                    <TextField
                      id="school"
                      placeholder="School"
                      margin="normal"
                      onChange={this.props.handleFormChange}
                    />
                    <TextField
                      id="majors"
                      placeholder="Major(s)"
                      margin="normal"
                      onChange={this.props.handleFormChange}
                    />
                  </div>

                  <div className="basic-info-3">
                    <TextField
                      id="gradDate"
                      label="Graduation Date"
                      placeholder="Month/Year"
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={this.props.handleFormChange}
                    />
                  </div>

                  <div className="basic-info-4">
                    <FormControl className="over18">
                      <FormLabel>Will you be over 18 on January 26th?</FormLabel>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox id="over18" value="yes" />}
                          label="Yes"
                          onChange={this.props.handleFormChange}
                        />
                        <FormControlLabel
                          control={<Checkbox id="over18" value="no" />}
                          label="No"
                          onChange={this.props.handleFormChange}
                        />
                      </FormGroup>
                    </FormControl>
                  </div>

                  <div className="basic-info-5">
                    <FormControl className="firstHack">
                      <FormLabel>Is this your first hackathon?</FormLabel>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox id="firstHack" value="yes" />}
                          label="Yes"
                          onChange={this.props.handleFormChange}
                        />
                        <FormControlLabel
                          control={<Checkbox id="firstHack" value="no" />}
                          label="No"
                          onChange={this.props.handleFormChange}
                        />
                      </FormGroup>
                    </FormControl>
                  </div>

                  <div className="basic-info-6">
                    <FormControl className="travelReimburse">
                      <FormLabel>Do you need travel reimbursements?</FormLabel>
                      <FormLabel>*Reimbursements only available for travel within the U.S.</FormLabel>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox id="travelReimburse" value="yes" />}
                          label="Yes"
                          onChange={this.props.handleFormChange}
                        />
                        <FormControlLabel
                          control={<Checkbox id="travelReimburse" value="no" />}
                          label="No"
                          onChange={this.props.handleFormChange}
                        />
                      </FormGroup>
                    </FormControl>
                    <TextField
                      id="travelOrigin"
                      placeholder="Traveling from? (City, State)"
                      margin="normal"
                      onChange={this.props.handleFormChange}
                    />
                  </div>
                </form>
            </div>
        );
    }
}
