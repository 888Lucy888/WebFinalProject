import "./App.css";
import "antd/dist/antd.css";

import UserData from "./api/UserData";
import Navbar from "./Components/Navbar";
import HoroscopeCard from "./Components/HoroscopeCard";
import Store from "./Components/store";

import { Link, Route, Routes } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>This is an app</h1>
    </div>
  );
}

function Hello() {
  return (
    <div>
      <h1>Hello</h1>
      <Link to="/users/signup">Go to about</Link>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Store></Store>
      <Routes>
        <Route exact path="/" element={<Hello />} />
        <Route path="/users/signup" element={<UserData />} />
      </Routes>
    </div>
  );
}

export default App;
