import React, {Component} from "react";
import { Card, Menu, Row, Col} from 'antd';
import axios from "axios";
import logo from '../images/LogoColor.png';
//Images
import aquarius from "../images/signImages/acuario.jpg"
import aries from "../images/signImages/aries.jpg"
import cancer from "../images/signImages/cancer.jpg"
import capricornus from "../images/signImages/capricornio.jpg"
import scorpius from "../images/signImages/escorpio.jpg"
import gemini from "../images/signImages/geminis.jpg"
import leo from "../images/signImages/leo.jpg"
import libra from "../images/signImages/libra.jpg"
import pisces from "../images/signImages/piscis.jpg"
import sagittarius from "../images/signImages/sagitario.jpg"
import taurus from "../images/signImages/tauro.jpg"
import virgo from "../images/signImages/virgo.jpg"


const { Meta } = Card;
const { SubMenu } = Menu;

class HoroscopeCard extends Component {
    state = {
        sign: this.props.sign,
        image: "",
        horoscope: [],
        color: "",
        number: "",
        love: "",
        money: "",
        date: "",
        health: "",
      };

      async componentDidMount(){
          await this.getSignImage();
          await this.getHoroscope();
          await this.setInformation();
      }

      getSignImage = async() => {
        switch(this.state.sign){
            case "sagittarius":
                this.setState({image: sagittarius});
                break;
            case "aquarius":
                this.setState({image: aquarius});
                break;
            case "aries":
                this.setState({image: aries});
                break;
            case "cancer":
                this.setState({image: cancer});
                break;
            case "capricornus":
                this.setState({image: capricornus});
                break;
            case "scorpius":
                this.setState({image: scorpius});
                break;
            case "gemini":
                this.setState({image: gemini});
                break;
            case "leo":
                this.setState({image: leo});
                break;
            case "libra":
                this.setState({image: libra});
                break;
            case "pisces":
                this.setState({image: pisces});
                break;
            case "taurus":
                this.setState({image: taurus});
                break;
            case "virgo":
                this.setState({image: virgo});
                 break;          
            default:
                break;
        }
      }

      setInformation = async() => {
        let { sign, horoscope } = this.state;


        let number, love, money, date, health, color, signo; 

          switch(sign){
            case "sagittarius":
                signo = "sagitario"
                break;
            case "aquarius":
                signo = "acuario"
                break;
            case "aries":
                signo = "aries"
                break;
            case "cancer":
                signo = "cancer"
                break;
            case "capricornus":
                signo = "capricornio"
                break;
            case "scorpius":
                signo = "escorpio"
                break;
            case "gemini":
                signo = "geminis"
                break;
            case "leo":
                signo = "leo"
                break;
            case "libra":
                signo = "libra"
                break;
            case "pisces":
                signo = "piscis"
                break;
            case "taurus":
                signo = "tauro"
                break;
            case "virgo":
                signo = "virgo"
                 break;          
            default:
                break;
        }

        number = horoscope[signo].numero;
        love = horoscope[signo].amor;
        money = horoscope[signo].dinero;
        date = horoscope[signo].fechaSigno;
        health = horoscope[signo].salud;
        color = horoscope[signo].color;
    
        this.setState({number, love, money, date, health, color});
      }

//Ingles https://horoscopes-and-astrology.com/api
//Espanol https://api.adderou.cl/tyaas/
      getHoroscope = async () => {
        await axios
        .get("https://api.adderou.cl/tyaas/")
        .then((res) => {
            this.setState({horoscope: res.data.horoscopo})
      });
    }
    
      render() {
        const { love, number, health, color, date, sign, money } = this.state;
        return (
            <div>
                <Row style={{padding: "50px"}}>
                    <Col span={6}></Col>
                    <Col span={12}>
                        <Card
                            hoverable
                            style={{ width: "100%" , backgroundColor:"#f0f2ff"}}
                            cover={<img alt="example" src= {this.state.image} />}
                        > 
                            <Meta title={sign}/>
                            <Row style={{padding: "5px"}}>
                                <Col span={6}>
                                    <h2> Date: </h2>
                                </Col>
                                <Col span={18}>
                                    <p> {date} </p>
                                </Col>
                            </Row>
                            <Row style={{padding: "5px"}}>
                                <Col span={6}>
                                    <h2> Love: </h2>
                                </Col>
                                <Col span={18}>
                                    <p> {love} </p>
                                </Col>
                            </Row>
                            <Row style={{padding: "5px"}}>
                                <Col span={6}>
                                    <h2> Number: </h2>
                                </Col>
                                <Col span={18}>
                                    <p> {number} </p>
                                </Col>
                            </Row>
                            <Row style={{padding: "5px"}}>
                                <Col span={6}>
                                    <h2> Health: </h2>
                                </Col>
                                <Col span={18}>
                                    <p> {health} </p>
                                </Col>
                            </Row>
                            <Row style={{padding: "5px"}}>
                                <Col span={6}>
                                    <h2> Color: </h2>
                                </Col>
                                <Col span={18}>
                                    <p> {color} </p>
                                </Col>
                            </Row>
                            <Row style={{padding: "5px"}}>
                                <Col span={6}>
                                    <h2> Money: </h2>
                                </Col>
                                <Col span={18}>
                                    <p> {money} </p>
                                </Col>
                            </Row>
                            
                        </Card>
                    </Col>
                    <Col span={6}></Col>
                </Row>
            </div>
          );
      }
  }
  
  export default HoroscopeCard;
