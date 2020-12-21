import React from "react";
import "./MoreInfo.css";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Popper, Paper, ClickAwayListener } from "@material-ui/core";

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
   handleDisableAll: (arg0: any) => void
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
  raceText: string | undefined
  genderText: string | undefined
  howFindOutText: string | undefined
  raceArrowTransform: {}
  genderArrowTransform: {}
  findoutArrowTransform: {}
  racePreferNot: boolean
  genderPreferNot: boolean
  selected: {
    [key: string]: any
  }
};

let races = ["non_hispanic_white", "latino_hispanic", "south_asian", "east_asian", "south_east_asian", "black", "middle_eastern", "hawaiian_pacific_islander", "native_american", "other_ethnicity", "race_prefer_not"];
let racesLabels = ["Non Hispanic White", "Latino/Hispanic", "South Asian" ,"East Asian", "Southeast Asian", "Black/African", "Middle Eastern", "Pacific Islander", "Native American", "Other", "Prefer not to say"];

let genders = ["female", "male", "non_binary", "transgender", "non_conforming", "intersex", "questioning", "other_gender", "gender_prefer_not"];
let gendersLabels = ["Female", "Male", "Non-binary", "Transgender", "Non-conforming", "Intersex", "Questioning", "Other", "Prefer not to say"];

