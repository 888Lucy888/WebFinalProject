import React, {Component} from "react";
import { Card, Menu, Row, Col, Table, Button, Alert, notification} from 'antd';

import { ShoppingOutlined, FireOutlined, HeartOutlined, UserOutlined} from '@ant-design/icons';

import axios from "axios";
//import logo from '../imprices/LogoColor.png';

const { Meta } = Card;
const { SubMenu } = Menu;

const dataSource = [
    {
      key: '1',
      matches: '1',
      price: 4.99,
    },
    {
      key: '2',
      matches: '3',
      price: 9.99,
    },
    {
        key: '3',
        matches: '10',
        price: 19.99,
      },
  ];
  
class Store extends Component {
    state = {
        cols: [],
      };

      async componentDidMount(){
          await this.setCols();
      }

      async setCols(){
        const cols = [
            {
              title: 'Matches',
              dataIndex: 'matches',
              key: 'matches',
            },
            {
              title: 'Price',
              dataIndex: 'price',
              key: 'price',
            },
            {
              title: 'Buy',
              dataIndex: 'buy',
              key: 'buy',
              render: (value, record) => 
                <Button style={{backgroundColor:"#1a1e55", color:"#edeaff"}} onClick= {() => this.handlePurchase( record)}> Buy </Button>    
            },
          ];
          this.setState({cols});
      }

      handlePurchase = (record) =>{
          const key = `open${Date.now()}`;
            const btn = (
                <Button style={{backgroundColor:"#1a1e55", color:"#edeaff"}} type="primary" size="small" onClick={() => notification.close(key)}>
                Close
                </Button>
            );
            notification.open({
                message: 'Succesfull purchase',
                description:
                "Thanks for your purchase, now you have " + record.matches + " extra matches",
                btn,
                key,
            });
      }

      render() {
        return (
            <Table dataSource={dataSource} columns={this.state.cols} style={{padding: "40px", backgroundColor:"#394692"}} pagination= {false}/>
          );
      }
  }
  
  export default Store;
