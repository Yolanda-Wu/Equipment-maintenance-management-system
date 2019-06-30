import React from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import "./style.scss";

const NewClient = props => {
  const {
    client_id,
    company,
    telephone,
    address,
    contact,
    handleChange,
    handleSubmit,
    isregist
  } = props;
  //const client_id = props.location.search.split("=")[1];
  //console.log(props);
  return (
    <>
      {isregist && <Redirect to="/admin/regist" />}
      <div className="mask" />
      <div className="new-client-wrap">
        <header className="new-title">添加新客户</header>
        <div className="new-inputs">
          <div className="new-id">
            <label>身份证号</label>
            <input type="text" name="client_id" value={client_id} readOnly />
          </div>
          <div className="new-company">
            <label>单位名称</label>
            <input
              type="text"
              name="company"
              value={company}
              onChange={handleChange}
            />
          </div>
          <div className="new-phone">
            <label>联系方式</label>
            <input
              type="text"
              name="phone"
              value={telephone}
              onChange={handleChange}
            />
          </div>
          <div className="new-address">
            <label>地址</label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={handleChange}
            />
          </div>
          <div className="new-contact">
            <label>联系人</label>
            <input
              type="text"
              name="contact"
              value={contact}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="new-btn" onClick={handleSubmit}>
          <label>创建</label>
        </div>
      </div>
    </>
  );
};

export default withRouter(NewClient);
