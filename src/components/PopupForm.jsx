import React from 'react';
import {Form, Input,Select,} from 'antd';
const { TextArea } = Input;

const PopupForm = () => {

  return (
    <Form
      labelCol={{ span: 6,}}
      wrapperCol={{span: 16,}}
      layout="horizontal" >

      <Form.Item label="Project Name">
        <Input />
      </Form.Item>
      <Form.Item label="Project Type">
        <Select>
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Project Location">
        <Select>
          <Select.Option value="demo">location</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Description">
        <TextArea rows={4} />
      </Form.Item>
    </Form>
  );
};

export default PopupForm;
