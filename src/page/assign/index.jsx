import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, withRouter } from "react-router-dom";
import AssignTable from "../../container/AssignTable";
import AssignBoard from "../../container/AssignBoard";
import { getMaintainers, assignMaintainer, getUserInfo } from "../../api/index";
import formatDate from "../../utils/formatDate";
import "./style.scss";

class Assign extends Component {
  state = {
    repairId: "",
    maintainer: "",
    maintainers: [],
    identify: null
  };

  componentDidMount() {
    getUserInfo()
      .then(data => {
        this.setState(data);
        const { identify, redirect_url } = data;
        //this.setState({ identify: identify });
        if (identify === "4" && this.props.location.hash === "#/") {
          window.location.href = "#/admin";
        }
        if (this.props.location.hash !== redirect_url && identify !== "4") {
          window.location.href = redirect_url;
        }
      })
      .catch(err => {
        console.log(err);
      });
    getMaintainers().then(data => {
      //console.log(data.maintainers);
      this.setState({
        maintainers: data.maintainers
      });
      this.setState({
        maintainer: data.maintainers[0] ? data.maintainers[0].id : ""
      });
    });
  }

  handleClick = e => {
    const id = e.target.id;
    this.setState({ repairId: id });
  };

  handleChange = e => {
    const children = e.target.children;
    for (let i = 0; i < children.length; i++) {
      if (children[i].selected) {
        this.setState({
          maintainer: children[i].value
        });
        break;
      }
    }
  };
  handleAssign = e => {
    assignMaintainer({
      order_num: this.state.repairId,
      maintainer: this.state.maintainer,
      assign_date: formatDate(new Date())
    }).then(() => {
      this.setState({
        repairId: "",
        maintainer: ""
      });
      window.location.reload();
    });
  };
  handleClose = () => {
    this.setState({
      repairId: ""
    });
    //window.location.reload();
  };
  render() {
    return (
      <div className="assign-wrap">
        <AssignTable
          handleClick={this.handleClick}
          identify={this.state.identify}
        />
        {this.state.identify !== "4" && this.state.repairId && (
          <AssignBoard
            {...this.state}
            handleChange={this.handleChange}
            handleAssign={this.handleAssign}
            handleClose={this.handleClose}
          />
        )}
      </div>
    );
  }
}

export default withRouter(Assign);
