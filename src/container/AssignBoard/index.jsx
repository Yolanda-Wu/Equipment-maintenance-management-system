import React, { Component } from "react";
import { Link, Route, withRouter, Redirect } from "react-router-dom";
import PickCertificate from "../../components/pickCertificate";
import { getMaintainers } from "../../api/index";
import "./style.scss";

class AssignBoard extends Component {
  render() {
    const { repairId, maintainers, handleChange, handleAssign } = this.props;

    return (
      <>
        {repairId && (
          <>
            <div className="mask" />
            <div className="assign-box">
              <header>分配维修人员</header>
              <div className="select">
                <select onChange={handleChange}>
                  {maintainers.map((m, index) => (
                    <option value={m.maintainer} key={"maintainer" + index}>
                      {m.name}
                    </option>
                  ))}
                </select>
                <div className="assign-btn" onClick={handleAssign}>
                  <label>分配</label>
                </div>
              </div>
              <PickCertificate {...this.props} />
            </div>
          </>
        )}
      </>
    );
  }
}

export default AssignBoard;
