import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { connect } from 'react-redux';

import { addAdmin } from '../../actions/admin';
import './index.css';
import CollectionCreateForm from './CollectionCreateForm';

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
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      // console.log('Received values of form: ', values);
      const { dispatch } = this.props;
      const { count } = this.state;
      dispatch(addAdmin(count, 'admin', values.email, values.name));

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
          Add admin
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
