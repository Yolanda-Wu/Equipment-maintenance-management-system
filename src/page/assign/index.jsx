import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import AssignTable from "../../container/AssignTable";
import AssignBoard from "../../container/AssignBoard";
import { getMaintainers, assignMaintainer } from "../../api/index";
import "./style.scss";

class Assign extends Component {
  state = {
    repairId: "",
    maintainer: "",
    maintainers: []
  };

  componentDidMount() {
    getMaintainers().then(data => {
      //console.log(data.maintainers);
      this.setState({
        maintainers: data.maintainers
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
      assign_data: new Date()
    }).then(() => {
      this.setState({
        repairId: "",
        maintainer: ""
      });
    });
  };
  render() {
    return (
      <div className="assign-wrap">
        <AssignTable handleClick={this.handleClick} />
        <AssignBoard
          {...this.state}
          handleChange={this.handleChange}
          handleAssign={this.handleAssign}
        />
      </div>
    );
  }
}

export default Assign;
