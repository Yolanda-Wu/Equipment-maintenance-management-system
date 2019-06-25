import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import RepairTable from "../../container/RepairTable";
import RepairBoard from "../../container/RepairBoard";
import "./style.scss";

class Admin extends Component {
  state = {};

  render() {
    return (
      <div className="admin-wrap">
        <RepairTable />
        <RepairBoard />
      </div>
    );
  }
}

export default Admin;
