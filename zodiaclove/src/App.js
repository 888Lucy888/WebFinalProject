import "./App.css";
import UserData from "./api/UserData";

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
      <Header />
      <Routes>
        <Route exact path="/" element={<Hello />} />
        <Route path="/users/signup" element={<UserData />} />
      </Routes>
    </div>
  );
}

export default App;
