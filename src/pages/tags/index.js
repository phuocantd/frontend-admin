import React from 'react';
import { Divider, Button } from 'antd';

import ListComponent from '../../components/List';

function Tag() {
  return (
    <>
      <Button>Add Skill</Button>
      <Divider />
      <ListComponent />
    </>
  );
}

export default Tag;
