import React, { Component } from "react";
import { Link, Route, withRouter, Redirect } from "react-router-dom";
import PickCertificate from "../../components/pickCertificate";
import { getRepair } from "../../api/index";
import "./style.scss";

class AssignBoard extends Component {
  state = {};
  componentDidMount() {
    getRepair({ order_num: this.props.repairId }).then(data => {
      this.setState(data);
    });
  }
  render() {
    const {
      repairId,
      maintainers,
      handleChange,
      handleAssign,
      handleClose
    } = this.props;

    return (
      <>
        {repairId && (
          <>
            <div className="mask" />
            <div className="assign-box">
              <i className="close" onClick={handleClose}>
                &#xe8b7;
              </i>
              <header>分配维修人员</header>
              <div className="select">
                <select onChange={handleChange}>
                  {maintainers.map((m, index) => (
                    <option value={m.id} key={"maintainer" + index}>
                      {m.user_name}
                    </option>
                  ))}
                </select>
                <div className="assign-btn" onClick={handleAssign}>
                  <label>分配</label>
                </div>
              </div>
              <PickCertificate {...this.state} repairId={repairId} />
            </div>
          </>
        )}
      </>
    );
  }
}

export default AssignBoard;
