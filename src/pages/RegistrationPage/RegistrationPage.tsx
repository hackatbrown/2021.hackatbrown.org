import React from "react";
import "./RegistrationPage.css";
import BasicInfo from "./components/BasicInfo/BasicInfo";
import MoreInfo from "./components/MoreInfo/MoreInfo";
import OptionalInfo from "./components/OptionalInfo/OptionalInfo";
import Button from "@material-ui/core/Button";
import axios from "axios";
import blocksImage from "../../assets/images/Registration/blocks_img.png";
import boardImage from "../../assets/images/Registration/board_img.png";
import wiiImage from "../../assets/images/Registration/wii_img.png";
import boardGif from "../../assets/images/Registration/board_animation.gif";
import wiiGif from "../../assets/images/Registration/wii_animation.gif";
import blocksGif from "../../assets/images/Registration/blocks_animation.gif";
import { Link, Redirect } from "react-router-dom";
import firebase from "firebase"; // for getting access to storage
import Firebase from "../../components/Firebase"; // for user

/**
 * define a type model for the props you are passing in to the component
 */
type RegistrationProps = {
  apiURL: string;
  firebase: Firebase | null;
};

/**
 * define a type model for the state of the page
 */
type RegistrationState = {
  user: any;
  userToken: any;
  error: string;
  missingInfo: string;
  dataRetrieved: boolean;
  /* screen size information */
  width: number;
  backDashboard: boolean;
  /* 0 -> basic information, 1 -> more information, 2 -> optional information */
  formStage: number;
  /* form submission information */
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  school: string;
  majors: string;
  gradDate: string /* consider changing type */;
  over18: boolean | null;
  firstHack: boolean | null;
  /* travelReimburse: boolean | null;
	travelOrigin: string;

	we're virtual for h@b 2021 woohoo!!!
	*/
  mlhConduct: boolean | null;
  mlhPrivacy: boolean | null;
  gender: string[];
  race: string[];
  website: string;
  github: string;
  linkedin: string;
  resume: any;
  findout: string[];
  comments: string;
  fileName: string;
  inTransition: boolean;
};

const buttonStyle: React.CSSProperties = {
  textTransform: "none",
  fontFamily: "Inter",
  color: "white",
  background: "transparent",
  borderRadius: "16.5px",
  border: "2px solid #FFFFFF",
  height: "40px",
  fontSize: "16px",
};

export default class RegistrationPage extends React.Component<
  RegistrationProps,
  RegistrationState
