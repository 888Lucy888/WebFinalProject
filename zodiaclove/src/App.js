import "./App.css";
import 'antd/dist/antd.css';

import UserData from "./api/UserData";
import Navbar from "./Components/Navbar";
import HoroscopeCard from "./Components/HoroscopeCard";
import Store from "./Components/store";

function App() {
  return (
    <div className="App">
      <Navbar>
      </Navbar>
      <Store>
      </Store> 

    </div>
  );
}

export default App;
