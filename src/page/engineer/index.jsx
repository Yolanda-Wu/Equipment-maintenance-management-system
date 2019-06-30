import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { getMaintainers, assignMaintainer } from "../../api/index";
import EngineerTable from "../../container/EngineerTable";
import MaintenanceBoard from "../../container/MaintenanceBoard";
import "./style.scss";

class Engineer extends Component {
  state = {
    order_num: "",
    maintainer: "",
    maintainers: []
  };

  componentDidMount() {}

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
  };

  render() {
    const { order_num } = this.state;
    return (
      <div className="engineer-wrap">
        <EngineerTable handleClick={this.handleClick} />
        {order_num && (
          <MaintenanceBoard {...this.state} handleJump={this.handleJump} />
        )}
      </div>
    );
  }
}

export default Engineer;
