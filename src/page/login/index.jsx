import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LoginBox from "../../container/LoginBox";
import Left from "../../assets/bg-img1.jpg";
import "./style.scss";

class Login extends Component {
  state = {};

  render() {
    return (
      <div className="Login-wrap">
        <LoginBox {...this.props} />
        <div className="icons">
          <i className="mean-icon">&#xe600;</i>
          <i className="camera-icon">&#xe64b;</i>
          <i className="computer-icon">&#xe60c;</i>
        </div>
      </div>
    );
  }
}

export default Login;
