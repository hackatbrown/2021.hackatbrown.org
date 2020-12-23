import React from "react";
import "./BasicInfo.css";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import RadioGroup from "@material-ui/core/RadioGroup";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";

/**
 * define a type model for the props you are passing in to the component
 */
type BasicInfoProps = {
  handleFormChange: (arg0: any) => void;
  incrementStage: () => void;
  decrementStage: () => void;
  currentSelected: {
    [key: string]: string | boolean | any;
  };
};

/**
 * define a type model for the state of the page
 */
type BasicInfoState = {
  needReimbursementDisplay: string;
};

const textLeft = {
  marginRight: "50px",
  color: "white",
};

export default class BasicInfo extends React.Component<
  BasicInfoProps,
  BasicInfoState
> {
  constructor(props: BasicInfoProps) {
    super(props);
    this.state = {
      needReimbursementDisplay: "hidden",
    };
  }

  updateTravelReimbursePref = (event: any) => {
    if (event.target.value === "yes") {
      this.setState({
        needReimbursementDisplay: "visible",
      });
    } else if (event.target.value === "no") {
      this.setState({
        needReimbursementDisplay: "hidden",
      });
    }
  };

  limit = (val: string, max: string) => {
    if (val.length === 1 && val[0] > max[0]) {
      val = "0" + val;
    }

    if (val.length === 2) {
      if (Number(val) === 0) {
        val = "01";

        //this can happen when user paste number
      } else if (val > max) {
        val = max;
      }
    }

    return val;
  };

  gradDateFormat = (val: string) => {
    let month = this.limit(val.substring(0, 2), "12");
    let year = val.substring(2, 4);

    return month + (year.length ? "/" + year : "");
  };

  render() {
    const dynamicTextField = {
      color: "white",
      width: "130%",
      visibility: this.props.currentSelected["travelReimburse"]
        ? "visible"
        : this.state.needReimbursementDisplay,
    } as React.CSSProperties;

    const InputStyles = {
      style: {
        color: "white",
        fontFamily: "Inter",
        fontWeight: 100,
      },
    };

    return (
      <div className="basic-info">
        <p> *Required </p>
        <form>
          <div className="basic-info-1">
            <TextField
              required
              label="First Name"
              autoComplete="new-password"
              style={textLeft}
              id="firstName"
              value={this.props.currentSelected["firstName"]}
              margin="normal"
              onChange={this.props.handleFormChange}
              InputProps={InputStyles}
              InputLabelProps={InputStyles}
            />
            <TextField
              id="lastName"
              value={this.props.currentSelected["lastName"]}
              required
              label="Last Name"
              autoComplete="new-password"
              margin="normal"
              onChange={this.props.handleFormChange}
              InputProps={InputStyles}
              InputLabelProps={InputStyles}
            />
          </div>

          <div className="basic-info-2">
            <TextField
              style={textLeft}
              id="school"
              value={this.props.currentSelected["school"]}
              label="School"
              autoComplete="new-password"
              required
              margin="normal"
              onChange={this.props.handleFormChange}
              InputProps={InputStyles}
              InputLabelProps={InputStyles}
            />
            <TextField
              id="majors"
              value={this.props.currentSelected["majors"]}
              label="Major(s)"
              required
              margin="normal"
              autoComplete="new-password"
              onChange={this.props.handleFormChange}
              InputProps={InputStyles}
              InputLabelProps={InputStyles}
            />
          </div>

          <div className="basic-info-5">
            <div style={textLeft}>
              <label> Graduation Date * </label>
              <br />
              <NumberFormat
                value={this.props.currentSelected["gradDate"]}
                placeholder="MM/YY"
                id="gradDate"
                autoComplete="new-password"
                onChange={this.props.handleFormChange}
                customInput={TextField}
                format={this.gradDateFormat}
                InputProps={InputStyles}
                InputLabelProps={InputStyles}
              />
            </div>
            <div style={{ position: "relative", bottom: "2px" }}>
              <TextField
                id="phoneNumber"
                value={this.props.currentSelected["phoneNumber"]}
                required
                label="Phone Number"
                autoComplete="new-password"
                margin="normal"
                onChange={this.props.handleFormChange}
                InputProps={InputStyles}
                InputLabelProps={InputStyles}
              />
            </div>
          </div>

          <div className="basic-info-4">
            <FormControl required className="over18">
              <FormLabel style={InputStyles.style}>
                Will you be over 18 on January 26th?
              </FormLabel>
              <RadioGroup
                value={
                  this.props.currentSelected["over18"] == null
                    ? "none"
                    : this.props.currentSelected["over18"]
                    ? "yes"
                    : "no"
                }
              >
                <Grid container spacing={2}>
                  <Grid item>
                    <FormControlLabel
                      style={InputStyles.style}
                      control={
                        <Radio
                          style={InputStyles.style}
                          id="over18"
                          value="yes"
                        />
                      }
                      label="Yes"
                      onChange={this.props.handleFormChange}
                    />
                  </Grid>
                  <Grid item>
                    <FormControlLabel
                      style={InputStyles.style}
                      control={
                        <Radio
                          style={InputStyles.style}
                          id="over18"
                          value="no"
                        />
                      }
                      label="No"
                      onChange={this.props.handleFormChange}
                    />
                  </Grid>
                </Grid>
              </RadioGroup>
            </FormControl>
          </div>

          <div className="basic-info-5">
            <div className="confirm">
              <FormControl className="mlhConduct">
                <FormGroup>
                  <FormControlLabel
                    style={{ color: "white", width: "min(550px, 80vw)" }}
                    control={
                      <Checkbox
                        style={{ color: "white" }}
                        checked={this.props.currentSelected["mlhConduct"]}
                        id="mlhConduct"
                        value={
                          this.props.currentSelected["mlhConduct"]
                            ? "no"
                            : "yes"
                        }
                      />
                    }
                    label={
                      <div>
                        <span>I have read and agree to the </span>
                        <a
                          href={
                            "https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          MLH Code of Conduct{" "}
                        </a>
                      </div>
                    }
                    onChange={this.props.handleFormChange}
                  />
                </FormGroup>
              </FormControl>
            </div>
          </div>

          <div className="basic-info-6">
            <div className="confirm">
              <FormControl className="mlhPrivacy">
                <FormGroup>
                  <FormControlLabel
                    style={{ color: "white", width: "min(550px, 80vw)" }}
                    control={
                      <Checkbox
                        style={{ color: "white" }}
                        checked={this.props.currentSelected["mlhPrivacy"]}
                        id="mlhPrivacy"
                        value={
                          this.props.currentSelected["mlhPrivacy"]
                            ? "no"
                            : "yes"
                        }
                      />
                    }
                    label={
                      <div>
                        <span>
                          I authorize you to share my application/registration
                          information for event administration, ranking, MLH
                          adminstration, pre- and post- event informational
                          e-mails, and occasional messages about hackathons
                          in-line with{" "}
                          <a
                            href={"https://mlh.io/privacy"}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            MLH Privacy Policy{" "}
                          </a>
                          <span>
                            . I further agree to the terms of both the{" "}
                          </span>
                          <a
                            href={
                              "https://github.com/MLH/mlh-policies/blob/master/prize-terms-and-conditions/contest-terms.md"
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            MLH Contest Teams and Conditions
                          </a>
                          <span> and the </span>
                          <a
                            href={"https://mlh.io/privacy"}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white !important" }}
                          >
                            MLH Privacy Policy
                          </a>
                          .
                        </span>
                      </div>
                    }
                    onChange={this.props.handleFormChange}
                  />
                </FormGroup>
              </FormControl>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
