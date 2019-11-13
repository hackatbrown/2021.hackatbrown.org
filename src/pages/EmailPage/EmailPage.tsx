import React from 'react';
import './EmailPage.css';
import axios from 'axios';

interface IState {
  currentTask: string;
  tasks: Array<string>;
  errorStatus: string;
}

export default class EmailPage extends React.Component<{}, IState> {

  constructor(props: {}) {
    super(props);

    this.state = {
      currentTask: "",
      tasks: [],
      errorStatus: ""
    };
  }

  handleSubmit(e: any) {
    e.preventDefault();

    this.setState({
      currentTask: "",
      tasks: [
        ...this.state.tasks,
        this.state.currentTask
      ]
    })

    // register the email saved in the current state
    const to_register = {
      email: this.state.currentTask
    };

    // send post request
    axios.post('<api link to push email to database>', { to_register })
      .then(res => {
        // set the error status message in state
        this.setState({
          errorStatus: res.data.message
        })
      })
  }

render() {
  return (
    <div>
      <h1 className="announcement">Hack@Brown 2020 Coming Soon!</h1>
      <form onSubmit={e => this.handleSubmit(e)}>
        <input
          className="input-box"
          type="text"
          placeholder="Enter your email here to get updated!"
          value={this.state.currentTask}
          onChange={e => this.setState({currentTask: e.target.value})} />
        <button className="input-button" type="submit">Submit</button>
        </form>
    </div>
  )
}

}
