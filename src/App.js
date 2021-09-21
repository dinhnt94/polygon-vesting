import Contract from "./context/contract";
import Address from "./context/address";
import Tool from "./views/tool";
import Clarm from "./views/claim";
import Home from "./views/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";
function App() {
  return (
    <Contract>
      <Router>
        <Switch>
          {/* <Route exact path="/tool">
            <Address>
              <Tool />
            </Address>
          </Route> */}

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Contract>
  );
}

export default App;
