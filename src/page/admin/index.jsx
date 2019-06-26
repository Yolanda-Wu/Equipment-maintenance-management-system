import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import RepairTable from "../../container/RepairTable";
import RepairBoard from "../../container/RepairBoard";
import {
  getRepairList,
  getClient,
  newClient,
  addRepair
} from "../../api/index";
import "./style.scss";

class Admin extends Component {
  state = {
    client_id: "",
    company: "",
    phone: "",
    address: "",
    contact: "",
    //repair_date: "",
    pro_type: "",
    mach_type: "",
    sysId: "",
    repairId: "",
    brand: "",
    dev_error: "",
    isNew: false,
    isregist: false,
    isprint: false
  };
  handleChange = e => {
    let _class = e.target.name;
    let value = e.target.value;
    switch (_class) {
      case "client_id":
        this.setState({ client_id: value });
        break;
      case "company":
        this.setState({ company: value });
        break;
      case "phone":
        this.setState({ phone: value });
        break;
      case "address":
        this.setState({ address: value });
        break;
      case "contact":
        this.setState({ contact: value });
        break;
      case "pro_type":
        this.setState({ pro_type: value });
        break;
      case "mach_type":
        this.setState({ mach_type: value });
        break;
      case "sysId":
        this.setState({ sysId: value });
        break;
      case "brand":
        this.setState({ brand: value });
        break;
      case "dev_error":
        this.setState({ dev_error: value });
        break;
    }
  };
  handleSubmit = e => {
    const _route = this.props.location.pathname.split("/")[2];
    const id = this.state.client_id;
    if (_route === "inquiry") {
      if (id === "") {
        alert("请输入身份证号");
      } else if (id.length !== 18) {
        alert("身份证号应为18位数字");
      } else {
        getClient({ client_id: id }).then(data => {
          if (data.exit) {
            this.setState({
              isregist: true,
              company: data.company,
              phone: data.telephone,
              address: data.address,
              contact: data.contact
            });
          } else {
            this.setState({
              isNew: true
            });
          }
        });
      }
    } else if (_route === "newclient") {
      const client = {
        client_id: this.state.client_id,
        company: this.state.company,
        contact: this.state.contact,
        telephone: this.state.phone,
        address: this.state.address
      };
      newClient(client).then(data => {
        this.setState({
          isNew: false,
          isregist: true
        });
      });
    } else if (_route === "regist") {
      const body = {
        repair_date: new Date(),
        repair_status: 0,
        product_type: this.state.pro_type,
        product_brand: this.state.brand,
        product_sysId: this.state.sysId,
        dev_error: this.state.dev_error,
        client_id: this.state.client_id
      };
      addRepair(body).then(data => {
        this.setState({
          repairId: data.repairId,
          isregist: false,
          isprint: true
        });
      });
    } else if (_route === "print") {
      window.location.href = "/admin";
    }
  };
  render() {
    const { isNew, isregist, isprint } = this.state;
    return (
      <div className="admin-wrap">
        <RepairTable />
        <RepairBoard
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {/* {isNew && <Redirect to="/admin/newclient" />}
        {isregist && <Redirect to="/admin/regist" />}
        {isprint && <Redirect to="/admin/print" />} */}
      </div>
    );
  }
}

export default Admin;
