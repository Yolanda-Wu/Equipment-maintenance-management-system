import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const AssignList = props => {
  const { repairList, handleClick, identify } = props;

  return (
    <div className="tr">
      {repairList.map((tds, index) => {
        let status;
        switch (tds.repair_status) {
          case "1":
            status = "等待分配";
            break;
          case "2":
            status = "维修中";
            break;
          case "3":
            status = "完成";
            break;
          case "4":
            status = "已结算";
            break;
        }
        return (
          <div className="tr-tds" key={"tr-tds" + index}>
            <div className="tr-td id" key="tr-td-id">
              <label>{tds.order_num}</label>
            </div>
            <div className="tr-td time" key="tr-td-time">
              <label>{tds.repair_date}</label>
            </div>
            <div className="tr-td status" key="tr-td-status">
              <label>{status}</label>
            </div>
            <div className="tr-td contact" key="tr-td-contact">
              <label>{tds.maintainer}</label>
            </div>
            <div className="tr-td t-assign">
              {identify !== "4" &&
                (tds.repair_status === "1" ? (
                  <i
                    className="assign"
                    id={tds.order_num}
                    onClick={handleClick}
                  >
                    &#xe657;
                  </i>
                ) : (
                  <></>
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AssignList;
