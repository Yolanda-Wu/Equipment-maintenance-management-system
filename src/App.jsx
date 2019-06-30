import React, { Component } from "react";
import { Link, BrowserRouter, Route, HashRouter } from "react-router-dom";
import Login from "./page/login";
import Admin from "./page/admin";
import Assign from "./page/assign";
import Engineer from "./page/engineer";
import Navigation from "./container/NavigationBox";
import "./App.scss";

class App extends Component {
  state = {
    isLogin: false
  };

  componentDidMount() {}

  render() {
    return (
      <HashRouter>
        <div className="App">
          <Navigation />
          <Route exact path="/" component={Login} />
          <Route exact path="/admin" component={Admin} />
          <Route path="/admin/:page" component={Admin} />
          <Route exact path="/assign" component={Assign} />
          <Route exact path="/engineer" component={Engineer} />
          <Route exact path="/operator" component={Login} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
