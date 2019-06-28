import React, { Component } from "react";
import "./style.scss";

const RepairRow = props => {
  const { tds, handleSettle } = props;
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
          <i id="settle" className={tds.repairId} onClick={handleSettle}>
            &#xe61b;
          </i>
        ) : (
          <i id="settled" className={tds.repairId} onClick={handleSettle}>
            &#xe626;
          </i>
        )}
      </div>
    </>
  );
};

export default RepairRow;
