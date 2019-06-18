import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./page/home/home";
import TiltleBar from "./common/TitleBar/titleBar";

class App extends Component {
  state = {
    isLogin: false,
    id: "student",
    secondaryDir: "物理"
  };

  render() {
    return (
      <div className="App">
        <TiltleBar theme={this.state.id} />
        <Router>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
