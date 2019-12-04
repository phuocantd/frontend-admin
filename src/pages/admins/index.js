import React from 'react';
import { Divider } from 'antd';
import EditableTable from './EditableTable';
import AddBtn from './AddBtn';

function AdminPage() {
  return (
    <>
      <h1>Admin page</h1>
      <AddBtn />
      <Divider />
      <EditableTable />
    </>
  );
}

export default AdminPage;
