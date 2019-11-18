import React from "react";
import "./MoreInfo.css";
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
                <p>We ask the following to know more about who is attending our event.</p>
                <form>
                    <div className="Gender">
                    <TextField
                      id="gender"
                      placeholder="Gender"
                      margin="normal"
                      onChange={this.props.handleFormChange}
                    />
                    </div>
                    <div className="Race">
                    <FormControl className="raceInfo">
                      <FormLabel>Race?</FormLabel>
                      <FormGroup>
                          <Grid container spacing={3}>
                              <Grid item >
                                <FormControlLabel
                                control={<Checkbox id="race" value="yes" />}
                                label="Non Hispanic White"
                                onChange={this.props.handleFormChange}
                                />
                            </Grid>
                            <Grid item >
                                 <FormControlLabel
                                  control={<Checkbox id="race" value="yes" />}
                                 label="Latino/Hispanic"
                                 onChange={this.props.handleFormChange}
                                  />
                                </Grid>
                                <Grid item >
                                    <FormControlLabel
                                 control={<Checkbox id="race" value="yes" />}
                                 label="East Asian"
                                 onChange={this.props.handleFormChange}
                                />
                                </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                       <Grid item>
                           <FormControlLabel
                          control={<Checkbox id="race" value="yes" />}
                          label="Black"
                          onChange={this.props.handleFormChange}
                            />
                        </Grid> 
                        <Grid item>
                        <FormControlLabel
                          control={<Checkbox id="race" value="yes" />}
                          label="Pacific Islander"
                          onChange={this.props.handleFormChange}
                         />
                        </Grid>
                        <Grid item>
                        <FormControlLabel
                          control={<Checkbox id="race" value="yes" />}
                          label="South Asian"
                          onChange={this.props.handleFormChange}
                         />
                        </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                        <Grid item>
                            <FormControlLabel
                          control={<Checkbox id="race" value="yes" />}
                          label="Middle Eastern"
                          onChange={this.props.handleFormChange}
                        />
                        </Grid>
                        <Grid item>
                        <FormControlLabel
                          control={<Checkbox id="race" value="yes" />}
                          label="Native American"
                          onChange={this.props.handleFormChange}
                            />
                         </Grid>
                         <Grid item>
                         <FormControlLabel
                          control={<Checkbox id="race" value="yes" />}
                          label="Other"
                          onChange={this.props.handleFormChange}
                        />
                        </Grid>
                        </Grid>
                      </FormGroup>
                    </FormControl>
                  </div>
                  <div className="Website">
                    <TextField
                      id="website"
                      placeholder="Website"
                      margin="normal"
                      onChange={this.props.handleFormChange}
                    />
                    </div>
                    <div className="Github">
                    <TextField
                      id="github"
                      placeholder="Github"
                      margin="normal"
                      onChange={this.props.handleFormChange}
                    />
                    </div>
                    <div className="Linkedin">
                    <TextField
                      id="linkedin"
                      placeholder="Linkedin"
                      margin="normal"
                      onChange={this.props.handleFormChange}
                    />
                    </div>
                </form>
            </div>
        );
    }
}
