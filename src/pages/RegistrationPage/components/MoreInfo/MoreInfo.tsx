import React from "react";
import "./MoreInfo.css";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Popper, Paper} from "@material-ui/core";


const DropButton = withStyles(theme => ({
  root: {
    textTransform: 'none',
    borderBottom: '3px solid',
    borderRadius: '0px',
    borderColor: "#FFFFFF",
    fontSize: '18px',
    color: "#FFFFFF",
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&:active': {
      boxShadow: 'none',
    },
    '&:focus': {
      boxShadow: 'none',
    },
  },
}))(Button);

const buttonStyle:React.CSSProperties = {
  textTransform: 'none',
  color: 'white',
  background: 'transparent',
  borderRadius: '16.5px',
  border: '2px solid #FFFFFF',
  height: '40px',
  fontSize: '16px',
  fontFamily: 'Work Sans'
};

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
  anchorEl: any
  raceText: string | undefined
  genderText: string | undefined
  howFindOutText: string | undefined
  raceArrowTransform: {}
  genderArrowTransform: {}
  findoutArrowTransform: {}
  racePreferNot: boolean
  genderPreferNot: boolean
};

let races = ["non-hispanic-white", "latino-hispanic", "south-asian", "east-asian", "south-east-asian", "middle-eastern", "pacific-islander", "native-american", "other", "prefer-not"];
let racesLabels = ["Non Hispanic White", "Latino/Hispanic", "South Asian" ,"East Asian", "Southeast Asian", "Middle Eastern", "Pacific Islander", "Native American", "Other", "Prefer not to say"];

let genders = ["female", "male", "non-binary", "transgender", "non-conforming", "intersex", "questioning", "other", "prefer-not"];
let gendersLabels = ["Female", "Male", "Non-binary", "Transgender", "Non-conforming", "Intersex", "Questioning", "Other", "Prefer not to say"];

let findouts = ["social-media", "search-engine", "friends-family", "sponsors", "other"];
let findoutsLabels = ["Social Media", "Search Engine", "Heard from Friends/Family", "Heard from our Sponsors", "Other"];


export default class MoreInfo extends React.Component<
    MoreInfoProps,
    MoreInfoState
