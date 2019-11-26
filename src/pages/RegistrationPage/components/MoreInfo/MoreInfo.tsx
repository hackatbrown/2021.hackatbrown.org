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
import { Collapse } from 'react-collapse';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

/**
 * define a type model for the props you are passing in to the component
 */
 type MoreInfoProps = {
   handleFormChange: (arg0: any) => void
   handleMultiFormChange: (arg0: any) => void
   incrementStage: () => void
   decrementStage: () => void
   currentSelected: {
    [key: string]: string | boolean | string[] |  any
   }
 };

/**
 * define a type model for the state of the page
 */
type MoreInfoState = {
  raceOpened: boolean
  genderOpened: boolean
  howFindOutOpened: boolean
};

export default class MoreInfo extends React.Component<
    MoreInfoProps,
    MoreInfoState
> {
    constructor(props: MoreInfoProps) {
        super(props);
        this.state = {
          raceOpened: false,
          genderOpened: false,
          howFindOutOpened: false
        };
    }

    raceControl = (event:any) => {
      this.setState({
        raceOpened: this.state.raceOpened ? false : true
      });
    }

    genderControl = (event:any) => {
      this.setState({
        genderOpened: this.state.genderOpened ? false : true
      });
    }

    howFindOutControl = (event:any) => {
      this.setState({
        howFindOutOpened: this.state.howFindOutOpened ? false : true
      });
    }

    isChecked = (id:string, value:string) => {
      return this.props.currentSelected[id].includes(value);
    }

    render() {
        let races = ["non-hispanic-white", "latino-hispanic", "east-south-asian", "middle-eastern", "pacific-islander", "native-american", "other", "prefer-not"];
        let racesLabels = ["Non Hispanic White", "Latino/Hispanic", "East/South Asian", "Middle Eastern", "Pacific Islander", "Native American", "Other", "Prefer not to say"];

        let genders = ["female", "male", "non-binary", "transgender", "non-conforming", "intersex", "questioning", "other", "prefer-not"];
        let gendersLabels = ["Female", "Male", "Non-binary", "Transgender", "Non-conforming", "Intersex", "Questioning", "Other", "Prefer not to say"];

        let findouts = ["social-media", "search-engine", "friends-family", "sponsors", "other"];
        let findoutsLabels = ["Social Media", "Search Engine", "Heard from Friends/Family", "Heard from our Sponsors", "Other"];

        return (
            <div className="more-info">
                <p style={{marginBottom: "20px"}}>We ask the following to know more about who is attending our event.</p>
                <form>
                  <Button onClick={this.raceControl}> Race (Select all that applies) </Button>
                  <Collapse isOpened={this.state.raceOpened}>
                    <div className="Race">
                      <FormControl className="raceInfo">
                        <FormGroup>
                          {races.map((value, index) => {
                            return <FormControlLabel
                            control={<Checkbox style={{color: "white"}} checked={this.isChecked("race", value)} id="race" value={value} />}
                            label={racesLabels[index]}
                            onChange={this.props.handleMultiFormChange}
                            />
                          })}
                        </FormGroup>
                      </FormControl>
                    </div>
                  </Collapse>

                  <Button onClick={this.genderControl}> Gender (Select all that applies) </Button>
                  <Collapse isOpened={this.state.genderOpened}>
                  <div className="Gender">
                    <FormControl className="genderInfo">
                      <FormGroup>
                        {genders.map((value, index) => {
                          return <FormControlLabel
                          control={<Checkbox style={{color: "white"}} checked={this.isChecked("gender", value)} id="gender" value={value} />}
                          label={gendersLabels[index]}
                          onChange={this.props.handleMultiFormChange}
                          />
                        })}
                      </FormGroup>
                    </FormControl>
                  </div>
                  </Collapse>

                  <Button onClick={this.howFindOutControl}> How did you find out about us? </Button>
                  <Collapse isOpened={this.state.howFindOutOpened}>
                  <div className="findOut">
                    <FormControl className="findOutInfo">
                      <FormGroup>
                        {findouts.map((value, index) => {
                          return <FormControlLabel
                          control={<Checkbox style={{color: "white"}} checked={this.isChecked("findout", value)} id="findout" value={value} />}
                          label={findoutsLabels[index]}
                          onChange={this.props.handleMultiFormChange}
                          />
                        })}
                      </FormGroup>
                    </FormControl>
                  </div>
                  </Collapse>
                </form>
            </div>
        );
    }
}
