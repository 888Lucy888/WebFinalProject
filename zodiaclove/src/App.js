import "./App.css";
import 'antd/dist/antd.css';
import MatchCards from "./Components/MatchCard";
import CompatGrid from './Components/CompatibilityGrid';

/*const info = {
  for (var i=0; i<12; i++){
    
  }
}*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MatchCards name="L" desc="Hello my name is L" zSign="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"/>
        <CompatGrid zSign="aries"/>
      </header>
    </div>
  );
}

export default App;
