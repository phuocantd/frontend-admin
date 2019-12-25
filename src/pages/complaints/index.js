import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table, message, Select, Skeleton } from 'antd';

import {
  getAllComplaint,
  updateStatusComplaint
} from '../../api/services/complaint';
import {
  setAllComplaints,
  updateStatusComplaints
} from '../../actions/complaints';

const { Option } = Select;

function Complaints({ data, token, dispatch }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllComplaint(token || localStorage.getItem('access-token'))
      .then(res => {
        const arr = res.data.results.map(i => {
          return {
            key: i._id,
            title: i.title,
            idContract: i.contract,
            description: i.description,
            status: i.status
          };
        });
        dispatch(setAllComplaints(arr));
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
    updateStatusComplaint(token, id, value)
      .then(() => {
        dispatch(updateStatusComplaints(id, value));
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
    { title: 'Title', dataIndex: 'title', key: 'title' },
    {
      title: 'Contract',
      dataIndex: 'contract',
      key: 'contract',
      width: 200,
      render: (text, record) => (
        <Link to={`/contract/${record.idContract}`}>Detail Contract</Link>
      )
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 200,
      filters: [
        {
          text: 'Cancel',
          value: 'Cancel'
        },
        {
          text: 'Completed',
          value: 'Completed'
        },
        {
          text: 'Requesting',
          value: 'Requesting'
        },
        {
          text: 'Happening',
          value: 'Happening'
        }
      ],
      onFilter: (value, record) => record.status.indexOf(value) === 0,
      render: (text, record) => (
        <Select
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
      {loading ? (
        <Table
          bordered
          columns={columns}
          expandedRowRender={record => (
            <p style={{ margin: 0 }}>{`Description: ${record.description}`}</p>
          )}
          dataSource={data}
          scroll={{ x: 900, y: 330 }}
        />
      ) : (
        <Skeleton />
      )}
    </div>
  );
}

export default connect(state => {
  return {
    token: state.tokenReducer,
    data: state.complaints
  };
})(Complaints);
