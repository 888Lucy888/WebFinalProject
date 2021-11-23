import React, { Component } from "react";
import swal from "sweetalert";
import "../Styles/styles.css";

//import { Form, Input, Button, Checkbox } from "antd";
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
    const newUser = {
      name: this.state.person_name,
      last_name: this.state.person_last_name,
      email: this.state.person_email,
      password: this.state.person_password,
      bd: this.state.person_bd,
      gender: this.state.person_gender,
      bio: this.state.person_bio,
      hobbies: this.state.person_hobbies,
    };

    sender.post("/users/signup", newUser).then((res) => {
      if(res.data.code === 1){
        swal("Error, el correo ya está en uso.");
      }else{
        swal("OK");
      }
    });
  }

  render() {
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
                  value={this.state.person_name}
                  onChange={this.onChangePersonName}
                  style={{ width: "calc(50% - 8px)" }}
                  placeholder="First Name"
                />
              </Form.Item>
              <Form.Item name="Last Name" rules={[{ required: true }]}>
                <Input
                  value={this.state.person_last_name}
                  onChange={this.onChangePersonLastName}
                  style={{ width: "calc(50% - 8px)" }}
                  placeholder="Last Name"
                />
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <Form.Item label="Password" name="Password" rules={[{ required: true }]}>
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
              value={this.state.person_bd}
              onChange={this.onChangePersonDate}
              rules={[{ required: true }]}
            />
          </Form.Item>
          <Form.Item name="bio" label="Bio">
            <Input.TextArea showCount maxLength={600} />
          </Form.Item>

          <Form.Item name="hobbies" label="Hobbies">
            <Input.TextArea showCount maxLength={600} />
          </Form.Item>

          <Form.Item name="gender" label="Gender">
            <Radio.Group
              value={this.state.person_gender}
              onChange={this.onChangePersonGender}
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
