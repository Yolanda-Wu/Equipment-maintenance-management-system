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
    getUserInfo()
      .then(data => {
        this.setState(data);
        const { identify, redirect_url } = data;
        switch (identify) {
          case 0:
            this.setState({ avator: AdminAvator });
            break;
          case 1:
            this.setState({ avator: AssignAvator });
            break;
          case 2:
            this.setState({ avator: EngineerAvator });
            break;
          case 3:
            this.setState({ avator: OperatorAvator });
            break;
        }
        if (this.props.location.pathname === "/") {
          window.location.href = redirect_url;
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleClick = e => {
    console.log("see user info");
  };

  handleLogout = e => {
    logout().then(() => {
      window.location.href = "/";
    });
  };

  render() {
    const { user_name, avator } = this.state;
    return (
      <Navigation
        nickname={user_name}
        avator={avator}
        handleClick={this.handleClick}
        handleLogout={this.handleLogout}
      />
    );
  }
}

export default withRouter(NavigationBox);
