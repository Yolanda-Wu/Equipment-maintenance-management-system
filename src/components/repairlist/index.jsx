import React, { Component } from "react";
import { Link } from "react-router-dom";
import RepairRow from "../repairRow";
import "./style.scss";

const RepairList = props => {
  const { repairList, handleSettle } = props;

  return (
    <div className="tr">
      {repairList.map((tds, index) => (
        <div className="tr-tds" key={"tr-tds" + index}>
          <RepairRow tds={tds} handleSettle={handleSettle} />
        </div>
      ))}
    </div>
  );
};

export default RepairList;
