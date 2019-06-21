import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./page/login";
import LocalStorage from "./utils/localStorage";
import "./App.scss";

class App extends Component {
  state = {
    name: localStorage.name ? localStorage.name : "",
    type: localStorage.type ? localStorage.type : null
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={Login} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
