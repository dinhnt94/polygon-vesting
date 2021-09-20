import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Homepage from "../pages/index.jsx";
import "./index.scss";

export default function App() {
  return (
    <div className="container">
      <Router>
        {/* <NotifiProvider> */}
        <Switch>
          <Route path="/" children={<Homepage />} />
        </Switch>
        {/* </NotifiProvider> */}
      </Router>
    </div>
  );
}
