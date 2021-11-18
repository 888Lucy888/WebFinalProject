import React, { Component } from "react";
import { Card, Menu, Row, Col } from "antd";
import axios from "axios";
import logo from "../images/LogoColor.png";
//Images
import aquarius from "../images/signImages/acuario.jpg";
import aries from "../images/signImages/aries.jpg";
import cancer from "../images/signImages/cancer.jpg";
import capricornus from "../images/signImages/capricornio.jpg";
import scorpius from "../images/signImages/escorpio.jpg";
import gemini from "../images/signImages/geminis.jpg";
import leo from "../images/signImages/leo.jpg";
import libra from "../images/signImages/libra.jpg";
import pisces from "../images/signImages/piscis.jpg";
import sagittarius from "../images/signImages/sagitario.jpg";
import taurus from "../images/signImages/tauro.jpg";
import virgo from "../images/signImages/virgo.jpg";

const { Meta } = Card;
const { SubMenu } = Menu;

class HoroscopeCard extends Component {
  state = {
    sign: "virgo",
    image: "",
  };

  async componentDidMount() {
    await this.getSignImage();
  }

  getSignImage = async () => {
    switch (this.state.sign) {
      case "sagittarius":
        this.setState({ image: sagittarius });
        break;
      case "aquarius":
        this.setState({ image: aquarius });
        break;
      case "aries":
        this.setState({ image: aries });
        break;
      case "cancer":
        this.setState({ image: cancer });
        break;
      case "capricornus":
        this.setState({ image: capricornus });
        break;
      case "scorpius":
        this.setState({ image: scorpius });
        break;
      case "gemini":
        this.setState({ image: gemini });
        break;
      case "leo":
        this.setState({ image: leo });
        break;
      case "libra":
        this.setState({ image: libra });
        break;
      case "pisces":
        this.setState({ image: pisces });
        break;
      case "taurus":
        this.setState({ image: taurus });
        break;
      case "virgo":
        this.setState({ image: virgo });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div>
        <Row style={{ padding: "50px" }}>
          <Col span={6}></Col>
          <Col span={12}>
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={<img alt="example" src={this.state.image} />}
            >
              <Meta title="Sagitaurus" description="Oh Yeah El bicho siuuuu" />
            </Card>
          </Col>
          <Col span={6}></Col>
        </Row>
      </div>
    );
  }
}

export default HoroscopeCard;
