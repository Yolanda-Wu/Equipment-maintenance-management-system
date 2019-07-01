import React, { Component } from "react";
import { Link, BrowserRouter, Route, HashRouter } from "react-router-dom";
import Login from "./page/login";
import Admin from "./page/admin";
import Assign from "./page/assign";
import Engineer from "./page/engineer";
import Navigation from "./container/NavigationBox";
import { getUserInfo } from "./api/index";
import "./App.scss";

class App extends Component {
  state = {
    identify: null
  };

  componentDidMount() {
    getUserInfo()
      .then(data => {
        this.setState(data);
        const { identify, redirect_url } = data;
        this.setState({ identify: identify });
        if (this.props.location.hash !== redirect_url) {
          window.location.href = redirect_url;
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <div className="bg" />
          <Route exact path="/" component={Login} />
          <Route
            path="/:route"
            render={() => (
              <div className="left-nav">
                <div className="top" />
                {this.state.identify === "1" || this.state.identify === "4" ? (
                  <Link to="/admin">
                    <div className="left-repair-settle">
                      <label>报修与结算管理</label>
                    </div>
                  </Link>
                ) : (
                  <div className="left-repair-settle">
                    <label>报修与结算管理(无权限)</label>
                  </div>
                )}
                {this.state.identify === "2" || this.state.identify === "4" ? (
                  <Link to="/assign">
                    <div className="left-assign">
                      <label>任务调度管理</label>
                    </div>
                  </Link>
                ) : (
                  <div className="left-assign">
                    <label>任务调度管理(无权限)</label>
                  </div>
                )}
                {this.state.identify === "3" || this.state.identify === "4" ? (
                  <Link to="/engineer">
                    <div className="left-maintain">
                      <label>维修管理</label>
                    </div>
                  </Link>
                ) : (
                  <div className="left-maintain">
                    <label>维修管理(无权限)</label>
                  </div>
                )}
                <div className="left-operate">
                  <label>数据趋势图(未开发)</label>
                </div>
              </div>
            )}
          />
          <Navigation />
          <div className="work-page">
            <Route exact path="/admin" component={Admin} />
            <Route path="/admin/:page" component={Admin} />
            <Route exact path="/assign" component={Assign} />
            <Route exact path="/engineer" component={Engineer} />
            <Route exact path="/operator" component={Admin} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
