import React from "react";
import "./styles.css";
import { Component } from "react";
import { Button } from "@material-ui/core";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "State value"
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Hello I'm Madhavi</h1>
        <h2>This is my 1st application in Reactjs</h2>
        <p>{this.state.name}</p>
        <Button
          variant="contained"
          onClick={() => this.setState({ name: "State value changed" })}
          color="primary"
        >
          Change text
        </Button>{" "}
        &nbsp;
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            this.setState({
              name: "State value"
            });
          }}
        >
          Change state
        </Button>
      </div>
    );
  }
}
export default App;
