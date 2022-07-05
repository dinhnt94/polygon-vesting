import Contract from "./context/contract";
import Address from "./context/address";
import Tool from "./views/tool";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";
import Application from './components/Application'

function App() {
  return (
    <Router>
      <Switch>
        <Application>
          <Route exact path="/private">
            <Contract type="private">
              <Address type="private">
                <Tool type="private" />
              </Address>
            </Contract>
          </Route>
          <Route exact path="/team">
            <Contract type="team">
              <Address type="team">
                <Tool type="team" />
              </Address>
            </Contract>
          </Route>
          <Route exact path="/marketing">
            <Contract type="marketing">
              <Address type="marketing">
                <Tool type="marketing" />
              </Address>
            </Contract>
          </Route>
          <Route exact path="/ecosystem">
            <Contract type="ecosystem">
              <Address type="ecosystem">
                <Tool type="ecosystem" />
              </Address>
            </Contract>
          </Route>
          <Route exact path="/dex">
            <Contract type="dex">
              <Address type="dex">
                <Tool type="dex" />
              </Address>
            </Contract>
          </Route>
          <Route exact path="/reserve">
            <Contract type="reserve">
              <Address type="reserve">
                <Tool type="reserve" />
              </Address>
            </Contract>
          </Route>
        </Application>
      </Switch>
    </Router>
  );
}

export default App;
