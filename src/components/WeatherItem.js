import React, { Component } from "react";
import { render } from "react-dom";

export default class WeatherItem extends Component {
  render() {
    return <div>Hello</div>;
  }
}
export class SayHello extends Component {
  render() {
    return (
      <div style={{ color: this.props.color, backgroundColor: "yellow" }}>
        Hello {this.props.name}
      </div>
    );
  }
}
