import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';

import React, { Component } from "react"; 

class LandingView extends Component {
    state = {};
  
    async componentDidMount() {}
  
    render() {
      return (
          <div>
              <h1>LandingView</h1>
              <Link to="/users/signup">Sign Up</Link>
          </div>
      );
    }
  }
  
  export default LandingView;