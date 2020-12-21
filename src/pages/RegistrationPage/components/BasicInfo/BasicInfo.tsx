import React from "react";
import "./BasicInfo.css";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import NumberFormat from "react-number-format";

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
        fontFamily: "Akkurat Pro, sans-serif",
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

          <div className="basic-info-3">
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
            <FormControl required className="firstHack">
              <FormLabel style={InputStyles.style}>
                Is this your first hackathon?
              </FormLabel>
              <RadioGroup
                value={
                  this.props.currentSelected["firstHack"] == null
                    ? "none"
                    : this.props.currentSelected["firstHack"]
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
                          id="firstHack"
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
                          id="firstHack"
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

          <div className="basic-info-6">
            <FormControl className="travelReimburse">
              <FormLabel required style={InputStyles.style}>
                Do you need travel reimbursements?
              </FormLabel>
              <FormLabel id="subtext" style={InputStyles.style}>
                Reimbursements only available for travel within the U.S.
              </FormLabel>
              <RadioGroup
                value={
                  this.props.currentSelected["travelReimburse"] == null
                    ? "none"
                    : this.props.currentSelected["travelReimburse"]
                    ? "yes"
                    : "no"
                }
              >
                <Grid container spacing={3}>
                  <Grid item>
                    <FormControlLabel
                      style={InputStyles.style}
                      control={
                        <Radio
                          style={InputStyles.style}
                          id="travelReimburse"
                          value="yes"
                        />
                      }
                      label="Yes"
                      onChange={this.props.handleFormChange}
                      onInput={this.updateTravelReimbursePref}
                    />
                  </Grid>
                  <Grid item>
                    <FormControlLabel
                      style={InputStyles.style}
                      control={
                        <Radio
                          style={InputStyles.style}
                          id="travelReimburse"
                          value="no"
                        />
                      }
                      label="No"
                      onChange={this.props.handleFormChange}
                      onInput={this.updateTravelReimbursePref}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      value={this.props.currentSelected["travelOrigin"]}
                      style={dynamicTextField}
                      id="travelOrigin"
                      placeholder="Traveling from? (City, State)"
                      margin="dense"
                      fullWidth
                      onChange={this.props.handleFormChange}
                      InputProps={InputStyles}
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
