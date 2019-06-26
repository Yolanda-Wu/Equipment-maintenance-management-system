import React, { Component } from "react";
import { Link, Route, withRouter, Redirect } from "react-router-dom";
import InquiryClient from "../../components/inquiryClient";
import NewClient from "../../components/newClient";
import RepairRecord from "../../components/repairRecord";
import PrintCertificate from "../../components/printCertificate";
import "./style.scss";

class RepairBoard extends Component {
  render() {
    const {
      client_id,
      company,
      phone,
      address,
      contact,
      repair_date,
      pro_type,
      mach_type,
      sysId,
      repairId,
      brand,
      dev_error,
      handleChange,
      handleSubmit,
      isNew,
      isregist,
      isprint
    } = this.props;
    return (
      <>
        <Route
          path="/admin/inquiry"
          render={() => (
            <InquiryClient
              isNew={isNew}
              isregist={isregist}
              client_id={client_id}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          )}
        />
        <Route
          path="/admin/newclient"
          render={() => (
            <NewClient
              isregist={isregist}
              client_id={client_id}
              company={company}
              phone={phone}
              address={address}
              contact={contact}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          )}
        />
        <Route
          path="/admin/regist"
          render={() => (
            <RepairRecord
              company={company}
              contact={contact}
              isprint={isprint}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              pro_type={pro_type}
              mach_type={mach_type}
              sysId={sysId}
              repairId={repairId}
              brand={brand}
              dev_error={dev_error}
            />
          )}
        />
        <Route
          exact
          path="/admin/print"
          render={() => (
            <PrintCertificate
              company={company}
              contact={contact}
              pro_type={pro_type}
              mach_type={mach_type}
              sysId={sysId}
              repairId={repairId}
              brand={brand}
              dev_error={dev_error}
            />
          )}
        />
      </>
    );
  }
}

export default withRouter(RepairBoard);
