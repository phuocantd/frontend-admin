import React from 'react';
import { Divider } from 'antd';

import Table from './EditableTable';
import AddBtn from './AddBtn';

function Tag() {
  return (
    <>
      <AddBtn />
      <Divider />
      <Table />
    </>
  );
}

export default Tag;
