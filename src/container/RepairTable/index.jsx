import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import RepairList from "../../components/repairlist";
import { getRepairList } from "../../api/index";

class RepairTable extends Component {
  state = {
    repairList: [],
    pageCount: 0
  };

  componentDidMount() {
    getRepairList()
      .then(data => {
        this.setState({
          repairList: data.repairList,
          pageCount: Math.ceil(data.repairList.length / 10)
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { pageCount } = this.state;
    const page = this.props.location.pathname.split("/")[2]
      ? parseInt(this.props.location.pathname.split("/")[2])
      : 1;
    const repairList = this.state.repairList.slice((page - 1) * 10, page * 10);
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
          <div className="th-td" key={"th-td-constact"}>
            <label>联系人</label>
          </div>
          <div className="th-td" key={"th-td-settle"}>
            <label>结算</label>
          </div>
        </div>
        <RepairList repairList={repairList} />
        <div className="index-wrap">
          <Link
            to={"/admin/" + (page - 1 === 0 ? 1 : page - 1)}
            className="prev"
          >
            上一页
          </Link>
          <div>
            <label className="index-label">
              第<span>{page}</span>页
            </label>
            <label className="page-count">
              共<span>{pageCount}</span>页
            </label>
          </div>
          <Link
            to={"/admin/" + (page + 1 > pageCount ? pageCount : page + 1)}
            className="next"
          >
            下一页
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(RepairTable);
