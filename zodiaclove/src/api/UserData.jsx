import React from "react";

//import { Form, Input, Button, Checkbox } from "antd";
import { Form, Button, Input } from "antd";

export default function UserData() {
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
