//import "./App.css";
import 'antd/dist/antd.css';

import React, { Component } from "react"; 

//import UserData from "./api/UserData";
import ProfileCards from "../Components/ProfileCards";

class HoroscopeView extends Component {
  state = {};

  async componentDidMount() {}

  render() {
    return (
      <ProfileCards></ProfileCards>
    );
  }
}

export default HoroscopeView;
