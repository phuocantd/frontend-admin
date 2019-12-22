import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Table, message, Skeleton, Button } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './index.css';
import { getAllUsers, lockOrUnlockUserAccount } from '../../api/services/user';
import { setAllUsers, lockOrUnlockUser } from '../../actions/users';

function UserPage({ dispatch, dataSource, token }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // const token = localStorage.getItem('access-token');
    getAllUsers(token)
      .then(res => {
        const arr = res.data.results.map(obj => ({
          ...obj,
          key: obj._id,
          isActive: obj.isActive.toString()
        }));
        dispatch(setAllUsers(arr));
        setIsLoading(false);
      })
      .catch(err => {
        if (err.response) {
          message.error(err.response.data.error);
        } else {
          message.error(err.message);
        }
        setIsLoading(true);
      });
  });

  const handleLock = (id, isActive) => {
    const active = isActive !== 'true';

    lockOrUnlockUserAccount(id, active, token)
      .then(res => {
        dispatch(lockOrUnlockUser(id, active));
        if (active) {
          message.success(`Unlock user ${res.data.name} success`);
        } else {
          message.success(`Lock user ${res.data.name} success`);
        }
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
      title: 'Name',
      width: 100,
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Status',
      width: 100,
      dataIndex: 'isActive',
      key: 'isActive'
    },
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email',
      width: 150
    },
    {
      title: 'role',
      dataIndex: 'role',
      key: 'role',
      width: 100
    },
    {
      title: 'address',
      dataIndex: 'address',
      key: 'address',
      width: 300
    },
    {
      title: 'Lock/Unlock',
      dataIndex: 'lock',
      width: 200,
      render: (text, record) => (
        <Button onClick={() => handleLock(record._id, record.isActive)}>
          Lock/Unlock
        </Button>
      )
    },
    {
      title: 'More info',
      key: 'operation',
      width: 100,
      render: (text, record) => <Link to={`user/${record._id}`}>More info</Link>
    }
  ];

  return (
    <div>
      {isLoading ? (
        <Skeleton />
      ) : (
        <Table
          columns={columns}
          dataSource={dataSource}
          scroll={{ x: 900, y: 330 }}
        />
      )}
    </div>
  );
}

export default connect(state => {
  return {
    dataSource: state.users,
    token: state.tokenReducer
  };
})(UserPage);
