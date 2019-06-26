import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./style.scss";

const InquiryClient = props => {
  const { client_id, handleChange, handleSubmit, isNew, isregist } = props;
  console.log(client_id);
  return (
    <>
      {isNew && <Redirect to="/admin/newclient" />}
      {isregist && <Redirect to="/admin/regist" />}
      <div className="mask" />
      <div className="inquiry-wrap">
        <header className="inquiry-title">查询客户</header>
        <div className="inquiry-box">
          <label>身份证号：</label>
          <input
            className="inquiry-input"
            type="number"
            name="client_id"
            value={client_id}
            onChange={handleChange}
          />
        </div>
        <div className="inquiry-btn">
          <label onClick={handleSubmit}>查询</label>
        </div>
      </div>
    </>
  );
};

export default InquiryClient;
