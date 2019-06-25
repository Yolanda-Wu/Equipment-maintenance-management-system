import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import favicon from "../../assets/favicon.png";
import "./style.scss";

const Navigation = props => {
  const { nickname, avator, handleClick } = props;
  let AdminRight = () => {
    return (
      <>
        <Link to="/admin/inquiry">
          <i className="operate">&#xe601;</i>
        </Link>
        <span id="nickname">{nickname}</span>
        <img className="avator" src={avator} />
      </>
    );
  };
  let AssignRight = () => {
    return (
      <>
        <i className="operate" onClick={handleClick}>
          &#xe657;
        </i>
        <span id="nickname">{nickname}</span>
        <img className="avator" src={avator} />
      </>
    );
  };
  let Avator = () => {
    return <img className="avator" src={avator} />;
  };
  return (
    <div className="navigation">
      <Link to="/" className="left">
        <img className="favicon" src={favicon} />
        <span className="title">东软设备维修中心</span>
      </Link>
      <div className="right">
        <Route path="/admin" component={AdminRight} />
        <Route exact path="/assign" component={AssignRight} />
        <Route exact path="/engineer" component={Avator} />
        <Route exact path="/operator" component={Avator} />
      </div>
    </div>
  );
};

export default Navigation;
