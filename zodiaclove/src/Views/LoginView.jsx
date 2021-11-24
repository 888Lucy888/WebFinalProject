import "antd/dist/antd.css";
import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import swal from "sweetalert";
import { useParams } from 'react-router-dom';
import sender from "../api/fileSender";
import { Link } from 'react-router-dom';

class LoginView extends Component {
  state = {
    email: "",
    password: "",
  };

  componentDidMount() {}

  onFinish = (values) => {
    this.setState({
      email: values.email,
      password: values.password,
    });

    const searchable = {
      email: values.email,
      password: values.password,
    };

    sender.post("/users/login", searchable).then((res) => {
      if (res.data) {
        swal(
          "Bienvenido a ZodiacLove",
          "Usuario Correcto",
          "success",
        ).then((okay) => {
          if (okay) {
            window.location.href = "/horoscope";
          }
        });
      } else {
        swal("Oops!", "Correo o Contraseña Incorrecta", "error");
      }
    });
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    let { email, password } = this.state;
    return (
      <div style={{ padding: "20px" }}>
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
            label="Email"
            name="email"
            rules={[
              {
                message: "Please input your email!",
              },
            ]}
            initialValue={email}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                message: "Please input your password!",
              },
            ]}
            initialValue={password}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 8,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              style={{ backgroundColor: "#1a1e55", color: "#f0f2ff" }}
            >
              Ready
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default LoginView;
