import React from "react";
import "./style.scss";

const PickCertificate = props => {
  const {
    company,
    contact,
    repairId,
    product_type,
    other,
    product_sysid,
    product_brand,
    dev_error
  } = props;
  return (
    <div className="certificate-board">
      {/* <div className="regist-title">
        <label>东软计算机有限公司取机凭证</label>
      </div> */}
      <div className="regist-info">
        <div className="regist-left">
          <div className="accept-time">
            <label>接修日期</label>
            <input
              type="text"
              value={new Date().toLocaleDateString()}
              readOnly
            />
          </div>
          <div className="pro-type">
            <label>产品类型</label>
            <input type="text" value={product_type} readOnly />
          </div>
          <div className="machine-model">
            <label>机器型号</label>
            <input type="text" value={other} readOnly />
          </div>
          <div className="company">
            <label>单位名称</label>
            <input type="text" value={company} readOnly />
          </div>
        </div>
        <div className="regist-right">
          <div className="repair-id">
            <label>维修编号</label>
            <input type="text" value={repairId} readOnly />
          </div>
          <div className="machine-brand">
            <label>机器品牌</label>
            <input type="text" value={product_brand} readOnly />
          </div>
          <div className="machine-sysId">
            <label>系列号&#12288;</label>
            <input type="text" value={product_sysid} readOnly />
          </div>
          <div className="contact">
            <label>联系人&#12288;</label>
            <input type="text" value={contact} readOnly />
          </div>
        </div>
      </div>
      <div className="machine-err">
        <label>机器故障现象</label>
        <input type="text" value={dev_error} readOnly />
      </div>
    </div>
  );
};

export default PickCertificate;
