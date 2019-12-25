import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';

function TableStatistic({ dataSource }) {
  const columns = [
    {
      title: 'Date',
      dataIndex: 'genre',
      key: 'date'
    },
    {
      title: 'Total',
      dataIndex: 'sold',
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
    dataSource: state.statistics
  };
})(TableStatistic);
