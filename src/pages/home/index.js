import React, { useEffect, useState } from 'react';
import { Card, Row, Col, message, Skeleton, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { getDashBoard } from '../../api/services/statistic';

import './index.scss';

function HomePage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getDashBoard(localStorage.getItem('access-token'))
      .then(res => {
        setLoading(true);
        setData(res.data);
      })
      .catch(err => {
        if (err.response) {
          message.error(err.response.data.error);
        } else {
          message.error(err.message);
        }
      });
  }, []);

  return (
    <div className="home-container">
      {loading ? (
        <Row>
          {data.map(i => (
            <Col className="home-card" lg={8} sm={12} xs={24}>
              <Link to={`/${i.name.toLowerCase()}s`}>
                <Card title={i.name}>
                  <Statistic title="Count" value={i.length} />
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      ) : (
        <Skeleton />
      )}
    </div>
  );
}

export default HomePage;
