import React, { useEffect } from 'react';
import { Divider } from 'antd';
import EditableTable from './EditableTable';
import AddBtn from './AddBtn';

function AdminPage() {
  useEffect(() => {
    document.title = 'Manage Admin';
  });
  return (
    <>
      <AddBtn />
      <Divider />
      <EditableTable />
    </>
  );
}

export default AdminPage;