let findouts = ["social_media", "search_engine", "friend_family", "sponsor", "other_heard"];
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
          raceText: this.convertSelection("race", this.props.currentSelected['race']),
          genderText: this.convertSelection("gender", this.props.currentSelected['gender']),
          howFindOutText: this.convertSelection("findout", this.props.currentSelected['findout']),
          genderArrowTransform: { transform: 'none' },
          raceArrowTransform: { transform: 'none' },
          findoutArrowTransform: { transform: 'none' },
          racePreferNot: this.props.currentSelected['race'].includes("race_prefer_not"),
          genderPreferNot: this.props.currentSelected['gender'].includes("gender_prefer_not"),
          selected: this.props.currentSelected
        };
    }


    convertSelection = (id:string,  selected:string[]) => {
      let newString:string = "";
      switch (id) {
        case "race": {
          if (selected.length == 0) {
            newString = "Race (Select all that apply) *";
            return newString;
          } else {
            let converted = selected.map(x => racesLabels[races.indexOf(x)]);
            return converted.join(', ');
          }
          break;
        }
        case "gender": {
          if (selected.length == 0) {
            newString = "Gender (Select all that apply) *";
            return newString;
          } else {
            let converted = selected.map(x => gendersLabels[genders.indexOf(x)]);
            return converted.join(', ');
          }
        }
        case "findout": {
          if (selected.length == 0) {
            newString = "How did you find out about us? *";
            return newString;
          } else {
            let converted = selected.map(x => findoutsLabels[findouts.indexOf(x)]);
            return converted.join(', ');
          }
        }
      }
    }

    raceControl = (event:any) => {
      if (event.currentTarget.id == "raceButton" || this.state.raceOpened) {
        this.setState({
          raceOpened: this.state.raceOpened ? false : true,
          raceText: this.convertSelection("race", this.props.currentSelected['race']),
          raceArrowTransform: this.state.raceOpened ? {transform: 'none'} : {transform: 'rotate(180deg)'}
        });
      }
    }

    genderControl = (event:any) => {
      if (event.currentTarget.id == "genderButton" || this.state.genderOpened) {
        this.setState({
          genderOpened: this.state.genderOpened ? false : true,
          genderText: this.convertSelection("gender", this.props.currentSelected['gender']),
          genderArrowTransform: this.state.genderOpened ? {transform: 'none'} : {transform: 'rotate(180deg)'}
        });
      }
    }

    howFindOutControl = (event:any) => {
      if (event.currentTarget.id == "howFindOutButton" || this.state.howFindOutOpened) {
        this.setState({
          howFindOutOpened: this.state.howFindOutOpened ? false : true,
          howFindOutText: this.convertSelection("findout", this.props.currentSelected['findout']),
          findoutArrowTransform: this.state.howFindOutOpened ? {transform: 'none'} : {transform: 'rotate(180deg)'}
        });
      }
    }

    isChecked = (id:string, value:string) => {
      return this.props.currentSelected[id].includes(value)
    }

    disableRestRace = (event:any) => {
      this.props.handleDisableAll(event);
      this.setState({
        racePreferNot: this.state.racePreferNot ? false: true,
      });
    }

    disableRestGender = (event:any) => {
      this.props.handleDisableAll(event);
      this.setState({
        genderPreferNot: this.state.genderPreferNot ? false: true,
      });
		}
		
		dropButtonStyles = { fontFamily: "Akkurat Pro, sans-serif"}

    render() {
        return (
            <div className="more-info">
                <p id="description-more-info">We ask the following to know more about who is attending our event.</p>
                <p id="required"> *Required </p>
                <form>
                  <ClickAwayListener onClickAway={this.raceControl}>
                    <div className="raceDiv">
                      <DropButton style={this.dropButtonStyles} id="raceButton" onClick={this.raceControl}>
                       {this.state.raceText}
                       <svg style={this.state.raceArrowTransform} className="dropArrow" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.5 12L0.00481036 0.749999L12.9952 0.75L6.5 12Z" fill="white"/>
                       </svg>
                      </DropButton>
                      {this.state.raceOpened ? (
                        <div className="form-popup">
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
                            control={<Checkbox onClick={this.disableRestRace} style={{color: "white"}} checked={this.isChecked("race", "race_prefer_not")} id="race" value={"race_prefer_not"} />}
                            label={racesLabels[races.length - 1]}
                            onChange={this.props.handleDisableAll}
                            />
                          </div>
                        </div>
                    ) : null }
                    </div>
                  </ClickAwayListener>

                  <ClickAwayListener onClickAway={this.genderControl}>
                    <div className="genderDiv">
                      <DropButton style={this.dropButtonStyles} id="genderButton" onClick={this.genderControl}>
                        {this.state.genderText}
                        <svg style={this.state.genderArrowTransform} className="dropArrow" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M6.5 12L0.00481036 0.749999L12.9952 0.75L6.5 12Z" fill="white"/>
                        </svg>
                      </DropButton>
                      {this.state.genderOpened ? (
                        <div className="form-popup">
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
                              control={<Checkbox onClick={this.disableRestGender} style={{color: "white"}} checked={this.isChecked("gender", "gender_prefer_not")} id="gender" value={"gender_prefer_not"} />}
                              label={gendersLabels[genders.length - 1]}
                              onChange={this.props.handleDisableAll}
                              />
                            </div>
                        </div>
                      ) : null}
                    </div>
                  </ClickAwayListener>

                  <ClickAwayListener onClickAway={this.howFindOutControl}>
                    <div className="howFindOutDiv">
                      <DropButton style={this.dropButtonStyles} id="howFindOutButton" onClick={this.howFindOutControl}>
                        {this.state.howFindOutText}
                        <svg style={this.state.findoutArrowTransform} className="dropArrow" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M6.5 12L0.00481036 0.749999L12.9952 0.75L6.5 12Z" fill="white"/>
                        </svg>
                      </DropButton>
                      {this.state.howFindOutOpened ? (
                        <div className="form-popup">
                            {findouts.map((value, index) => {
                              return <div>
                                <FormControlLabel
                                control={<Checkbox style={{color: "white"}} checked={this.isChecked("findout", value)} id="findout" value={value} />}
                                label={findoutsLabels[index]}
                                onChange={this.props.handleMultiFormChange}
                                />
                              </div>
                            })}
                        </div>
                      ) : null }
                    </div>
                  </ClickAwayListener>
                </form>
            </div>
        );
    }
}
