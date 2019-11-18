import React from "react";
import "./OptionalInfo.css";
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
 type OptionalInfoProps = {
   handleFormChange: (arg0: any) => void
   incrementStage: () => void
   decrementStage: () => void
 };

/**
 * define a type model for the state of the page
 */
type OptionalInfoState = {};

export default class OptionalInfo extends React.Component<
    OptionalInfoProps,
    OptionalInfoState
> {
    constructor(props: OptionalInfoProps) {
        super(props);
        
    }
    render() {
        return (
            <div className="optional-info">
                <p> Resumes are only used to provide information to sponsors and are not used in the lottery process.</p>
                <Button
                  variant="contained"
                  color="default"
                  margin-bottom ="3%"
                  onChange={this.props.handleFormChange}
                 >
                    Upload
                  </Button>
                <TextField
                      id="link"
                      placeholder="Additional Link"
                      margin-top="normal%"
                      onChange={this.props.handleFormChange}
                 />
                 <p>How did you find out about us?</p>
                 <TextField
                      id="findout"
                      margin="normal"
                      onChange={this.props.handleFormChange}
                 />
                 <p>Additional Comments:</p>
                 <TextField
                    placeholder="Anything else you'd like us to know?"
                     multiline={true}
                     rows={2}
                     rowsMax={4}
                    />

            </div>
        );
    }
}
