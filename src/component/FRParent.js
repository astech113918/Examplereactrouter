import React, { Component } from "react";
import RefForward from "./RefForward";

export default class FRParent extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  render() {
    return (
      <div>
        <h1>this is parent forword ref</h1>
        <RefForward ref={this.inputRef} />
        <button>Focus Input</button>
      </div>
    );
  }
}
