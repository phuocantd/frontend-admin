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
          title="Change password"
          okText="Save"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
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
          </Form>
        </Modal>
      );
    }
  }
);

export default CollectionCreateForm;
