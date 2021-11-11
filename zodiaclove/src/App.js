import "./App.css";
import 'antd/dist/antd.css';

import UserData from "./api/UserData";
import Navbar from "./Components/Navbar";
import HoroscopeCard from "./Components/HoroscopeCard";

function App() {
  return (
    <div className="App">
      <Navbar>
      </Navbar>
      <HoroscopeCard>
      </HoroscopeCard>
    </div>
  );
}

export default App;
