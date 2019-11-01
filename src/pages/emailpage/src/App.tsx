import React from 'react';
import logo from './logo.svg';
import './App.css';

interface IState {
  currentTask: string;
  tasks: Array<string>;
}

export class App extends React.Component<{}, IState> {

  constructor(props: {}) {
    super(props);

    this.state = {
      currentTask: "",
      tasks: []
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
  }

render() {
  console.log(this.state);
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

export default App;
