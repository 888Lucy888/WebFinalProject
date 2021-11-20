import 'antd/dist/antd.css';
import React, { Component } from "react"; 
import { Link } from 'react-router-dom';

const siderStyle = {
    backgroundColor:"#94608b",
    height: "200px",
    marginTop:"5px",
    textAlign:"center",
    padding:"auto",
    color:"#f1e4ff",
};

class LandingView extends Component {
    state = {};
  
    async componentDidMount() {}

    render() {
      return (
        <div>
            <img src=".\LogoColor.png" alt="logoImg" style={{width:"30%"}}/>
            <h1>Zodiac Love</h1>
                <h1 style={siderStyle}> Meet the Love of your Life NOW!
                </h1>
                <h2>The Stars are aligning</h2>
                
            <Link to="/users/signup" style={{fontSize:20, color:"#4e4587"}}>Sign Up Now</Link>
        </div>
      );
    }
  }
  
  export default LandingView;