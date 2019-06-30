import React, { Component } from "react";
import LocalStorage from "../../utils/localStorage";
import Login from "../../components/login";
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
    login(this.state).then(data => {
      const { redirect_url } = data;
      // LocalStorage["jwt_token"] = jwt_token;
      //console.log(redirect_url);
      window.location.href = redirect_url;
    });
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
