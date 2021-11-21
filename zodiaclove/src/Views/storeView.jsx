//import "./App.css";
import 'antd/dist/antd.css';
import Store from '../Components/store';

import React, { Component } from "react"; 


class StoreView extends Component {
  state = {};

  async componentDidMount() {}

  render() {
    return (
        <div>
            <h1 style={{margin:"25px", color:"#1a1e55"}}>Buy Matches</h1>
            <Store/>
        </div>
    );
  }
}

export default StoreView;
