import React from 'react';
import { Modal, Form, Input } from 'antd';
import 'antd/dist/antd.css';

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Create a new admin"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="Email">
              {getFieldDecorator('email', {
                rules: [
                  {
                    required: true,
                    message: 'Please input the Email!'
                  },
                  {
                    pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/,
                    message: 'Email is invalid'
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Password">
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: 'Please input the Password!'
                  }
                ]
              })(<Input.Password />)}
            </Form.Item>
            <Form.Item label="Name">
              {getFieldDecorator('name', {
                rules: [
                  {
                    required: true,
                    message: 'Please input the title of collection!'
                  }
                ]
              })(<Input />)}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

export default CollectionCreateForm;
