import React, { useEffect } from 'react';
import { Divider } from 'antd';
import EditableTable from '../../components/EditableTable';
// import EditableTable from '../../components/Table';
import AddBtn from '../../components/AddBtn';

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
