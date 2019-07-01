import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import favicon from "../../assets/favicon.png";
import "./style.scss";

const Navigation = props => {
  const { nickname, avator, handleLogout, handleClick, identify } = props;
  let AdminRight = () => {
    return (
      <>
        {identify !== "4" ? (
          <Link to="/admin/inquiry">
            <i className="operate">&#xe601;</i>
          </Link>
        ) : (
          <></>
        )}
        <div className="userInfo">
          <span id="nickname">{nickname}</span>
          <span className="logout">
            退出登录：
            <i className="logout-i" onClick={handleLogout}>
              &#xe61e;
            </i>
          </span>
        </div>
        <img className="avator" src={avator} onClick={handleClick} />
      </>
    );
  };

  let Avator = () => {
    return (
      <>
        <div className="userInfo">
          <span id="nickname">{nickname}</span>
          <span className="logout">
            退出登录：
            <i className="logout-i" onClick={handleLogout}>
              &#xe61e;
            </i>
          </span>
        </div>
        <img className="avator" src={avator} onClick={handleClick} />
      </>
    );
  };
  return (
    <div className="navigation">
      <Link to="/" className="left">
        <img className="favicon" src={favicon} />
        <span className="title">东软设备维修中心</span>
      </Link>
      <div className="right">
        <Route path="/admin" component={AdminRight} />
        <Route exact path="/assign" component={Avator} />
        <Route exact path="/engineer" component={Avator} />
        <Route exact path="/operator" component={Avator} />
      </div>
    </div>
  );
};

export default Navigation;
