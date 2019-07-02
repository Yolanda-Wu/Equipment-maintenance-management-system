import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Navigation from "../../components/navigation";
import AdminAvator from "../../assets/admin-avator.jpg";
import AssignAvator from "../../assets/assign-avator.jpg";
import EngineerAvator from "../../assets/engineer-avator.jpg";
import OperatorAvator from "../../assets/operator-avator.jpg";
import { getUserInfo, logout } from "../../api/index";

class NavigationBox extends Component {
  state = {
    user_name: "",
    identify: null,
    avator: null
  };

  componentDidMount() {
    // getUserInfo()
    //   .then(data => {
    //this.setState(this.props);
    const { identify, redirect_url } = this.props;
    if (identify === "4" && this.props.location.hash === "#/") {
      window.location.href = "#/admin";
    }
    if (this.props.location.hash !== redirect_url && identify !== "4") {
      window.location.href = redirect_url;
    }

    // })
    // .catch(err => {
    //   console.log(err);
    // });
  }

  handleClick = e => {
    console.log("see user info");
  };

  handleLogout = e => {
    logout().then(() => {
      window.location.href = "#/";
    });
  };

  render() {
    const { user_name, identify } = this.props;
    //const { identify, redirect_url } = this.props;
    console.log(this.props);
    let avator = null;
    if (identify) {
      switch (identify) {
        case "1":
          avator = AdminAvator;
          break;
        case "2":
          avator = AssignAvator;
          break;
        case "3":
          avator = EngineerAvator;
          break;
        case "4":
          avator = OperatorAvator;
          break;
      }
    }
    return (
      <Navigation
        nickname={user_name}
        avator={avator}
        handleClick={this.handleClick}
        handleLogout={this.handleLogout}
        identify={identify}
      />
    );
  }
}

export default withRouter(NavigationBox);
