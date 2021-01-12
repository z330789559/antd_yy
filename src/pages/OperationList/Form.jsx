import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';

const FormSizeDemo = () => {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="合约："     rules={[{ required: true, message: 'Please input website!' }]} initialValue="合约" >
          <Input placeholder="合约"  />
        </Form.Item>
        <Form.Item label="交易："     rules={[{ required: true, message: 'Please input website!' }]} initialValue="合约" >
          <Input placeholder="交易量"  />
        </Form.Item>
        <Form.Item label="用户："     rules={[{ required: true, message: 'Please input website!' }]} initialValue="合约" >
          <Input placeholder="合约"  />
        </Form.Item>
        <Form.Item label="委托类型："     rules={[{ required: true, message: 'Please input website!' }]} initialValue="合约" >
          <Input placeholder="合约"  />
        </Form.Item>
        <Form.Item label="委托价："     rules={[{ required: true, message: 'Please input website!' }]} initialValue="合约" >
          <Input placeholder="合约"  />
        </Form.Item>
        <Form.Item label="委托量："     rules={[{ required: true, message: 'Please input website!' }]} initialValue="合约" >
          <Input placeholder="合约"  />
        </Form.Item>
        <Form.Item label="方向："     rules={[{ required: true, message: 'Please input website!' }]} initialValue="合约" >
          <Input placeholder="合约"  />
        </Form.Item>
        <Form.Item label="开平："     rules={[{ required: true, message: 'Please input website!' }]} initialValue="合约" >
          <Input placeholder="合约"  />
        </Form.Item>
      </Form>
  );
};

export default FormSizeDemo;
