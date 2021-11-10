import "./App.css";
import MatchCards from "./Components/MatchCards";
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MatchCards name="L" desc="Hello my name is L" zSign="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"/>
      </header>
    </div>
  );
}

export default App;
