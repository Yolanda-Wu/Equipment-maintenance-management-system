import React, { Component } from "react";
import "./style.scss";

const RepairRow = props => {
  const { tds, handleSettle } = props;
  let status = tds.repair_status;
  switch (status) {
    case "1":
      status = "等待";
      break;
    case "2":
      status = "维修中";
      break;
    case "3":
      status = "待结算";
      break;
    case "4":
      status = "已结算";
      break;
    default:
      status = "出错";
  }

  return (
    <>
      <div className="tr-td" key="tr-td-id">
        <label>{tds.order_num}</label>
      </div>
      <div className="tr-td" key="tr-td-time">
        <label>{tds.repair_date}</label>
      </div>
      <div className="tr-td" key="tr-td-status">
        <label>{status}</label>
      </div>
      <div className="tr-td" key="tr-td-contact">
        <label>{tds.contact}</label>
      </div>
      <div className="tr-td">
        {tds.repair_status === "3" ? (
          <i id="tosettle" className={tds.order_num} onClick={handleSettle}>
            &#xe61b;
          </i>
        ) : tds.repair_status === "4" ? (
          <i id="settled" className={tds.order_num} onClick={handleSettle}>
            &#xe626;
          </i>
        ) : (
          <i id="unsettle" className={tds.order_num} onClick={handleSettle}>
            &#xe61b;
          </i>
        )}
      </div>
    </>
  );
};

export default RepairRow;
