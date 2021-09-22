import Contract from "./context/contract";
import Address from "./context/address";
import Tool from "./views/tool";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "antd/dist/antd.css";
import "./App.css";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Contract type="private">
            <Address type="private">
              <Tool type="private" />
            </Address>
          </Contract>
        </Route>
        <Route exact path="/private">
          <Contract type="private">
            <Address type="private">
              <Tool type="private" />
            </Address>
          </Contract>
        </Route>
        <Route exact path="/advisor">
          <Contract type="advisor">
            <Address type="advisor">
              <Tool type="advisor" />
            </Address>
          </Contract>
        </Route>
        <Route exact path="/dev">
          <Contract type="dev">
            <Address type="dev">
              <Tool type="dev" />
            </Address>
          </Contract>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
