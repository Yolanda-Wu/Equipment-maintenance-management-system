import React, { Component } from "react";
import { Link } from "react-router-dom";
import RepairRow from "../repairRow";
import "./style.scss";

const RepairList = props => {
  const { repairList } = props;

  return (
    <div className="tr">
      {repairList.map((tds, index) => (
        <div className="tr-tds" key={"tr-tds" + index}>
          <RepairRow tds={tds} />
        </div>
      ))}
    </div>
  );
};

export default RepairList;
