import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import PickCertificate from "../../components/pickCertificate";
import { getRepair, getMaintenance, settleRepair } from "../../api/index";
import "./style.scss";

class SettleRepair extends Component {
  state = {
    company: "",
    contact: "",
    repairId: "",
    product_type: "",
    other: "",
    product_sysid: "",
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

  render() {
    const {
      detect_record,
      maintain_record,
      manual_cost,
      material_cost,
      note,
      maintain_status
    } = this.state;
    const { order_num, updateSettle, handleClose } = this.props;
    return (
      <>
        <div className="mask" />
        <div className="settle-wrap">
          <i className="close" onClick={handleClose}>
            &#xe8b7;
          </i>
          <header className="settle-title">报修结算</header>
          <div className="settle-info">
            <PickCertificate {...this.state} repairId={order_num} />
            <div className="maintain-info">
              <div className="detect_record">
                <label>检测记录</label>
                <input
                  type="text"
                  name="detect_record"
                  readOnly
                  value={detect_record}
                />
              </div>
              <div className="maintain-record">
                <label>维修记录</label>
                <input
                  type="text"
                  name="maintain_record"
                  readOnly
                  value={maintain_record}
                />
              </div>
              <div className="cost">
                <div className="manual-cost">
                  <label>人工费</label>
                  <input
                    type="text"
                    name="manual_cost"
                    readOnly
                    value={manual_cost}
                  />
                </div>
                <div className="material_cost">
                  <label>材料费</label>
                  <input
                    type="text"
                    name="material_cost"
                    readOnly
                    value={material_cost}
                  />
                </div>
                <div className="fee">
                  <label>共计</label>
                  <input
                    type="text"
                    name="cost"
                    readOnly
                    value={parseFloat(manual_cost) + parseFloat(material_cost)}
                  />
                </div>
              </div>

              <div className="note">
                <label>注意事项</label>
                <input type="text" name="note" readOnly value={note} />
              </div>
            </div>
          </div>
          {maintain_status === "4" ? (
            <div className="settled">
              <label>已结算</label>
            </div>
          ) : maintain_status === "3" ? (
            <div className="settle-btn">
              <label onClick={updateSettle}>结算</label>
            </div>
          ) : (
            <div className="not-settle">
              <label>结算</label>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default SettleRepair;
