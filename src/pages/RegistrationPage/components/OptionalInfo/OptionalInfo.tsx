import React from "react";
import "./OptionalInfo.css";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


/**
 * define a type model for the props you are passing in to the component
 */
 type OptionalInfoProps = {
   handleFileUpload: (arg0: any) => void
   handleFormChange: (arg0: any) => void
   incrementStage: () => void
   decrementStage: () => void
   fileName: string
   currentSelected: {
    [key: string]: string | boolean | any
   }
 };

/**
 * define a type model for the state of the page
 */
type OptionalInfoState = {
  fileName: string
};

const buttonStyle:React.CSSProperties = {
  textTransform: 'none',
  color: 'white',
  background: 'transparent',
  borderRadius: '16.5px',
  border: '2px solid #FFFFFF',
  height: '40px',
};

export default class OptionalInfo extends React.Component<
    OptionalInfoProps,
    OptionalInfoState
> {
    constructor(props: OptionalInfoProps) {
        super(props);
        this.state = {
          fileName: ""
        };
    }

    componentWillReceiveProps = (nextProps:any) => {
      if (nextProps.fileName !== this.state.fileName) {
        this.setState({
          fileName: nextProps.fileName
        });
      }
    }

    render() {
        return (
            <div className="optional-info">
                <div className="optional-info-1">
                  <p id="description"> Resumes are only used to provide information to sponsors and are not used in the lottery process.</p>
                  <Grid container spacing={2}>
                    <Grid item>
                      <p> Resume: </p>
                      <Button style={buttonStyle} variant="contained" component="label">
                        Upload File
                        <input
                          type="file"
                          style={{ display: "none" }}
                          onChange={this.props.handleFileUpload}/>
                      </Button>
                    </Grid>
                    <Grid item style={{marginTop: "10px", marginBottom: "auto"}}>
                      <p>{this.state.fileName}</p>
                    </Grid>
                  </Grid>
                </div>

                <div className="optional-info-2">
                   <div className="Website">
                     <TextField
                       id="website"
                       defaultValue={this.props.currentSelected['website']}
                       placeholder="Website"
                       margin="normal"
                       onChange={this.props.handleFormChange}
                       InputProps={{
                           style: {
                               color: "white"
                           }
                       }}
                     />
                     </div>
                     <div className="Github">
                     <TextField
                       id="github"
                       defaultValue={this.props.currentSelected['github']}
                       placeholder="Github"
                       margin="normal"
                       onChange={this.props.handleFormChange}
                       InputProps={{
                           style: {
                               color: "white"
                           }
                       }}
                     />
                     </div>
                     <div className="Linkedin">
                     <TextField
                       id="linkedin"
                       defaultValue={this.props.currentSelected['linkedin']}
                       placeholder="Linkedin"
                       margin="normal"
                       onChange={this.props.handleFormChange}
                       InputProps={{
                           style: {
                               color: "white"
                           }
                       }}
                     />
                     </div>
                   <p style={{marginTop: "20px", marginBottom: "10px"}}>Additional Comments:</p>
                   <TextField
                      id="comments"
                      defaultValue={this.props.currentSelected['comments']}
                      variant="outlined"
                      multiline={true}
                      rows={2}
                      rowsMax={4}
                      onChange={this.props.handleFormChange}
                      InputProps={{
                          style: {
                              color: "white"
                          }
                      }}
                  />
                </div>

            </div>
        );
    }
}
