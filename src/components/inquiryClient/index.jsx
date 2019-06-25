import React, { Component } from "react";
import "./style.scss";

const InquiryClient = props => {
  return (
    <div className="inquiry-wrap">
      <header className="inquiry-title">查询客户</header>
      <div className="inquiry-box">
        <label>身份证号：</label>
        <input className="inquiry-input" type="text" />
      </div>
      <div className="inquiry-btn">
        <label>查询</label>
      </div>
    </div>
  );
};

export default InquiryClient;
