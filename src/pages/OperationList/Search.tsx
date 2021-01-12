import React, { useState, useEffect } from 'react';
import { Form, Input, Button,DatePicker} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

export default () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  const rangeConfig = {
    rules: [{ type: 'array', required: true, message: 'Please select time!' }],
  };

  return (
    <Form form={form} name="horizontal_login" layout="inline" >
      <Form.Item
        label="用户"
        name="username"
      >
        <Input  placeholder="Username" />
      </Form.Item>
      <Form.Item
        label="合约"
        name="password"
      >
        <Input
          type="text"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item name="range-picker" label="时间范围" {...rangeConfig}>
        <RangePicker />
      </Form.Item>
      <Form.Item
        label="交易类型"
        name="password"
      >
        <Input
          type="text"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item shouldUpdate={true}>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
          >
            查询
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};
