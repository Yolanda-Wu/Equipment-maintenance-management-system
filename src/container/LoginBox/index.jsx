import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "../../components/Login";
import { login } from "../../api/index";

class LoginBox extends Component {
  state = {
    id: "",
    user_password: ""
  };

  handleChange = event => {
    let name = event.target.name;
    let value = event.target.value;
    if (name === "account") {
      this.setState({
        id: value
      });
    } else {
      this.setState({
        user_password: value
      });
    }
  };

  handleSubmit = event => {
    // login(this.state).then(data => {
    //
    // });
  };

  render() {
    return (
      <Login
        handleChange={this.handleChange}
        account={this.state.id}
        password={this.state.user_password}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default LoginBox;
