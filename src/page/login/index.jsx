import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LoginBox from "../../container/LoginBox";
import Left from "../../assets/maintainer.png";
import "./style.scss";

class Login extends Component {
  state = {};

  render() {
    return (
      <div className="Login-wrap">
        <img className="left-img" src={Left} />
        <LoginBox />
      </div>
    );
  }
}

export default Login;
