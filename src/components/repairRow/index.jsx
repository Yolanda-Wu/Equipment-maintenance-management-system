import React, { Component } from "react";
import "./style.scss";

const RepairRow = props => {
  const { tds } = props;
  let status = tds.repairStatus;
  switch (status) {
    case 0:
      status = "等待";
      break;
    case 1:
      status = "维修中";
      break;
    case 2:
      status = "完成";
      break;
    case 3:
      status = "已结算";
      break;
  }

  return (
    <>
      <div className="tr-td" key="tr-td-id">
        <label>{tds.repairId}</label>
      </div>
      <div className="tr-td" key="tr-td-time">
        <label>{tds.repair}</label>
      </div>
      <div className="tr-td" key="tr-td-status">
        <label>{status}</label>
      </div>
      <div className="tr-td" key="tr-td-contact">
        <label>{tds.contact}</label>
      </div>
      <div className="tr-td">
        {tds.repairStatus === 2 ? (
          <i className="settle">&#xe61b;</i>
        ) : (
          <i className="settled">&#xe626;</i>
        )}
      </div>
    </>
  );
};

export default RepairRow;
