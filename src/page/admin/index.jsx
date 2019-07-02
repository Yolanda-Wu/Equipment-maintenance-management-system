import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, withRouter } from "react-router-dom";
import RepairTable from "../../container/RepairTable";
import RepairBoard from "../../container/RepairBoard";
import {
  getRepairList,
  getClient,
  newClient,
  addRepair,
  getUserInfo
} from "../../api/index";
import formatDate from "../../utils/formatDate";
import "./style.scss";

class Admin extends Component {
  state = {
    client_id: "",
    company: "",
    telephone: "",
    address: "",
    contact: "",
    //repair_date: "",
    product_type: "",
    // mach_type: "",
    other: "",
    product_sysid: "",
    repairId: "",
    product_brand: "",
    dev_error: "",
    isNew: false,
    isregist: false,
    isprint: false,
    identify: null
  };
  componentDidMount = () => {
    getUserInfo()
      .then(data => {
        this.setState(data);
        const { identify } = data;
        //this.setState({ identify: identify });
        if (identify === "4" && this.props.location.hash === "#/") {
          window.location.href = "#/admin";
        }
      })
      .catch(err => {
        console.log(err);
      });
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
        this.setState({ telephone: value });
        break;
      case "address":
        this.setState({ address: value });
        break;
      case "contact":
        this.setState({ contact: value });
        break;
      case "pro_type":
        this.setState({ product_type: value });
        break;
      case "mach_type":
        this.setState({ other: value });
        break;
      case "sysId":
        this.setState({ product_sysid: value });
        break;
      case "brand":
        this.setState({ product_brand: value });
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
        telephone: this.state.telephone,
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
        repair_date: formatDate(new Date()),
        repair_status: 1,
        product_type: this.state.product_type,
        product_brand: this.state.product_brand,
        product_sysId: this.state.product_sysid,
        dev_error: this.state.dev_error,
        client_id: this.state.client_id,
        other: this.state.other
      };
      addRepair(body).then(data => {
        this.setState({
          repairId: data.order_num,
          isregist: false,
          isprint: true
        });
      });
    } else if (_route === "print") {
      window.location.href = "/admin";
    }
  };

  handleClose = () => {
    this.setState({
      isNew: false,
      isregist: false,
      isprint: false
    });
    window.location.href = "#/admin";
  };
  render() {
    console.log(this.state.identify);
    return (
      <div className="admin-wrap">
        <RepairTable
          handleClose={this.handleClose}
          identify={this.state.identify}
        />
        <RepairBoard
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleClose={this.handleClose}
        />
        {/* {isNew && <Redirect to="/admin/newclient" />}
        {isregist && <Redirect to="/admin/regist" />}
        {isprint && <Redirect to="/admin/print" />} */}
      </div>
    );
  }
}

export default withRouter(Admin);
