import { Form, Input, Button } from "antd";

// Create a form element
const form = document.createElement("form");

// Create input fields
const input1 = document.createElement("input");
input1.type = "text";
input1.placeholder = "Enter name";

const input2 = document.createElement("input");
input2.type = "email";
input2.placeholder = "Enter email";

// Create save button
const saveButton = document.createElement("button");
saveButton.textContent = "Save";

// Create cancel button
const cancelButton = document.createElement("button");
cancelButton.textContent = "Cancel";

// Append input fields and buttons to the form
form.appendChild(input1);
form.appendChild(input2);
form.appendChild(saveButton);
form.appendChild(cancelButton);

//
// Create a form element using Ant Design Form component
const AddMember = () => {
  const onFinish = (values) => {
    console.log("Form values:", values);
    // Perform save operation here
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Form validation failed:", errorInfo);
  };

  return (
    <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Form.Item
        name="name"
        rules={[{ required: true, message: "Please enter a name" }]}
      >
        <Input placeholder="Enter name" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please enter an email" }]}
      >
        <Input type="email" placeholder="Enter email" />
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

export default AddMember;
