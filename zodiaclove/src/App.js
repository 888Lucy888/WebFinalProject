import "./App.css";
import 'antd/dist/antd.css';
import MatchCards from "./Components/MatchCard";
import CompatCard from "./Components/CompatibilityCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MatchCards name="L" desc="Hello my name is L" zSign="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"/>
        <CompatCard zSign1="Leo" zSign2="Leo" zSign1Img="https://static.remove.bg/remove-bg-web/f50bd6ad4990ff621deccea155ab762c39d8c77a/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png" img1="https://static.remove.bg/remove-bg-web/f50bd6ad4990ff621deccea155ab762c39d8c77a/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png" img2="" value="100%"/>
      </header>
    </div>
  );
}

export default App;
