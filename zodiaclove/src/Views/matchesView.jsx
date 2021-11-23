import 'antd/dist/antd.css';
import React, { Component } from "react"; 
import axios from 'axios';
import MatchCard from './../Components/MatchCard';

class MatchesView extends Component {
  state = {
    matches: []
    /*matches:[
      {
        name:"Joe",
        desc:"Hi I'm hot",
        img:"https://i.pinimg.com/originals/28/d3/83/28d3837232911297b40210071de67297.png",
        sign:"Aries",
        email:"1232"
      },
      {
        name:"Sally",
        desc:"I like painting",
        img:"https://www.imagediamond.com/blog/wp-content/uploads/2020/06/cartoon-girl-dp-images-5.jpg",
        sign:"Libra",
        email:"23298"
      }
    ]*/
  };

  componentDidMount() {
    axios.get("/test").then((res) => {
      this.setState({matches: res.data});
    })
  }

  match = () =>{
    //Send email
  }

  remove = (email)=> {
    this.setState({
      matches: this.state.matches.filter(item => item.email !== email)
    });
    console.log(this.state.matches);
  }

  render() {
    let matchData = this.state && this.state.matches.length > 0 ?
            this.state.matches.map(p=>
                <MatchCard zSign={p.sign} name={p.name} desc={p.desc} img={p.img} match={()=>this.match()} remove={()=>this.remove(p.email)}/>
            ) : <span style={{margin:"3%", color:"aliceblue", fontSize:20}}> Oops! It appears you are out of matches</span>;

    return (
      <div>
        <h1 style={{margin:"3%", fontSize:32, color:"#1a1e55"}}>The Universe might like...</h1>
        <div style={{padding:"3%", backgroundColor:"#786094"}}>
          {matchData}
        </div>
      </div>
    );
  }
}

export default MatchesView;
