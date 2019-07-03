import React, { Component } from "react";
import { Link } from "react-router-dom";
import RepairRow from "../repairRow";
import "./style.scss";

const RepairList = props => {
  const { repairList, handleSettle, identify } = props;

  return (
    <div className="tr">
      {repairList.map((tds, index) => (
        <div className="tr-tds" key={"tr-tds" + index}>
          <RepairRow
            tds={tds}
            handleSettle={handleSettle}
            identify={identify}
          />
        </div>
      ))}
      {/* <div className="tr-tds">
        <div className="tr-td id" id="tr-td-id">
          <label>{"tds.order_num"}</label>
        </div>
        <div className="tr-td time" id="tr-td-time">
          <label>{"tds.repair_date"}</label>
        </div>
        <div className="tr-td status" id="tr-td-status">
          <label>{"status"}</label>
        </div>
        <div className="tr-td contact" id="tr-td-contact">
          <label>{"tds.contact"}</label>
        </div>

        <div className="tr-td settle" id="tr-td-status">
          <i id="unsettle" className={"tds.order_num"} onClick={handleSettle}>
            &#xe61b;
          </i>
        </div>
      </div> */}
    </div>
  );
};

export default RepairList;
