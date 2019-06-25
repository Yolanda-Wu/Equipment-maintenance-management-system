import React, { Component } from "react";
import "./style.scss";

const NewClient = props => {
  return (
    <div className="new-client-wrap">
      <header className="new-title">添加新客户</header>
      <div className="new-inputs">
        <div className="new-id">
          <label>身份证号</label>
          <input type="text" />
        </div>
        <div className="new-company">
          <label>单位名称</label>
          <input type="text" />
        </div>
        <div className="new-phone">
          <label>联系方式</label>
          <input type="text" />
        </div>
        <div className="new-address">
          <label>地址</label>
          <input type="text" />
        </div>
        <div className="new-contact">
          <label>联系人</label>
          <input type="text" />
        </div>
      </div>
      <div className="new-btn">
        <label>创建</label>
      </div>
    </div>
  );
};

export default NewClient;
