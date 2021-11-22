import "antd/dist/antd.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";

const siderStyle = {
  backgroundColor: "#423a76",
  marginTop: "5px",
  textAlign: "center",
  align: "center",
  padding: "5%",
  color: "#f0f2ff",
  minHeight: "850px",
};

const siderStyle2 = {
  textAlign: "center",
  align: "center",
  padding: "5%",
  marginTop: "10%",
  color: "#f0f2ff",
};

class LandingView extends Component {
  state = {};

  async componentDidMount() {}

  render() {
    return (
      <div>
        <Row>
          <Col span={12} style={siderStyle}>
            <h1 style={{ color: "#f0f2ff", fontSize: 46 }}>Zodiac Love</h1>
            <img
              src=".\LogoColor.png"
              alt="logoImg"
              style={{ width: "80%", margin: "2%" }}
            />
            <h1 style={{ color: "#f0f2ff", marginTop: "10%", fontSize: 32 }}>
              {" "}
              Meet the Love of your Life NOW!
            </h1>
          </Col>
          <Col span={12} style={siderStyle2}>
            <h1 style={{ color: "#171b57", fontSize: 40 }}>
              The Stars are aligning ...
            </h1>
            <Link to="/signup" style={{ fontSize: 34, color: "#853f79" }}>
              Sign Up Now
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default LandingView;
