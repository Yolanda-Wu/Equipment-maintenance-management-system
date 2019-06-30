import React, { Component } from "react";
import { getRepairList } from "../../api/index";
import AssignList from "../../components/AssignList";

class AssignTable extends Component {
  state = {
    page: 1,
    repairList: [],
    pageCount: 0
  };

  componentDidMount() {
    getRepairList()
      .then(data => {
        this.setState({
          repairList: data.repairslist,
          pageCount: Math.ceil(data.repairslist.length / 10)
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
    const repairList = this.state.repairList.slice((page - 1) * 10, page * 10);
    const { handleClick } = this.props;
    return (
      <div className="work-list">
        <div className="list-title">
          <label>报修单列表</label>
        </div>
        <div className="th">
          <div className="th-td" key={"th-td-repairId"}>
            <label>报修单编号</label>
          </div>
          <div className="th-td" key={"th-td-time"}>
            <label>报修时间</label>
          </div>
          <div className="th-td" key={"th-td-status"}>
            <label>报修状态</label>
          </div>
          <div className="th-td" key={"th-td-maintainer"}>
            <label>维修人员</label>
          </div>
          <div className="th-td" key={"th-td-assign"}>
            <label>分配</label>
          </div>
        </div>
        <AssignList repairList={repairList} handleClick={handleClick} />
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

export default AssignTable;
