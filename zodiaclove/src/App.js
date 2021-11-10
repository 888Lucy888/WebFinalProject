import "./App.css";
import UserData from "./api/UserData";
import MatchCards from "./Components/MatchCards";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MatchCards/>
      </header>
    </div>
  );
}

export default App;
