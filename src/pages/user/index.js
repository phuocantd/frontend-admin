import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { message, Divider, Col, Row, Avatar, Tag } from 'antd';
import 'antd/dist/antd.css';

import { getSingleUser } from '../../api/services/user';
import {} from '../../actions/users';
import DescriptionItem from './DescriptionItem';
import SkeletonEdit from './SkeletonEdit';

const pStyle = {
  fontSize: 16,
  color: 'rgba(0,0,0,0.85)',
  lineHeight: '24px',
  display: 'block',
  marginBottom: 16
};

function UserPage({ token }) {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    getSingleUser(id, token || localStorage.getItem('access-token'))
      .then(res => {
        setData(res.data);
        setLoading(true);
      })
      .catch(err => {
        setLoading(false);
        if (err.response) {
          message.error(err.response.data.error);
        } else {
          message.error(err.message);
        }
      });
  }, [id, token]);

  return (
    <div>
      {loading ? (
        <div>
          <p style={pStyle}>Personal</p>

          <Row>
            <Col xs={24} md={12}>
              <Avatar
                size={225}
                src={data.avatar}
                style={{ marginBottom: 10 }}
              />
              <DescriptionItem title="Role" content={data.role} />
            </Col>
            <Col xs={24} md={12}>
              <DescriptionItem title="Full Name" content={data.name} />
              <DescriptionItem title="Email" content={data.email} />
              <DescriptionItem title="Ballance" content={data.balance} />
              <DescriptionItem
                title="isActive"
                content={data.isActive.toString()}
              />
              <DescriptionItem title="Address" content={data.address} />
              <DescriptionItem
                title="createAt"
                content={new Date(data.createdAt).toString()}
              />
            </Col>
          </Row>
          <div>
            {data.tutorInfo ? (
              <div>
                <Divider />
                <p style={pStyle}>Tutor Info</p>
                <Row>
                  <Col span={12}>
                    <DescriptionItem
                      title="averageRating"
                      content={data.tutorInfo.averageRating}
                    />
                  </Col>
                  <Col span={12}>
                    <DescriptionItem
                      title="paymentPerHour"
                      content={data.tutorInfo.paymentPerHour}
                    />
                  </Col>
                </Row>
                <Row>
                  <DescriptionItem
                    title="Skill"
                    content={
                      <span>
                        {data.tutorInfo.tags.map(i =>
                          i.isActive ? (
                            <Tag key={i._id} color="geekblue">
                              {i.name}
                            </Tag>
                          ) : null
                        )}
                      </span>
                    }
                  />
                </Row>
                <Row>
                  <div
                    style={{
                      fontSize: 14,
                      lineHeight: '22px',
                      marginBottom: 7,
                      color: 'rgba(0,0,0,0.65)'
                    }}
                  >
                    <p
                      style={{
                        marginRight: 8,
                        display: 'inline',
                        color: 'rgba(0,0,0,0.85)'
                      }}
                    >
                      selfIntro:
                    </p>
                    {data.tutorInfo.selfIntro}
                  </div>
                </Row>
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <SkeletonEdit />
      )}
    </div>
  );
}

export default connect(state => {
  return {
    token: state.tokenReducer
  };
})(UserPage);
