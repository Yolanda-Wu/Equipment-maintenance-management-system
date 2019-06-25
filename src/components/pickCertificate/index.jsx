import React from "react";
import "./style.scss";

const PickCertificate = props => {
  return (
    <div className="certificate-board">
      <div className="regist-list">
        <label>东软计算机有限公司取机凭证</label>
      </div>
      <div className="regist-info">
        <div className="regist-left">
          <div className="accept-time">
            <label>接修日期</label>
            <input type="text" />
          </div>
          <div className="pro-type">
            <label>产品类型</label>
            <input type="text" />
          </div>
          <div className="machine-model">
            <label>机器型号</label>
            <input type="text" />
          </div>
          <div className="company">
            <label>单位名称</label>
            <input type="text" />
          </div>
        </div>
        <div className="regist-right">
          <div className="repair-id">
            <label>维修编号</label>
            <input type="text" />
          </div>
          <div className="machine-brand">
            <label>机器品牌</label>
            <input type="text" />
          </div>
          <div className="machine-sysId">
            <label>系列号&#12288;</label>
            <input type="text" />
          </div>
          <div className="contact">
            <label>联系人&#12288;</label>
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="machine-err">
        <label>机器故障现象</label>
        <input type="text" />
      </div>
    </div>
  );
};

export default PickCertificate;
