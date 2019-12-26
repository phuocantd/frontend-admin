import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';

function TableTop({ dataSource }) {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'item',
      key: 'date'
    },
    {
      title: 'Total',
      dataIndex: 'count',
      key: 'total'
    }
  ];
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}

export default connect(state => {
  return {
    dataSource: state.tops
  };
})(TableTop);
