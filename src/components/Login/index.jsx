import React from "react";
import Icon from "../../assets/login-icon.png";
import "./style.scss";

const Login = props => {
  const { handleChange, handleSubmit, account, password } = props;
  return (
    <div className="login-wrap">
      <img className="login-icon" src={Icon} />
      <div className="accountBox">
        <i className="a-icon">&#xe6e0;</i>
        <input
          className="account"
          type="text"
          name="account"
          onChange={handleChange}
          placeholder="请输入你的账号"
          value={account}
        />
      </div>
      <div className="passwordBox">
        <i className="p-icon">&#xe600;</i>
        <input
          className="password"
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="请输入你的密码"
          value={password}
        />
      </div>
      <div className="submit" onClick={handleSubmit}>
        提交
      </div>
    </div>
  );
};

export default Login;
