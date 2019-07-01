import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./style.scss";

const RepairRecord = props => {
  const {
    company,
    contact,
    handleChange,
    handleSubmit,
    product_type,
    other,
    product_sysid,
    product_brand,
    dev_error,
    isprint,
    handleClose
  } = props;
  //console.log(props);
  return (
    <>
      {isprint && <Redirect to="/admin/print" />}
      <div className="mask" />
      <div className="record-wrap">
        <i className="close" onClick={handleClose}>
          &#xe8b7;
        </i>
        <header className="record-title">报修登记</header>
        <div className="regist-info">
          <div className="regist-left">
            <div className="accept-time">
              <label>接修日期</label>
              <input
                type="text"
                name="repair_date"
                value={new Date().toLocaleDateString()}
                readOnly
              />
            </div>
            <div className="pro-type">
              <label>产品类型</label>
              <input
                type="text"
                name="pro_type"
                value={product_type}
                onChange={handleChange}
              />
            </div>
            <div className="machine-model">
              <label>机器型号</label>
              <input
                type="text"
                name="mach_type"
                value={other}
                onChange={handleChange}
              />
            </div>
            <div className="company">
              <label>单位名称</label>
              <input type="text" name="company" value={company} readOnly />
            </div>
          </div>
          <div className="regist-right">
            {/* <div className="repair-id">
              <label>维修编号</label>
              <input type="text" name="repairId" value={repairId} readOnly />
            </div> */}
            <div className="machine-brand">
              <label>机器品牌</label>
              <input
                type="text"
                name="brand"
                value={product_brand}
                onChange={handleChange}
              />
            </div>
            <div className="machine-sysId">
              <label>系列号&#12288;</label>
              <input
                type="text"
                name="sysId"
                value={product_sysid}
                onChange={handleChange}
              />
            </div>
            <div className="contact">
              <label>联系人&#12288;</label>
              <input type="text" name="contact" value={contact} readOnly />
            </div>
          </div>
        </div>
        <div className="machine-err">
          <label>机器故障现象</label>
          <input
            type="text"
            name="dev_error"
            value={dev_error}
            onChange={handleChange}
          />
        </div>
        <div className="regist-btn" onClick={handleSubmit}>
          <label>报修</label>
        </div>
      </div>
    </>
  );
};

export default RepairRecord;
