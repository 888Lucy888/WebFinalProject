import "./App.css";
import 'antd/dist/antd.css';
import MatchCards from "./Components/MatchCard";
import CompatGrid from './Components/CompatibilityGrid';

import UserData from "./api/UserData";
import Navbar from "./Components/Navbar";
import HoroscopeCard from "./Components/HoroscopeCard";
import Store from "./Components/store";
import HoroscopeView from "./Views/horoscopeView";
import MatchesView from "./Views/matchesView";
import ProfileView from "./Views/ProfileView";

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
  let sign = "sagittarius";
  console.log("sign", sign)
  return (
    <div className="App">
      <header className="App-header">
        <MatchCards name="L" desc="Hello my name is L" zSign="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"/>
        <CompatGrid zSign="aries"/>
      </header>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Hello />} />
        <Route path="/users/signup" element={<UserData />} />
        <Route path="/store" element={<Store />} />
        <Route path="/horoscope" element={<HoroscopeView sign= {sign}/>} />
        <Route path="/matches" element={<MatchesView > </MatchesView>} />
        <Route path="/profile" element={<ProfileView />} />
      </Routes>
    </div>
  );
}

export default App;
