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
    identify: null,
    user_name: "",
    redirect_url: ""
  };

  componentDidMount() {
    getUserInfo()
      .then(data => {
        this.setState(data);
        const { redirect_url } = data;
        //this.setState({ identify: identify });
        if (this.props.location.hash !== redirect_url) {
          window.location.href = redirect_url;
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  refreshNav = () => {
    getUserInfo()
      .then(data => {
        this.setState(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <HashRouter>
        <div className="App">
          <div className="bg" />
          <Route
            exact
            path="/"
            render={() => <Login refreshNav={this.refreshNav} />}
          />
          <Navigation {...this.state} />
          <Route
            path="/:route"
            render={() => (
              <div className="work-page">
                <>
                  <div className="left-nav">
                    {this.state.identify === "1" ||
                    this.state.identify === "4" ? (
                      <Link to="/admin">
                        <div className="left-repair-settle">
                          <i className="repair-i">&#xe709;</i>
                        </div>
                      </Link>
                    ) : (
                      <div
                        className="left-repair-settle"
                        onClick={() => {
                          alert("没有权限！");
                        }}
                      >
                        <i className="repair-i">&#xe709;</i>
                      </div>
                    )}
                    {this.state.identify === "2" ||
                    this.state.identify === "4" ? (
                      <Link to="/assign">
                        <div className="left-assign">
                          <i className="assign-i">&#xe608;</i>
                        </div>
                      </Link>
                    ) : (
                      <div
                        className="left-assign"
                        onClick={() => {
                          alert("没有权限！");
                        }}
                      >
                        <i className="assign-i">&#xe608;</i>
                      </div>
                    )}
                    {this.state.identify === "3" ||
                    this.state.identify === "4" ? (
                      <Link to="/engineer">
                        <div className="left-maintain">
                          <i className="maintain-i">&#xe6af;</i>
                        </div>
                      </Link>
                    ) : (
                      <div
                        className="left-maintain"
                        onClick={() => {
                          alert("没有权限！");
                        }}
                      >
                        <i className="maintain-i">&#xe6af;</i>
                      </div>
                    )}
                    <div
                      className="left-operate"
                      onClick={() => {
                        alert("尚未开发！");
                      }}
                    >
                      <i className="data-i">&#xe613;</i>
                    </div>
                  </div>
                </>
                <Route exact path="/admin" component={Admin} />
                <Route path="/admin/:page" component={Admin} />
                <Route exact path="/assign" component={Assign} />
                <Route exact path="/engineer" component={Engineer} />
                <Route exact path="/operator" component={Admin} />
              </div>
            )}
          />
        </div>
      </HashRouter>
    );
  }
}

export default App;
