import "./App.css";
import 'antd/dist/antd.css';
import MatchCards from "./Components/MatchCard";
import CompatCard from "./Components/CompatibilityCard";
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
        <CompatCard zSign1="Leo" zSign2="Leo" desc="Leo and Leo are both fire signs, they go well with eachother since the more fire the better" img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"/>
        <CompatGrid img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" info={info}/>
      </header>
    </div>
  );
}

export default App;
