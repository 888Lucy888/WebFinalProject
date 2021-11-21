import React, { Component } from "react";

//import { Form, Input, Button, Checkbox } from "antd";
import { Form, Button, Input } from "antd";

import { DatePicker, Radio } from "antd";

const formStyle = {
  marginRight:"20%",
  marginLeft:"20%",

}

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangePersonLastName = this.onChangePersonLastName.bind(this);
    this.onChangePersonPassword = this.onChangePersonPassword.bind(this);
    this.onChangePersonEmail = this.onChangePersonEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      person_name: "",
      person_last_name: "",
      person_email: "",
      person_password: "",
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

  onSubmit(e) {
    this.setState = {
      person_name: "",
      person_last_name: "",
      person_email: "",
      person_password: "",
    };
  }

  render() {
    return (
      <div style={formStyle}>
        <Form name="basic" onFinish={this.onSubmit}>
          <Form.Item label="e-Mail" name="email">
            <Input
              value={this.state.person_email}
              onChange={this.onChangePersonEmail}
              rules={[{ required: true }]}
            />
          </Form.Item>
          <Form.Item
            label="Your Name"
            name="name"
            style={{ marginBottom: 0, display: "flex", flexDirection: "row" }}
          >
            <Input.Group>
              <Form.Item name="fname">
                <Input
                  value={this.state.person_name}
                  onChange={this.onChangePersonName}
                  style={{ width: "calc(50% - 8px)" }}
                  placeholder="First Name"
                  rules={[{ required: true }]}
                />
              </Form.Item>
              <Form.Item name="lname">
                <Input
                  value={this.state.person_last_name}
                  onChange={this.onChangePersonLastName}
                  style={{ width: "calc(50% - 8px)" }}
                  rules={[{ required: true }]}
                  placeholder="Last Name"
                />
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password
              value={this.state.person_password}
              onChange={this.onChangePersonPassword}
              rules={[{ required: true }]}
            />
          </Form.Item>
          <Form.Item
            label="Date of Birth"
            name="bd"
            rules={[{ required: true }]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item name="bio" label="Bio">
            <Input.TextArea showCount maxLength={600} />
          </Form.Item>

          <Form.Item name="hobbies" label="Hobbies">
            <Input.TextArea showCount maxLength={600} />
          </Form.Item>

          <Form.Item name="gender" label="Gender">
            <Radio.Group>
              <Radio value="Male">He/him</Radio>
              <Radio value="Female">She/her</Radio>
              <Radio value="Other">Other</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item>
            <Button type="submit" htmlType="submit" style={{backgroundColor:"#853f79", color:"#f0f2ff"}}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
