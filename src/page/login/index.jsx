import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "../../components/navigation";
import LoginBox from "../../container/LoginBox";
import Left from "../../assets/maintainer.png";
import "./style.scss";

class Login extends Component {
  state = {};

  render() {
    return (
      <div className="Login-wrap">
        <Navigation />
        <div className="body">
          <img className="left-img" src={Left} />
          <LoginBox />
        </div>
      </div>
    );
  }
}

export default Login;
