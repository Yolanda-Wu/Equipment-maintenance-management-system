import React, { Component } from "react";
import { Link, Route, withRouter, Redirect } from "react-router-dom";
import PickCertificate from "../../components/pickCertificate";
import { getRepair, getMaintenance, updateMaintenance } from "../../api/index";
import "./style.scss";

class MaintenanceBoard extends Component {
  state = {
    company: "",
    contact: "",
    order_num: this.props.order_num,
    product_type: "",
    mach_type: "",
    product_sysId: "",
    product_brand: "",
    dev_error: "",
    assign_date: "",
    detect_record: "",
    maintain_record: "",
    manual_cost: "",
    material_cost: "",
    note: "",
    maintain_status: ""
  };
  componentDidMount() {
    getRepair({ order_num: this.props.order_num }).then(data => {
      this.setState(data);
    });
    getMaintenance({ order_num: this.props.order_num }).then(data => {
      this.setState(data);
    });
  }
  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case "detect_record":
        this.setState({ detect_record: value });
        break;
      case "maintain_record":
        this.setState({ maintain_record: value });
        break;
      case "manual_cost":
        this.setState({ manual_cost: value });
        break;
      case "material_cost":
        this.setState({ material_cost: value });
        break;
      case "note":
        this.setState({ note: value });
        break;
    }
  };
  handleUpdate = e => {
    let config = this.state;
    if (e.target.className === "finish") {
      config.maintain_status = 3;
    }
    updateMaintenance(config).then(data => {
      this.props.handleJump();
    });
  };
  render() {
    const {
      assign_date,
      detect_record,
      maintain_record,
      manual_cost,
      material_cost,
      note
    } = this.state;

    const { order_num, handleClose } = this.props;

    return (
      <>
        <div className="mask" />
        <div className="maintain-box">
          <i className="close" onClick={handleClose}>
            &#xe8b7;
          </i>
          <header>维修详情</header>
          <PickCertificate {...this.state} repairId={order_num} />
          <div className="maintain-info">
            <div className="detect_record">
              <label>检测记录</label>
              <input
                type="text"
                name="detect_record"
                onChange={this.handleChange}
                value={detect_record}
              />
            </div>
            <div className="maintain-record">
              <label>维修记录</label>
              <input
                type="text"
                name="maintain_record"
                onChange={this.handleChange}
                value={maintain_record}
              />
            </div>
            <div className="cost">
              <div className="manual-cost">
                <label>人工费</label>
                <input
                  type="text"
                  name="manual_cost"
                  onChange={this.handleChange}
                  value={manual_cost}
                />
              </div>
              <div className="material_cost">
                <label>材料费</label>
                <input
                  type="text"
                  name="material_cost"
                  onChange={this.handleChange}
                  value={material_cost}
                />
              </div>
            </div>
            <div className="note">
              <label>注意事项</label>
              <input
                type="text"
                name="note"
                onChange={this.handleChange}
                value={note}
              />
            </div>
          </div>
          <div className="btns">
            <div id="update-btn" onClick={this.handleUpdate}>
              <label>修改</label>
            </div>
            <div id="finish-btn" className="finish" onClick={this.handleUpdate}>
              <label className="finish">结束</label>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MaintenanceBoard;
