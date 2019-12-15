import React from 'react';
import 'antd/dist/antd.css';
import { Button, message } from 'antd';
import { connect } from 'react-redux';

import './index.css';
import CollectionCreateForm from './CollectionCreateForm';
import { createAdministrators } from '../../../api/services/admin';
import { addAdmin } from '../../../actions/admins';

class CollectionsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const { form } = this.formRef.props;
    const { dispatch } = this.props;
    form.validateFields((error, values) => {
      if (error) {
        return;
      }
      // const { dispatch } = this.props;
      // dispatch(addAdmin(count, 'admin', values.email, values.name));
      const token = localStorage.getItem('access-token');
      createAdministrators(values.email, values.password, values.name, token)
        .then(res => {
          message.success('Tạo tài khoản thành công');
          const { role, _id, email, name } = res.data;
          dispatch(addAdmin(_id, role, email, name));
        })
        .catch(err => {
          if (err.response) {
            message.error(err.response.data.error);
          } else {
            message.error(err.message);
          }
        });

      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    const { visible } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Add new admin
        </Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

export default connect()(CollectionsPage);
