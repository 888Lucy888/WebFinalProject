//import "./App.css";
import 'antd/dist/antd.css';

import React, { Component } from "react"; 

//import UserData from "./api/UserData";
import HoroscopeCard from "../Components/HoroscopeCard";

class HoroscopeView extends Component {
  state = {};
  async componentDidMount() {
  }

  render() {
    return (
      <HoroscopeCard sign = {this.props.sign}></HoroscopeCard>
    );
  }
}

export default HoroscopeView;
