import "./App.css";
import "antd/dist/antd.css";

import Navbar from "./Components/Navbar";
import HoroscopeView from "./Views/horoscopeView";
import MatchesView from "./Views/matchesView";
import ProfileView from "./Views/ProfileView";
import LandingView from "./Views/landingView";
import StoreView from "./Views/storeView";
import SignUpView from "./Views/signUpView";
import LoginView from "./Views/LoginView";

import { Route, Routes } from "react-router-dom";

function App() {
  let sign = "sagittarius";
  console.log("sign", sign);
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<LandingView />} />
        <Route path="/signup" element={<SignUpView />} />
        <Route path="/store" element={<StoreView />} />
        <Route path="/horoscope" element={<HoroscopeView sign={sign} />} />
        <Route path="/matches" element={<MatchesView> </MatchesView>} />
        <Route path="/login" element={<LoginView />} />;
        <Route path="/profile" element={<ProfileView />} />
      </Routes>
    </div>
  );
}

export default App;
