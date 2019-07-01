import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import RepairList from "../../components/repairlist";
import SettleRepair from "../../container/SettleRepair";
import { getRepairList, settleRepair } from "../../api/index";

class RepairTable extends Component {
  state = {
    page: 1,
    repairList: [],
    pageCount: 0,
    order_num: ""
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

  handleSettle = e => {
    this.setState({
      order_num: e.target.className
    });
  };
  updateSettle = () => {
    settleRepair({ order_num: this.state.order_num }).then(() => {
      alert("结算成功");
      this.setState({
        order_num: ""
      });
      window.location.reload();
    });
  };
  handleClose = () => {
    this.setState({
      order_num: ""
    });
    window.location.reload();
  };

  render() {
    const { pageCount, page, order_num } = this.state;
    const repairList = this.state.repairList.slice((page - 1) * 10, page * 10);
    const { identify } = this.props;
    return (
      <>
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
            <div className="th-td" key={"th-td-constact"}>
              <label>联系人</label>
            </div>
            <div className="th-td" key={"th-td-settle"}>
              <label>结算</label>
            </div>
          </div>
          <RepairList
            repairList={repairList}
            handleSettle={this.handleSettle}
            identify={identify}
          />
          <div className="index-wrap">
            <label className="prev" onClick={this.changePage}>
              上一页
            </label>

            <div>
              <label className="index-label">
                第 <span>{page}</span> 页
              </label>
              <label className="page-count">
                共 <span>{pageCount}</span> 页
              </label>
            </div>
            <label className="next" onClick={this.changePage}>
              下一页
            </label>
          </div>
        </div>
        {identify !== "4" && order_num && (
          <SettleRepair
            order_num={order_num}
            updateSettle={this.updateSettle}
            handleClose={this.handleClose}
          />
        )}
      </>
    );
  }
}

export default withRouter(RepairTable);