> {
  constructor(props: RegistrationProps) {
    super(props);
    this.state = {
      user: null,
      userToken: null,
      error: "",
      dataRetrieved: false,
      missingInfo: "",
      width: window.innerWidth,
      backDashboard: false,
      formStage: 0,
      firstName: "",
      lastName: "",
      email: props.firebase.auth.currentUser.email,
      phoneNumber: "",
      mlhConduct: false,
      mlhPrivacy: false,
      school: "",
      majors: "",
      gradDate: "" /* consider changing type */,
      over18: null,
      firstHack: null,
      /* travelReimburse: null,
			travelOrigin: "",

			we're virtual for h@b 2021 woohoo!!!
			*/

      gender: [],
      race: [],
      website: "",
      github: "",
      linkedin: "",
      resume: null,
      findout: [],
      comments: "",
      fileName: "",
      inTransition: false,
    };
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
  }

  // Check if user is logged in when component mounts
  componentDidMount = async () => {
    let currFirebase = this.props.firebase;
    if (currFirebase == null) {
      // if true, error
    } else {
      await currFirebase.doAuthListener(this); // check if user is logged in or not
      this.getData();
    }
  };

  componentWillMount = () => {
    window.addEventListener("resize", this.handleWindowSizeChange);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  };

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  renderImageNext = () => {
    this.setState({
      inTransition: true,
    });
    setTimeout(this.incrementStage, 1500);
  };

  renderImageSubmit = (event: any) => {
    this.setState({
      inTransition: true,
    });

    let errorMessage: string | null = this.checkMissing();
    if (errorMessage === null) {
      this.setState({
        missingInfo: "",
      });
      setTimeout(async () => {
        await this.submitForm(event);
        this.setState({
          inTransition: false,
          backDashboard: true,
        });
      }, 3000);
    } else {
      this.setState({
        missingInfo: errorMessage,
      });
    }
  };

  /* Functions to change the stage of the form */
  incrementStage = () => {
    if (this.state.formStage + 1 <= 2) {
      this.setState({
        formStage: this.state.formStage + 1,
        inTransition: false,
      });
    }
  };

  decrementStage = () => {
    if (this.state.formStage - 1 >= 0) {
      this.setState({
        formStage: this.state.formStage - 1,
        inTransition: false,
      });
    }
  };

  /* Function to handle changing state based on submitted data */
  handleFormChange = (event: any) => {
    let name = event.target.id;
    let value = event.target.value;

    /* case where value is yes/no -> convert to boolean */
    if (value === "yes") {
      value = true;
    } else if (value === "no") {
      value = false;
    }

    this.setState({
      [name]: value,
    } as any);
  };

  handleMultiFormChange = (event: any) => {
    let name = event.target.id;

    let newVals;
    if (name === "gender") {
      newVals = [...this.state.gender];
    } else if (name === "race") {
      newVals = [...this.state.race];
    } else {
      newVals = [...this.state.findout];
    }

    if (event.target.checked) {
      newVals.push(event.target.value);
    } else {
      newVals.splice(newVals.indexOf(event.target.value), 1);
    }

    this.setState({
      [name]: newVals,
    } as any);
  };

  handleDisableAll = (event: any) => {
    let name = event.target.id;

    if (event.target.checked) {
      if (name === "gender") {
        this.setState({
          [name]: ["gender_prefer_not"],
        } as any);
      } else {
        this.setState({
          [name]: ["race_prefer_not"],
        } as any);
      }
    } else {
      this.setState({
        [name]: [],
      } as any);
    }
  };

  /* Function to handle file change */
  handleFileChange = (event: any) => {
    const file = event.target.files;
    if (event.target.files[0] !== undefined) {
      let name = event.target.files[0].name;
      if (name.length > 40) {
        name = name.substring(0, 36) + "...";
      }
      this.setState(
        {
          resume: file[0],
          fileName: name,
        },
        () => {
          if (this.state.resume.size > 2000000) {
            this.setState({
              error: "File is larger than 2 MB, please upload another file!",
            });
          } else {
            this.setState({
              error: "",
            });
          }
        }
      );
    } else {
      this.setState({
        resume: null,
        fileName: "(PDF, 2 MB max)",
        error: "",
      });
    }
  };

  /* Function to handle file uploads */
  handleFileUpload = () => {
    // only if there is a file!!
    // Rename the file to uid and upload to storage:
    if (this.state.resume !== null) {
      const uploadTask = firebase
        .storage()
        .ref(`resumes/${this.state.user.uid}/${this.state.user.uid}`)
        .put(this.state.resume);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          this.setState({
            error:
              "Sorry, something went wrong while trying to upload your resume. Please try again later.",
          });
        }
      );
    }
  };

  checkMissing = () => {
    if (
      this.state.firstName.trim() === "" ||
      this.state.lastName.trim() === "" ||
      this.state.school.trim() === "" ||
      this.state.majors.trim() === "" ||
      this.state.gradDate.trim() === "" ||
      this.state.over18 === null ||
      this.state.email.trim() === "" ||
      this.state.phoneNumber.trim() === "" ||
      !this.state.mlhConduct ||
      !this.state.mlhPrivacy
      // this.state.travelReimburse === null
    ) {
      return "You are missing required field(s) in the Basic Information section!";
    } else if (
      this.state.gender.length === 0 ||
      this.state.race.length === 0 ||
      this.state.findout.length === 0 ||
      this.state.firstHack === null
    ) {
      return "You are missing required field(s) in the More Information section!";
    }
    return null;
  };

  /* Function that will send data to backend upon form submission */
  submitForm = async (event: any) => {
    event.preventDefault();
    this.handleFileUpload(); // upload resume to firebase
    const registrationData = {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      school: this.state.school,
      major: this.state.majors,
      grad_date: this.state.gradDate,
      age: this.state.over18,
      first_hackathon: this.state.firstHack,
      // fund_travel: this.state.travelReimburse,
      // traveling_address: this.state.travelOrigin,
      email: this.state.email,
      phone: this.state.phoneNumber,
      mlh_code: this.state.mlhConduct,
      mlh_privacy: this.state.mlhPrivacy,
      gender: this.state.gender,
      race: this.state.race,
      website: this.state.website,
      github: this.state.github,
      linkedin: this.state.linkedin,
      heard: this.state.findout,
      other_comments: this.state.comments,
    };
    // console.log(registrationData);

    const api = this.props.apiURL;
    await this.state.user
      .getIdToken(true)
      .then(async function (idToken: string) {
        var registrationForm = new FormData();
        registrationForm.append("data", JSON.stringify(registrationData));
        registrationForm.append("fire_token", idToken);
        const config = {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        };
        await axios
          .post(api + "/hacker_registration/submit", registrationForm, config)
          .then((res) => {});
      })
      .catch(function (error: any) {});
  };

  extractFormData = (respData: any) => {
    let savedInfo = {
      dataRetrieved: true,
      firstName: respData["first_name"],
      lastName: respData["last_name"],
      school: respData["school"],
      majors: respData["major"],
      gradDate: respData["grad_date"],
      over18: respData["age"],
      firstHack: respData["first_hackathon"],
      email: respData["email"],
      mlhPrivacy: respData["mlh_privacy"],
      mlhConduct: respData["mlh_code"],
      phoneNumber: respData["phone"],
      gender: respData["gender"],
      race: respData["race"],
      website: respData["website"],
      github: respData["github"],
      linkedin: respData["linkedin"],
      findout: respData["heard"],
      comments: respData["other_comments"],
    };

    return savedInfo;
  };

  getData = () => {
    setTimeout(() => {
      if (this.state.userToken !== null && !this.state.dataRetrieved) {
        const api = this.props.apiURL;
        var hackerRequest = new FormData();
        hackerRequest.append("fire_token", this.state.userToken);
        axios({
          method: "post",
          url: api + "/hacker_registration/hacker",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          data: hackerRequest,
        }).then((response) => {
          let savedInfo = this.extractFormData(response["data"]);
          this.setState(savedInfo);
        });
      }
    }, 1000);
  };

  backToDashboard = () => {};

  /* Form Title list */
  nameList = ["Basic Information", "More Information", "Optional Information"];

  /* Button List */
  basicButtons = (
    <div className="form-buttons">
      <Button
        className="next"
        style={buttonStyle}
        onClick={this.renderImageNext}
      >
        Next
      </Button>
    </div>
  );
  moreButtons = (
    <div className="form-buttons">
      <Button
        className="back"
        style={buttonStyle}
        onClick={this.decrementStage}
      >
        Previous
      </Button>
      <Button
        className="next"
        style={buttonStyle}
        onClick={this.renderImageNext}
      >
        Next
      </Button>
    </div>
  );
  submitButtons = (
    <div className="form-buttons">
      <Button
        className="back"
        style={buttonStyle}
        onClick={this.decrementStage}
      >
        Previous
      </Button>
      <Button
        className="submit"
        style={buttonStyle}
        onClick={this.renderImageSubmit}
      >
        Submit Application
      </Button>
    </div>
  );
  buttonList = [this.basicButtons, this.moreButtons, this.submitButtons];

  render() {
    if (this.state.backDashboard) {
      return <Redirect to="/dashboard" />;
    }
    /* window size */
    const { width } = this.state;
    const isMobile = width <= 500;

    /* Components List */
    let basicComp = (
      <BasicInfo
        currentSelected={this.state}
        handleFormChange={this.handleFormChange}
        incrementStage={this.incrementStage}
        decrementStage={this.decrementStage}
      />
    );
    let moreComp = (
      <MoreInfo
        currentSelected={this.state}
        handleDisableAll={this.handleDisableAll}
        handleMultiFormChange={this.handleMultiFormChange}
        handleFormChange={this.handleFormChange}
        incrementStage={this.incrementStage}
        decrementStage={this.decrementStage}
      />
    );
    let optionalComp = (
      <OptionalInfo
        currentSelected={this.state}
        handleFileChange={this.handleFileChange}
        handleFileUpload={this.handleFileUpload}
        handleFormChange={this.handleFormChange}
        incrementStage={this.incrementStage}
        decrementStage={this.decrementStage}
        fileName={this.state.fileName}
        error={this.state.error}
      />
    );
    let compList = [basicComp, moreComp, optionalComp];
    let backgroundImageList = [blocksImage, boardImage, wiiImage];
    let gifImageList = [blocksGif, boardGif, wiiGif];

    if (isMobile) {
      return (
        <div
          className="registration"
          style={{ paddingBottom: "30px", width: "100vw" }}
        >
          {compList.map((value, index) => {
            return (
              <div>
                <div className="form-name">
                  <h1>{this.nameList[index]}</h1>
                </div>
                <div className="form-content-mobile">{value}</div>
              </div>
            );
          })}
          <Button
            className="submit"
            style={buttonStyle}
            onClick={this.renderImageSubmit}
          >
            Submit Application
          </Button>
          <div
            className="error"
            style={{
              visibility: this.state.formStage === 2 ? "visible" : "hidden",
            }}
          >
            {this.state.missingInfo}
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="registration"
          style={{
            backgroundImage: `url(${
              this.state.inTransition && this.state.missingInfo === ""
                ? gifImageList[this.state.formStage]
                : backgroundImageList[this.state.formStage]
            })`,
          }}
        >
          <div className="form-name">
            <h1>{this.nameList[this.state.formStage]}</h1>
          </div>
          <div className="form-content">{compList[this.state.formStage]}</div>
          <div className="form-progress">
            <div className="buttons">
              {this.buttonList[this.state.formStage]}
            </div>
            <div className="stage">
              <p>{this.state.formStage + 1}/3</p>
            </div>
          </div>
          <div className="form-last-button">
            <Button
              className="backDashboard"
              style={buttonStyle}
              component={(props) => <Link to="/dashboard" {...props} />}
              linkButton={true}
            >
              {" "}
              Back to Dashboard{" "}
            </Button>
          </div>
          <div
            className="error"
            style={{
              paddingBottom: "1em",
              visibility: this.state.formStage === 2 ? "visible" : "hidden",
            }}
          >
            {this.state.missingInfo}
          </div>
        </div>
      );
    }
  }
}
