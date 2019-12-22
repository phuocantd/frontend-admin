import React from 'react';
import { Divider } from 'antd';

import Table from './EditableTable';
import AddBtn from './AddBtn';
import './index.scss';

const index = () => {
  return (
    <>
      <AddBtn />
      <Divider />
      <Table />
    </>
  );
};

export default index;
