import Calender from "./Components/Calender/Calender";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScheduleForToday from "./Components/Schedule/ScheduleForTheDay";
// import './App.css';

import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/">
              <Calender />
            </Route>
            <Route path="/date">
              <ScheduleForToday />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
