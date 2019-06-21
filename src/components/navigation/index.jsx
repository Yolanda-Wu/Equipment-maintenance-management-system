import React, { Component } from "react";
import { Link } from "react-router-dom";
import favicon from "../../assets/favicon.png";
import "./style.scss";

const Navigation = props => {
  const { operate, avator } = props;
  return (
    <div className="navigation">
      <Link to="/" className="left">
        <img className="favicon" src={favicon} />
        <span className="title">东软设备维修中心</span>
      </Link>
      {avator ? (
        <div className="right">
          {operate === "add" ? (
            <i className="operate">&#xe601;</i>
          ) : (
            <i className="operate">&#xe657;</i>
          )}
          <img className="avator" src={avator} />
        </div>
      ) : null}
    </div>
  );
};

export default Navigation;
