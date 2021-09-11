import React, { Component } from "react";

export default class HomePage extends Component {
  componentDidMount() {
    if (localStorage.getItem("token") === null) {
      this.props.history.replace("/login");
    } else {
    }
  }
  render() {
    return <div>Home</div>;
  }
}
