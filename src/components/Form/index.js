import React from 'react';
import 'antd/dist/antd.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import './index.css';

class NormalForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const {
      props: { form, handleSubmitForm }
    } = this;
    form.validateFields((err, values) => {
      if (!err) {
        handleSubmitForm(values);
      }
    });
  };

  render() {
    const {
      form: { getFieldDecorator }
    } = this.props;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <Link to="/" className="login-form-forgot">
            Forgot password
          </Link>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalForm = Form.create({ name: 'normal_login' })(NormalForm);

export default WrappedNormalForm;
