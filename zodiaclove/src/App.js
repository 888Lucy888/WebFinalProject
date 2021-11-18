import "./App.css";
import 'antd/dist/antd.css';
import MatchCards from "./Components/MatchCard";
import CompatGrid from './Components/CompatibilityGrid';

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
      <header className="App-header">
        <MatchCards name="L" desc="Hello my name is L" zSign="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"/>
        <CompatGrid zSign="aries"/>
      </header>
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
