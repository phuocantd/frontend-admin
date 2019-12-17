import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Table, message, Skeleton } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './index.css';
import { getAllUsers } from '../../api/services/user';
import { setAllUsers } from '../../actions/users';

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
