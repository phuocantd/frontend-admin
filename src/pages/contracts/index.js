import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Table, Select, message, Skeleton } from 'antd';
import { Link } from 'react-router-dom';

import {
  getAllContract,
  updateStatusContract
} from '../../api/services/contract';
import {
  setAllContracts,
  updateStatusContracts
} from '../../actions/contracts';

const { Option } = Select;

function ContractPage({ token, dispatch, data }) {
  const [loadding, setLoading] = useState(false);

  useEffect(() => {
    getAllContract(token || localStorage.getItem('access-token'))
      .then(res => {
        const arr = res.data.results.map(i => {
          return {
            key: i._id,
            title: i.title,
            idTutor: i.tutor.userInfo._id,
            nameTutor: i.tutor.userInfo.name,
            idStudent: i.student.userInfo._id,
            nameStudent: i.student.userInfo.name,
            status: i.status
          };
        });
        dispatch(setAllContracts(arr));
        setLoading(true);
      })
      .catch(err => {
        if (err.response) {
          message.error(err.response.data.error);
        } else {
          message.error(err.message);
        }
      });
  }, [token, dispatch]);

  const handleChange = (value, id) => {
    updateStatusContract(token, id, value)
      .then(() => {
        dispatch(updateStatusContracts(id, value));
        message.success('Update status success');
      })
      .catch(err => {
        if (err.response) {
          message.error(err.response.data.error);
        } else {
          message.error(err.message);
        }
      });
  };
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      render: (text, record) => (
        <Link to={`/contract/${record.key}`}>{text}</Link>
      )
    },
    {
      title: 'Name tutor',
      dataIndex: 'nameTutor',
      render: (text, record) => (
        <Link to={`/user/${record.idTutor}`}>{text}</Link>
      )
    },
    {
      title: 'Name student',
      dataIndex: 'nameStudent',
      render: (text, record) => (
        <Link to={`/user/${record.idStudent}`}>{text}</Link>
      )
    },
    {
      title: 'status',
      dataIndex: 'status',
      render: (text, record) => (
        <Select
          disabled={
            record.status === 'Completed' || record.status === 'Canceled'
          }
          defaultValue={record.status}
          style={{ width: 120 }}
          value={record.status}
          onChange={value => handleChange(value, record.key)}
        >
          <Option value="Completed">Completed</Option>
          <Option value="Canceled">Canceled</Option>
          <Option value="Requesting" disabled>
            Requesting
          </Option>
          <Option value="Complaining" disabled>
            Complaining
          </Option>
        </Select>
      )
    }
  ];

  return (
    <div>
      {!loadding ? (
        <Skeleton />
      ) : (
        <Table
          columns={columns}
          dataSource={data}
          scroll={{ x: 900, y: 330 }}
        />
      )}
    </div>
  );
}

export default connect(state => {
  return {
    token: state.tokenReducer,
    data: state.contracts
  };
})(ContractPage);
