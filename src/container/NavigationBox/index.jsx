import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Navigation from "../../components/navigation";
import AdminAvator from "../../assets/admin-avator.jpg";
import AssignAvator from "../../assets/assign-avator.jpg";
import EngineerAvator from "../../assets/engineer-avator.jpg";
import OperatorAvator from "../../assets/operator-avator.jpg";
import LocalStorage from "../../utils/localStorage";
import { getUserInfo } from "../../api/index";

class NavigationBox extends Component {
  state = {
    nickname: "",
    type: null,
    avator: null
  };

  componentDidMount() {
    if (LocalStorage["jwt_token"]) {
      getUserInfo()
        .then(data => {
          this.setState(data);
          //console.log(data);
          const { type, redirect_url } = data;
          switch (type) {
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
            console.log(redirect_url);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  handleClick = e => {
    console.log("click");
  };

  render() {
    const { nickname, avator } = this.state;
    return (
      <Navigation
        nickname={nickname}
        avator={avator}
        handleClick={this.handleClick}
      />
    );
  }
}

export default withRouter(NavigationBox);
