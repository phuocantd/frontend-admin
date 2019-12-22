/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-classes-per-file */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import 'antd/dist/antd.css';
import { Table, Popconfirm, Form, Skeleton, message, Input } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './index.css';
import {
  setAllSpecialization,
  updateSpecialization,
  changIsActiveSpecialization
} from '../../../actions/specializations';
import {
  getAllSpecializations,
  updateASpecialization,
  lockOrUnlockSpecialization
} from '../../../api/services/Specialization';

const EditableContext = React.createContext();

class EditableCell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
  }

  toggleEdit = () => {
    let { editing } = this.state;
    editing = !editing;
    this.setState({ editing }, () => {
      if (editing) {
        this.input.focus();
      }
    });
  };

  save = e => {
    const { record, handleSave } = this.props;
    this.form.validateFields((error, values) => {
      if (error && error[e.currentTarget.id]) {
        return;
      }
      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  };

  renderCell = form => {
    this.form = form;
    const { children, dataIndex, record, title } = this.props;
    const { editing } = this.state;
    return editing ? (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(dataIndex, {
          rules: [
            {
              required: true,
              message: `${title} is required.`
            }
          ],
          initialValue: record[dataIndex]
        })(
          <Input
            ref={node => {
              this.input = node;
            }}
            onPressEnter={this.save}
            onBlur={this.save}
          />
        )}
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
        onClick={this.toggleEdit}
      >
        {children}
      </div>
    );
  };

  render() {
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editable ? (
          <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
        ) : (
          children
        )}
      </td>
    );
  }
}

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
    this.columns = [
      {
        title: 'name',
        dataIndex: 'name',
        editable: true
      },
      {
        title: 'isActive',
        dataIndex: 'isActive'
      },
      {
        title: 'operation',
        dataIndex: 'operation',
        render: (text, record) =>
          this.props.dataSource.length >= 1 ? (
            <Popconfirm
              title="Sure to change active skill?"
              onConfirm={() => this.handleDelete(record._id, record.isActive)}
            >
              <a>Block/Unblock</a>
            </Popconfirm>
          ) : null
      }
    ];
  }

  componentDidMount() {
    const { dispatch, token } = this.props;
    getAllSpecializations(token || localStorage.getItem('access-token'))
      .then(res => {
        const arr = res.data.results.map(obj => ({
          ...obj,
          key: obj._id,
          isActive: obj.isActive.toString()
        }));
        dispatch(setAllSpecialization(arr));
        this.setState({
          isLoading: false
        });
      })
      .catch(err => {
        if (err.response) {
          message.error(err.response.data.error);
        } else {
          message.error(err.message);
        }
        this.setState({
          isLoading: true
        });
      });
  }

  handleDelete = (id, isActive) => {
    const { dispatch, token } = this.props;
    const active = isActive !== 'true';
    // const token = localStorage.getItem('access-token');
    lockOrUnlockSpecialization(id, active, token)
      .then(res => {
        dispatch(changIsActiveSpecialization(id, active));
        if (active) {
          message.success(`Unlock skill ${res.data.name} success`);
        } else {
          message.success(`Lock skill ${res.data.name} success`);
        }
      })
      .catch(err => {
        if (err.response) {
          message.error(err.response.data.error);
        } else {
          message.error(err.message);
        }
        this.setState({
          isLoading: true
        });
      });
    // message.success({});
  };

  handleSave = row => {
    const { name, _id } = row;
    const { dispatch, token } = this.props;
    // const token = localStorage.getItem('access-token');
    updateASpecialization(_id, name, token)
      .then(res => {
        if (res.success) {
          dispatch(updateSpecialization(_id, name));
          message.success('Update success');
        } else {
          message.error('Update fail');
        }
      })
      .catch(err => {
        if (err.response) {
          message.error(err.response.data.error);
        } else {
          message.error(err.message);
        }
        // this.setState({
        //   isLoading: true
        // });
      });
  };

  render() {
    const { dataSource } = this.props;
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell
      }
    };
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave
        })
      };
    });
    const { isLoading } = this.state;
    return (
      <>
        {isLoading ? (
          <Skeleton />
        ) : (
          <div>
            <Table
              components={components}
              rowClassName={() => 'editable-row'}
              bordered
              dataSource={dataSource}
              columns={columns}
              scroll={{ x: 500, y: 330 }}
            />
          </div>
        )}
      </>
    );
  }
}

export default connect(state => {
  return {
    dataSource: state.specialization,
    token: state.tokenReducer
  };
})(withRouter(EditableTable));
