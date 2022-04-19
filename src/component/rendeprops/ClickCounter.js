import React, { Component } from "react";

class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState((prevState) => {
      return { Count: prevState.count + 1 };
    });
  };
  render() {
    const { count } = this.state;
    return (
      <div style={{ backgroundColor: "lightblue" }}>
        <h2>this is a ren props example</h2>
        <button onClick={this.incrementCount}>Click {count} Times</button>
      </div>
    );
  }
}

export default ClickCounter;
