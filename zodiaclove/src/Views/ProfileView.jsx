//import "./App.css";
import 'antd/dist/antd.css';

import React, { Component, useEffect } from "react"; 
import { Form, Input, Button, DatePicker, Col, Row, Image, Card } from 'antd';

//import UserData from "./api/UserData";
import ProfileCards from "../Components/ProfileCards";

class ProfileView extends Component {
  state = {
    edit: false,
    name: "Vader",
    email: "darkside@gmail.com",
    imageLink: "https://hipertextual.com/wp-content/uploads/2020/01/hipertextual-star-wars-deseo-mas-grande-darth-vader-podria-hacerse-realidad-muy-pronto-2020659163.jpg",
    birthdate: null,
    cardNumber: "",
    securityNumber: "",
    hobbies: "",
    bio: "",
  };

  async componentDidMount() {}

  onFinish = (values) => {
    console.log('Success:', values);
    this.setState({name: values.name, 
                   email: values.email, 
                   imageLink: values.pictureLink, 
                   cardNumber: values.cardNumber, 
                   securityNumber: values.securityNumber, 
                   hobbies: values.hobbies,
                   bio: values.bio,
                   edit: false});
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  async onChange(value, dateString) {
    await this.setState({birthdate: value});
   }

  render() {
    let { edit, name, email, imageLink, birthdate, cardNumber, securityNumber, bio, hobbies } = this.state;
    return (
        <div style={{padding: "20px"}}>
        {
          edit === true 
          ? 
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 8,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  message: 'Please input your name!',
                },
              ]}
              initialValue= {name}
            >
              <Input/>
            </Form.Item>

            <Form.Item
              label="Hobbies"
              name="hobbies"
              rules={[
                {
                  message: 'Please input your hobbies!',
                },
              ]}
              initialValue= {hobbies}
            >
              <Input/>
            </Form.Item>

            <Form.Item
              label="Bio"
              name="bio"
              rules={[
                {
                  message: 'Please input your bio!',
                },
              ]}
              initialValue= {bio}
            >
              <Input/>
            </Form.Item>
      
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  message: 'Please input your email!',
                },
              ]}
              initialValue= {email}
            >
              <Input/>
            </Form.Item>

            <Form.Item
              label="Profile Picture Link"
              name="pictureLink"
              rules={[
                {
                  message: 'Please input your Profile Picture Link!',
                },
              ]}
              initialValue= {imageLink}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Credit Card Number"
              name="cardNumber"
              rules={[
                {
                  message: 'Please input your Credity Card Number!',
                },
              ]}
              initialValue= {cardNumber}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Security Number"
              name="securityNumber"
              rules={[
                {
                  message: 'Please input your Security Number!',
                },
              ]}
              initialValue= {securityNumber}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Birthdate"
              name="birthdate"
              rules={[
                {
                  type: "object",
                  message: 'Please input your Birthdate!',
                },
              ]}
              initialValue= {birthdate}
            >
            <DatePicker style={{ width: '70%' }} format='DD/MM/YYYY' onChange={(value, dateString) => this.onChange(value, dateString)}/>
            </Form.Item>
      
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 8,
              }}
            >
              <Button type="primary" htmlType="submit" style={{backgroundColor:"#1a1e55", color:"#f0f2ff"}}>
                Ready
              </Button>
            </Form.Item>
          </Form>
          : 
          <Card>
          <Row >
              <Col span={2}>
              </Col>
              <Col span={10}>
                <Image src={imageLink}></Image>
              </Col>
              <Col span={2}>
              </Col>
              <Col span={8} >
              <Form
              name="basic"
              labelCol={{
                span: 0,
              }}
              wrapperCol={{
                span: 0,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={() => this.setState({edit: true})}
              autoComplete="off"
            >
              <Form.Item
                label="Name"
                name="name"
                initialValue= {name}
              >
                <Input disabled/>
              </Form.Item>
        
              <Form.Item
                label="Bio"
                name="bio"
                initialValue= {bio}
              >
                <Input disabled/>
              </Form.Item>

              <Form.Item
                label="Hobbies"
                name="hobbies"
                initialValue= {hobbies}
              >
                <Input disabled/>
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                initialValue= {email}
              >
                <Input disabled/>
              </Form.Item>
  
              <Form.Item
                label="Birthdate"
                name="birthdate"
                initialValue= {birthdate}
              >
              <DatePicker style={{ width: '70%' }} format='DD/MM/YYYY' onChange={(value, dateString) => this.onChange(value, dateString)} disabled/>
              </Form.Item>
        
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 8,
                }}
              >
                <Button type="primary" htmlType="submit" style={{backgroundColor:"#1a1e55", color:"#f0f2ff"}}>
                  Edit
                </Button>
              </Form.Item>
            </Form>
              </Col>
          </Row>
          </Card>
        }
        
        </div>
    );
  }
}

export default ProfileView;
