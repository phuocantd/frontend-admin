import React from 'react';
import 'antd/dist/antd.css';
import { Skeleton, Row, Col } from 'antd';

import './SkeletonEdit.scss';

const SkeletonEdit = () => {
  return (
    <div className="skeParent">
      <Skeleton className="skeChild" paragraph={false} title={{ width: 50 }} />

      <Row>
        <Col xs={24} md={12}>
          <br />
          <br />
          <Skeleton avatar={{ size: 225 }} paragraph={false} title={false} />
        </Col>
        <Col xs={24} md={12}>
          <Skeleton />
          <Skeleton />
        </Col>
      </Row>
      <Row>
        <Skeleton />
      </Row>
    </div>
  );
};

export default SkeletonEdit;
