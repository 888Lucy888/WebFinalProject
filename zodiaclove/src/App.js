import "./App.css";
import UserData from "./api/UserData";

import { Route, Routes } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>This is an app</h1>
    </div>
  );
}

function Hello() {
  return <h1>Hello</h1>;
}

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/signup" element={<UserData />} />
      </Routes>
    </div>
  );
}

export default App;
