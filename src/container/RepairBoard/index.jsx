import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import InquiryClient from "../../components/inquiryClient";
import NewClient from "../../components/newClient";
import RepairRecord from "../../components/repairRecord";
import PrintCertificate from "../../components/printCertificate";
import "./style.scss";

class RepairBoard extends Component {
  state = {};
  render() {
    return (
      <>
        <Route exact path="/admin/inquiry" component={InquiryClient} />
        <Route exact path="/admin/newclient" component={NewClient} />
        <Route exact path="/admin/regist" component={RepairRecord} />
        <Route exact path="/admin/print" component={PrintCertificate} />
        {/* <div className="mask" /> */}
        {/* <RepairRecord /> */}
        {/* <PrintCertificate /> */}
        {/* <NewClient /> */}
        {/* <InquiryClient /> */}
      </>
    );
  }
}

export default RepairBoard;
