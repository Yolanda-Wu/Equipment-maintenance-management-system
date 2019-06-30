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
      telephone,
      address,
      contact,
      repair_date,
      product_type,
      // mach_type,
      other,
      product_sysid,
      repairId,
      product_brand,
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
              telephone={telephone}
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
              product_type={product_type}
              other={other}
              product_sysid={product_sysid}
              repairId={repairId}
              product_brand={product_brand}
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
              product_type={product_type}
              other={other}
              product_sysid={product_sysid}
              repairId={repairId}
              product_brand={product_brand}
              dev_error={dev_error}
            />
          )}
        />
      </>
    );
  }
}

export default withRouter(RepairBoard);
