import Contract from "./context/contract";
import Address from "./context/address";
import Tool from "./views/tool";
import "antd/dist/antd.css";
import "./App.css";
function App() {
  return (
    <Contract>
      <Address>
        <Tool />
      </Address>
    </Contract>
  );
}

export default App;
