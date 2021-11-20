import React, { Component } from "react";
import { Card, Menu, Row, Col } from "antd";

import {
  ShoppingOutlined,
  FireOutlined,
  HeartOutlined,
  UserOutlined,
} from "@ant-design/icons";

import axios from "axios";
import logo from "../images/LogoColor.png";

const { Meta } = Card;
const { SubMenu } = Menu;

class Navbar extends Component {
  state = {};

  async componentDidMount() {}

  render() {
    return (
      <Menu onClick={this.handleClick} mode="horizontal">
        <Menu.Item
          key="store"
          icon={<ShoppingOutlined />}
          style={{ width: "18%", textAlign: "center", padding: "25px" }}
        >
        <a href="./store" rel="noopener noreferrer">
            {" "}
          </a>
          Store
        </Menu.Item>
        <Menu.Item
          key="horoscope"
          icon={<FireOutlined />}
          style={{ width: "20%", textAlign: "center", padding: "25px" }}
        >
          <a href="../horoscope" rel="noopener noreferrer">
            {" "}
          </a>
          Your Horoscope
        </Menu.Item>
        <Menu.Item
          key="logo"
          disabled
          style={{ width: "20%", textAlign: "center" }}
        >
          <img src={logo} alt="imagen" style={{ width: "50%" }}></img>
        </Menu.Item>
        <Menu.Item
          key="matches"
          icon={<HeartOutlined />}
          style={{ width: "20%", textAlign: "center", padding: "25px" }}
        >
            <a href="../matches" rel="noopener noreferrer">
            {" "}
          </a>
          Your matches
        </Menu.Item>
        <Menu.Item
          key="profile"
          icon={<UserOutlined />}
          style={{ width: "20%", textAlign: "center", padding: "25px" }}
        >
          <a href="../profile" rel="noopener noreferrer">
          {" "}
        </a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navbar;
