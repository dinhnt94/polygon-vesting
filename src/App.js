import Contract from "./context/contract";
import Address from "./context/address";

import Home from "./views/index";
import "antd/dist/antd.css";
import "./App.css";
function App() {
  return (
    <Contract>
      <Address>
        <Home />
      </Address>
    </Contract>
  );
}

export default App;
