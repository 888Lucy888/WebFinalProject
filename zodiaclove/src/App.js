import "./App.css";
import MatchCards from "./Components/MatchCards";
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MatchCards name="L" desc="Hello my name is L" zSign="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Leo.svg/1200px-Leo.svg.png" img="https://res.cloudinary.com/teepublic/image/private/s--JGC6bDqZ--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1594488719/production/designs/12127670_0.jpg"/>
      </header>
    </div>
  );
}

export default App;
