import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col, message, Avatar, Skeleton, Divider } from 'antd';

import { getSingleContract } from '../../api/services/contract';
import DescriptionItem from './DescriptionItem';

const pStyle = {
  fontSize: 16,
  color: 'rgba(0,0,0,0.85)',
  lineHeight: '24px',
  display: 'block',
  marginBottom: 16
};

function Contract({ token }) {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getSingleContract(token || localStorage.getItem('access-token'), id)
      .then(res => {
        setData(res.data);
        setLoading(true);
      })
      .catch(err => {
        if (err.response) {
          message.error(err.response.data.error);
        } else {
          message.error(err.message);
        }
      });
  }, [token, id]);
  return (
    <div>
      {!loading ? (
        <Skeleton />
      ) : (
        <div>
          <p style={pStyle}>{data.title}</p>
          <Row>
            <Col xs={24} md={9}>
              <Avatar
                size={225}
                src={data.tutor.userInfo.avatar}
                style={{ marginBottom: 10 }}
              />
              <DescriptionItem
                title="Role"
                content={data.tutor.userInfo.role}
              />
              <DescriptionItem
                title="Full Name"
                content={data.tutor.userInfo.name}
              />
              <DescriptionItem
                title="Email"
                content={data.tutor.userInfo.email}
              />
              <Link to={`/user/${data.tutor.userInfo._id}`}>
                <p>More info tutor</p>
              </Link>
            </Col>
            <Col
              xs={24}
              md={6}
              style={{ marginTop: 75, background: 'aqua', paddingTop: 10 }}
            >
              <Col xs={24} md={24}>
                <DescriptionItem title="rentHours" content={data.rentHours} />
              </Col>
              <Col xs={24} md={24}>
                <DescriptionItem title="status" content={data.status} />
              </Col>
              <Col xs={24} md={24}>
                <DescriptionItem
                  title="contractAmount"
                  content={data.contractAmount}
                />
              </Col>
            </Col>
            <Col xs={24} md={9}>
              <Avatar
                size={225}
                src={data.student.userInfo.avatar}
                style={{ marginBottom: 10 }}
              />
              <DescriptionItem
                title="Role"
                content={data.student.userInfo.role}
              />
              <DescriptionItem
                title="Full Name"
                content={data.student.userInfo.name}
              />
              <DescriptionItem
                title="Email"
                content={data.student.userInfo.email}
              />
              <Link to={`/user/${data.student.userInfo._id}`}>
                <p>More info student</p>
              </Link>
            </Col>
          </Row>
          <Divider />
          <Row>
            <DescriptionItem title="Description" content={data.description} />
          </Row>
        </div>
      )}
    </div>
  );
}

export default connect(state => {
  return {
    token: state.tokenReducer
  };
})(Contract);
