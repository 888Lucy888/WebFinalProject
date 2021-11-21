//import "./App.css";
import 'antd/dist/antd.css';

import React, { Component } from "react"; 

//import UserData from "./api/UserData";
import HoroscopeCard from "../Components/HoroscopeCard";
import CompatGrid from './../Components/CompatibilityGrid';

class HoroscopeView extends Component {
  state = {};
  async componentDidMount() {
  }

  render() {
    return (
      <div>
      <HoroscopeCard sign = {this.props.sign}></HoroscopeCard>
      <CompatGrid zSign={this.props.sign}></CompatGrid>
      </div>
    );
  }
}

export default HoroscopeView;
