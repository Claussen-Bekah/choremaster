import React from "react";
import { Form, Input, Button } from "antd";

const AddChore = () => {
  const onFinish = (values) => {
    console.log("Form values:", values);
    // Add your save logic here
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Form validation failed:", errorInfo);
  };

  return (
    <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Form.Item
        label="Chore Name"
        name="choreName"
        rules={[{ required: true, message: "Please enter a chore name" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Assignee"
        name="assignee"
        rules={[{ required: true, message: "Please enter an assignee" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Due Date"
        name="dueDate"
        rules={[{ required: true, message: "Please enter a due date" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
        <Button type="default" htmlType="button" style={{ marginLeft: 8 }}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddChore;