> {
    constructor(props: MoreInfoProps) {
        super(props);
        this.state = {
          raceOpened: false,
          genderOpened: false,
          howFindOutOpened: false,
          anchorEl: null,
          raceText: this.convertSelection("race", this.props.currentSelected['race']),
          genderText: this.convertSelection("gender", this.props.currentSelected['gender']),
          howFindOutText: this.convertSelection("findout", this.props.currentSelected['findout']),
          genderArrowTransform: { transform: 'none' },
          raceArrowTransform: { transform: 'none' },
          findoutArrowTransform: { transform: 'none' },
          racePreferNot: false,
          genderPreferNot: false
        };
    }


    convertSelection = (id:string,  selected:string[]) => {
      let newString:string = "";
      switch (id) {
        case "race": {
          if (selected.length == 0) {
            newString = "Race (Select all that applies)";
            return newString;
          } else {
            let converted = selected.map(x => racesLabels[races.indexOf(x)]);
            return converted.join(', ');
          }
          break;
        }
        case "gender": {
          if (selected.length == 0) {
            newString = "Gender (Select all that applies)";
            return newString;
          } else {
            let converted = selected.map(x => gendersLabels[genders.indexOf(x)]);
            return converted.join(', ');
          }
        }
        case "findout": {
          if (selected.length == 0) {
            newString = "How did you find out about us?";
            return newString;
          } else {
            let converted = selected.map(x => findoutsLabels[findouts.indexOf(x)]);
            return converted.join(', ');
          }
        }
      }
    }

    raceControl = (event:any) => {
      this.setState({
        anchorEl: event.currentTarget,
        raceOpened: this.state.raceOpened ? false : true,
        raceText: this.convertSelection("race", this.props.currentSelected['race']),
        raceArrowTransform: this.state.raceOpened ? {transform: 'none'} : {transform: 'rotate(180deg)'}
      });
    }

    genderControl = (event:any) => {
      this.setState({
        anchorEl: event.currentTarget,
        genderOpened: this.state.genderOpened ? false : true,
        genderText: this.convertSelection("gender", this.props.currentSelected['gender']),
        genderArrowTransform: this.state.genderOpened ? {transform: 'none'} : {transform: 'rotate(180deg)'}
      });
    }

    howFindOutControl = (event:any) => {
      this.setState({
        anchorEl: event.currentTarget,
        howFindOutOpened: this.state.howFindOutOpened ? false : true,
        howFindOutText: this.convertSelection("findout", this.props.currentSelected['findout']),
        findoutArrowTransform: this.state.howFindOutOpened ? {transform: 'none'} : {transform: 'rotate(180deg)'}
      });
    }

    isChecked = (id:string, value:string) => {
      return this.props.currentSelected[id].includes(value);
    }

    disableRestRace = (event:any) => {
      this.setState({
        racePreferNot: this.state.racePreferNot ? false: true
      });
    }

    disableRestGender = (event:any) => {
      this.setState({
        genderPreferNot: this.state.genderPreferNot ? false: true
      });
    }

    render() {
        return (
            <div className="more-info">
                <p id="description-more-info">We ask the following to know more about who is attending our event.</p>
                <form>
                  <div className="race">
                    <DropButton onClick={this.raceControl}>
                     {this.state.raceText}
                     <svg style={this.state.raceArrowTransform} className="dropArrow" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.5 12L0.00481036 0.749999L12.9952 0.75L6.5 12Z" fill="white"/>
                     </svg>
                    </DropButton>
                    <Popper
                      open={this.state.raceOpened}
                      anchorEl={this.state.anchorEl}
                      placement="bottom-start"
                    >
                      <Paper className="form-popup">
                        {races.slice(0, races.length - 1).map((value, index) => {
                          return <div>
                            <FormControlLabel
                            control={<Checkbox disabled={this.state.racePreferNot} style={{color: "white"}} checked={this.isChecked("race", value)} id="race" value={value} />}
                            label={racesLabels[index]}
                            onChange={this.props.handleMultiFormChange}
                            />
                          </div>
                        })}
                        <div>
                          <FormControlLabel
                          control={<Checkbox onClick={this.disableRestRace} style={{color: "white"}} checked={this.isChecked("race", "prefer-not")} id="race" value={"prefer-not"} />}
                          label={racesLabels[races.length - 1]}
                          onChange={this.props.handleMultiFormChange}
                          />
                        </div>
                        <Button style={buttonStyle} onClick={this.raceControl}> Save </Button>
                      </Paper>
                    </Popper>
                  </div>

                  <div className="gender">
                    <DropButton onClick={this.genderControl}>
                      {this.state.genderText}
                      <svg style={this.state.genderArrowTransform} className="dropArrow" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M6.5 12L0.00481036 0.749999L12.9952 0.75L6.5 12Z" fill="white"/>
                      </svg>
                    </DropButton>
                    <Popper
                      open={this.state.genderOpened}
                      anchorEl={this.state.anchorEl}
                      placement="bottom-start"
                    >
                      <Paper className="form-popup">
                          {genders.slice(0, genders.length - 1).map((value, index) => {
                            return <div>
                              <FormControlLabel
                              control={<Checkbox disabled={this.state.genderPreferNot} style={{color: "white"}} checked={this.isChecked("gender", value)} id="gender" value={value} />}
                              label={gendersLabels[index]}
                              onChange={this.props.handleMultiFormChange}
                              />
                            </div>
                          })}
                          <div>
                            <FormControlLabel
                            control={<Checkbox onClick={this.disableRestGender} style={{color: "white"}} checked={this.isChecked("race", "prefer-not")} id="race" value={"prefer-not"} />}
                            label={racesLabels[races.length - 1]}
                            onChange={this.props.handleMultiFormChange}
                            />
                          </div>
                          <Button style={buttonStyle} onClick={this.genderControl}> Save </Button>
                      </Paper>
                    </Popper>
                  </div>

                  <div className="howFindOut">
                    <DropButton onClick={this.howFindOutControl}>
                      {this.state.howFindOutText}
                      <svg style={this.state.findoutArrowTransform} className="dropArrow" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M6.5 12L0.00481036 0.749999L12.9952 0.75L6.5 12Z" fill="white"/>
                      </svg>
                    </DropButton>
                    <Popper
                      open={this.state.howFindOutOpened}
                      anchorEl={this.state.anchorEl}
                      placement="bottom-start"
                    >
                      <Paper className="form-popup">
                          {findouts.map((value, index) => {
                            return <div>
                              <FormControlLabel
                              control={<Checkbox style={{color: "white"}} checked={this.isChecked("findout", value)} id="findout" value={value} />}
                              label={findoutsLabels[index]}
                              onChange={this.props.handleMultiFormChange}
                              />
                            </div>
                          })}
                          <Button style={buttonStyle} onClick={this.howFindOutControl}> Save </Button>
                      </Paper>
                    </Popper>
                  </div>
                </form>
            </div>
        );
    }
}
