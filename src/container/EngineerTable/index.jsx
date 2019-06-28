import React, { Component } from "react";
import { getMaintenanceList } from "../../api/index";
import MaintenancesList from "../../components/MaintenancesList";
import Engineer from "../../page/engineer";

class EngineerTable extends Component {
  state = {
    page: 1,
    maintenancesList: [],
    pageCount: 0
  };

  componentDidMount() {
    getMaintenanceList()
      .then(data => {
        this.setState({
          maintenancesList: data.maintenanceList,
          pageCount: Math.ceil(data.maintenanceList.length / 10)
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  changePage = e => {
    if (e.target.className === "prev" && this.state.page !== 1) {
      this.setState(state => ({
        page: state.page - 1
      }));
    } else if (
      e.target.className === "next" &&
      this.state.page !== this.state.pageCount
    ) {
      this.setState(state => ({
        page: state.page + 1
      }));
    }
  };

  render() {
    const { pageCount, page } = this.state;
    const maintenancesList = this.state.maintenancesList.slice(
      (page - 1) * 10,
      page * 10
    );
    const { handleClick } = this.props;
    return (
      <div className="work-list">
        <div className="list-title">
          <label>维修单列表</label>
        </div>
        <div className="th">
          <div className="th-td" key={"th-td-repairId"}>
            <label>维修单编号</label>
          </div>
          <div className="th-td" key={"th-td-time"}>
            <label>分配时间</label>
          </div>
          <div className="th-td" key={"th-td-status"}>
            <label>维修状态</label>
          </div>
          <div className="th-td" key={"th-td-maintainer"}>
            <label>维修人员</label>
          </div>
          <div className="th-td" key={"th-td-assign"}>
            <label>修改</label>
          </div>
        </div>
        <MaintenancesList
          maintenancesList={maintenancesList}
          handleClick={handleClick}
        />
        <div className="index-wrap">
          <label className="prev" onClick={this.changePage}>
            上一页
          </label>

          <div>
            <label className="index-label">
              第<span>{page}</span>页
            </label>
            <label className="page-count">
              共<span>{pageCount}</span>页
            </label>
          </div>
          <label className="next" onClick={this.changePage}>
            下一页
          </label>
        </div>
      </div>
    );
  }
}

export default EngineerTable;
