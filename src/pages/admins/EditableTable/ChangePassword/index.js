import React from 'react';
import 'antd/dist/antd.css';
import { Button, message } from 'antd';
import { connect } from 'react-redux';

import './index.css';
import CollectionCreateForm from './CollectionCreateForm';
import { changePasswordAdministrator } from '../../../../api/services/admin';

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
    const { idAdmin } = this.props;
    form.validateFields((error, values) => {
      if (error) {
        return;
      }
      // const { dispatch } = this.props;
      // dispatch(addAdmin(count, 'admin', values.email, values.name));
      // const token = localStorage.getItem('access-token');
      const { token } = this.props;
      changePasswordAdministrator(idAdmin, values.password, token)
        .then(() => {
          message.success('change password successful');
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
        <Button onClick={this.showModal}>Change password</Button>
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

export default connect(state => {
  return {
    token: state.tokenReducer
  };
})(CollectionsPage);
