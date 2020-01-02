import React, { Component } from "react";
import firebase from 'firebase'; // for getting access to storage
import Firebase from "../../../../components/Firebase"; // for user

type FileUploadProps = {
  firebase : (Firebase | null)
};

type FileUploadState = {
  user: any,
  resume: any,
  // url: string,
  progress: number
};

export default class FileUpload extends Component<
  FileUploadProps,
  FileUploadState
> {
  constructor(props: FileUploadProps) {
    super(props);
    this.state = {
      user: null,
      resume: null,
      // url: "",
      progress: 0
    };
  }

  componentDidMount = () => {
    let currFirebase = this.props.firebase;
    if (currFirebase == null) { // if true, error

    } else {
      currFirebase.doAuthListener(this); // check if user is logged in or not
    }
  }

  handleChange = (e: any) => {
    if (e.target.files[0]) {
      const resume = e.target.files[0];
      this.setState(() => ({ resume }));
    }
  };

  handleUpload = () => {
    const { resume } = this.state;
    // Rename the file to uid and upload to storage:
    const uploadTask = firebase.storage().ref(`resumes/${this.state.user.uid}`).put(resume);
    uploadTask.on(
      "state_changed",
      snapshot => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        // Error function ...
      },
      // Following is for file preview:
      // () => {
      //   // complete function ...
      //   firebase.storage()
      //     .ref("resumes")
      //     .child(resume.name)
      //     .getDownloadURL()
      //     .then(url => {
      //       this.setState({ url });
      //     });
      // }
    );
  };
  render() {
    return (
      <div className="center">
          <br/>
          <h2 className="green-text">React Firebase Image Uploader</h2>
          <br/>
          <br/>
        <div className="row">
          <progress value={this.state.progress} max="100" className="progress" />
        </div>
        <br />
        <br />
        <br />
        <div className="file-field input-field">
          <div className="btn">
            <span>File</span>
            <input type="file" accept="application/pdf, application/msword" onChange={this.handleChange} />
          </div>
        </div>
        <button
          onClick={this.handleUpload}
          className="waves-effect waves-light btn"
        >
          Upload
        </button>
        {/* Following is for file preview: */}
        {/* <br />
        <br />
        <img
          src={this.state.url || "https://via.placeholder.com/400x300"}
          alt="Uploaded Images"
          height="300"
          width="400"
        /> */}
      </div>
    );
  }
}
