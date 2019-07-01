import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, withRouter } from "react-router-dom";
import { getMaintainers, assignMaintainer, getUserInfo } from "../../api/index";
import EngineerTable from "../../container/EngineerTable";
import MaintenanceBoard from "../../container/MaintenanceBoard";
import "./style.scss";

class Engineer extends Component {
  state = {
    order_num: "",
    maintainer: "",
    maintainers: [],
    identify: null
  };

  componentDidMount() {
    getUserInfo()
      .then(data => {
        //this.setState(data);
        const { identify, redirect_url } = data;
        this.setState({ identify: identify });
        if (identify === "4" && this.props.location.hash === "#/") {
          window.location.href = "#/admin";
        }
        if (this.props.location.hash !== redirect_url && identify !== "4") {
          window.location.href = redirect_url;
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleClick = e => {
    //console.log(e.target.id);
    this.setState({
      order_num: e.target.id
    });
  };

  handleJump = () => {
    this.setState({
      order_num: ""
    });
    window.location.reload();
  };

  handleClose = () => {
    this.setState({
      order_num: ""
    });
    window.location.reload();
  };

  render() {
    const { order_num } = this.state;
    return (
      <div className="engineer-wrap">
        <EngineerTable
          handleClick={this.handleClick}
          identify={this.state.identify}
        />
        {this.state.identify !== "4" && order_num && (
          <MaintenanceBoard
            {...this.state}
            handleJump={this.handleJump}
            handleClose={this.handleClose}
          />
        )}
      </div>
    );
  }
}

export default withRouter(Engineer);
