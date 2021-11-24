import React, { Component } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import "../Styles/styles.css";

import { Form, Button, Input } from "antd";

import { DatePicker, Radio } from "antd";

import sender from "./fileSender";

const formStyle = {
  marginRight: "20%",
  marginLeft: "20%",
};

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangePersonLastName = this.onChangePersonLastName.bind(this);
    this.onChangePersonPassword = this.onChangePersonPassword.bind(this);
    this.onChangePersonEmail = this.onChangePersonEmail.bind(this);
    this.onChangePersonDate = this.onChangePersonDate.bind(this);
    this.onChangePersonGender = this.onChangePersonGender.bind(this);
    this.onChangePersonBio = this.onChangePersonBio.bind(this);
    this.onChangePersonHobbies = this.onChangePersonHobbies.bind(this);
    this.onChangeImageURL = this.onChangeImageURL.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      person_name: "",
      person_last_name: "",
      person_email: "",
      person_password: "",
      person_bd: "",
      person_gender: "",
      person_bio: "",
      person_hobbies: "",
      person_img: "",
    };
  }

  onChangePersonName(e) {
    this.setState({
      person_name: e.target.value,
    });
  }

  onChangePersonLastName(e) {
    this.setState({
      person_last_name: e.target.value,
    });
  }

  onChangeImageURL(e) {
    this.setState({
      person_img: e.target.value,
    });
  }

  onChangePersonPassword(e) {
    this.setState({
      person_password: e.target.value,
    });
  }

  onChangePersonEmail(e) {
    this.setState({
      person_email: e.target.value,
    });
  }

  onChangePersonDate(date, dateString) {
    this.setState({
      person_bd: dateString,
    });
  }

  onChangePersonGender(e) {
    this.setState({
      person_gender: e.target.value,
    });
  }

  onChangePersonBio(e) {
    this.setState({
      person_bio: e.target.value,
    });
  }

  onChangePersonHobbies(e) {
    this.setState({
      person_hobbies: e.target.value,
    });
  }

  onSubmit(e) {
    var self = this;

    const newUser = {
      name: self.state.person_name,
      last_name: self.state.person_last_name,
      email: self.state.person_email,
      password: self.state.person_password,
      bd: self.state.person_bd,
      gender: self.state.person_gender,
      bio: self.state.person_bio,
      hobbies: self.state.person_hobbies,
      img: self.state.img,
    };

    sender.post("/users/signup", newUser).then((res) => {
      if (res.data.code === 1) {
        swal("Error", "El correo introducido ya está en uso.", "error");
      } else {
        swal(
          "Bienvenido a ZodiacLove",
          "Usuario registrado correctamente",
          "success",
        ).then((okay) => {
          if (okay) {
            window.location.href = "/horoscope";
          }
        });
      }
    });
  }

  render() {
    const self = this;
    return (
      <div style={formStyle}>
        <Form name="basic" onFinish={this.onSubmit}>
          <Form.Item label="e-Mail" name="Email" rules={[{ required: true }]}>
            <Input
              value={this.state.person_email}
              onChange={this.onChangePersonEmail}
            />
          </Form.Item>
          <Form.Item
            label="Your Name"
            name="Name"
            style={{ marginBottom: 0, display: "flex", flexDirection: "row" }}
          >
            <Input.Group>
              <Form.Item name="First Name" rules={[{ required: true }]}>
                <Input
                  value={self.state.person_name}
                  onChange={self.onChangePersonName}
                  style={{ width: "calc(50% - 8px)" }}
                  placeholder="First Name"
                />
              </Form.Item>
              <Form.Item name="Last Name" rules={[{ required: true }]}>
                <Input
                  value={self.state.person_last_name}
                  onChange={self.onChangePersonLastName}
                  style={{ width: "calc(50% - 8px)" }}
                  placeholder="Last Name"
                />
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <Form.Item
            label="Password"
            name="Password"
            rules={[{ required: true }]}
          >
            <Input.Password
              value={this.state.person_password}
              onChange={this.onChangePersonPassword}
            />
          </Form.Item>
          <Form.Item
            label="Date of Birth"
            name="Birth Date"
            rules={[{ required: true }]}
          >
            <DatePicker
              value={self.state.person_bd}
              onChange={self.onChangePersonDate}
              rules={[{ required: true }]}
            />
          </Form.Item>
          <Form.Item name="Bio" label="Bio">
            <Input.TextArea showCount maxLength={600} />
          </Form.Item>

          <Form.Item name="Image URL" label="Image URL" rules={[{required:true}]}>
            <Input
              value={this.state.person_img}
              onChange={this.onChangeImageURL}
            />
          </Form.Item>

          <Form.Item name="Hobbies" label="Hobbies">
            <Input.TextArea showCount maxLength={600} />
          </Form.Item>

          <Form.Item name="gender" label="Gender">
            <Radio.Group
              value={self.state.person_gender}
              onChange={self.onChangePersonGender}
            >
              <Radio value="Male">He/him</Radio>
              <Radio value="Female">She/her</Radio>
              <Radio value="Other">Other</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item>
            <Button
              type="submit"
              htmlType="submit"
              style={{ backgroundColor: "#1a1e55", color: "#f0f2ff" }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
