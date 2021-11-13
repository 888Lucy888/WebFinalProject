import React, { Component } from "react";
import axios from "axios";

//import { Form, Input, Button, Checkbox } from "antd";
import { Form, Button, Input } from "antd";

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
    const newUser = {
      person_name: this.state.person_name,
      person_last_name: this.state.person_last_name,
      person_email: this.state.person_email,
      person_password: this.state.person_password,
    };

    //Up to here everything works fine
    //There is a problem when making the POST
    //Check that

    /* --Checks that the values are stored correctly
    console.log(newUser.person_name);
    console.log(newUser.person_last_name);
    console.log(newUser.person_email);*/

    //axios.post("http:/localhost:3000/user/add", newUser).then((res) => {
    //  console.log(res.data);
    //});

    this.setState = {
      person_name: "",
      person_last_name: "",
      person_email: "",
      person_password: "",
    };
  }

  render() {
    return (
      <div>
        <Form name="basic" onFinish={this.onSubmit}>
          <Form.Item label="e-Mail" name="email">
            <Input
              value={this.state.person_email}
              onChange={this.onChangePersonEmail}
            />
          </Form.Item>
          <Form.Item label="First Name" name="fname">
            <Input
              value={this.state.person_name}
              onChange={this.onChangePersonName}
            />
          </Form.Item>
          <Form.Item label="Last Name" name="lname">
            <Input
              value={this.state.person_last_name}
              onChange={this.onChangePersonLastName}
            />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password
              value={this.state.person_password}
              onChange={this.onChangePersonPassword}
            />
          </Form.Item>
          <Form.Item>
            <Button type="submit" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

/*export default function UserData() {
  const submitData = function (values) {
    console.log(values);
  };

  const printError = function () {
    console.log("Got an error");
  };

  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={submitData}
        onFinishFailed={printError}
      >
        <Form.Item label="e-Mail" name="email">
          <Input />
        </Form.Item>
        <Form.Item label="First Name" name="fname">
          <Input />
        </Form.Item>
        <Form.Item label="Last Name" name="lname">
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button
            type="submit"
            htmlType="submit"
            wrapperCol={{ span: 16, offset: 8 }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
*/
