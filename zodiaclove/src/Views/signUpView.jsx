import 'antd/dist/antd.css';
import React, { Component } from "react"; 
import CreateUser from '../api/UserData';

class SignUpView extends Component {
  state = {};

  async componentDidMount() {}

  render() {
    return (
        <div>
            <img src="..\LogoColor.png" alt="logoImg" style={{width:"40%", margin:"1%"}}/>
            <h1 style={{marginBottom:"2%"}}>Sign Up</h1>
            <CreateUser/>
        </div>
    );
  }
}

export default SignUpView;
