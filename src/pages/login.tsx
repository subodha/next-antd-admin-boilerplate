import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { Card, Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { FlexBox } from '@/components';

const { Meta } = Card;

const LoginPage: NextPage = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <FlexBox justifyContent="center">
      <Card style={{ maxWidth: 540 }}>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Meta title="Login" />

          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input
              suffix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              suffix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <a className="login-form-forgot" href="">
              Forgot password?
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              block
            >
              Login
            </Button>
          </Form.Item>

          <Form.Item>
            Are you a new user? <a href="">Register now</a>
          </Form.Item>
        </Form>
      </Card>
    </FlexBox>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      layout: 'default',
      name: '',
    },
  };
};

export default LoginPage;
