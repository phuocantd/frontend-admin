import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Select, Row, Col, Button, Tabs, message, Skeleton } from 'antd';
import { connect } from 'react-redux';

import './index.scss';
import ChartStatistic from './ChartStatistic';
import TableStatistic from './TableStatistic';
import { getStatisticByDMY } from '../../api/services/statistic';
import { setAllStatistics } from '../../actions/statistics';

const { Option } = Select;
const { TabPane } = Tabs;

function Statistic({ token, dispatch }) {
  const [period, setPeriod] = useState('day');
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  const [loading, setLoading] = useState(false);

  const convertTime = (type, obj) => {
    if (type === 'day') {
      return `${obj.day}/${obj.month}/${obj.year}`;
    }
    return `${obj[type]}/${obj.year}`;
  };

  useEffect(() => {
    getStatisticByDMY(
      token || localStorage.getItem('access-token'),
      period,
      month,
      year
    )
      .then(res => {
        const arr = res.data.map(i => {
          return { genre: convertTime(period, i._id), sold: i.total };
        });
        dispatch(setAllStatistics(arr));
        setLoading(true);
      })
      .catch(err => {
        if (err.response) {
          message.error(err.response.data.error);
        } else {
          message.error(err.message);
        }
      });
  }, [token, dispatch, period, month, year]);

  const handleShow = () => {
    // setLoading(false);
    // getStatisticByDMY(token, period, month, year)
    //   .then(res => {
    //     const arr = res.data.map(i => {
    //       return { genre: convertTime(period, i._id), sold: i.total };
    //     });
    //     dispatch(setAllStatistics(arr));
    //     setLoading(true);
    //   })
    //   .catch(err => {
    //     if (err.response) {
    //       message.error(err.response.data.error);
    //     } else {
    //       message.error(err.message);
    //     }
    //   });
  };

  return (
    <div className="chart-container">
      <Row className="chart-select">
        <Col xs={24} md={8}>
          <Select
            defaultValue="day"
            style={{ width: 150 }}
            onChange={value => setPeriod(value)}
          >
            <Option value="day">Day</Option>
            <Option value="week">Week</Option>
            <Option value="month">Month</Option>
            <Option value="quarter">Quater</Option>
            <Option value="year">Year</Option>
          </Select>
        </Col>
        <Col xs={24} md={8}>
          <Select
            defaultValue={new Date().getMonth() + 1}
            style={{ width: 150 }}
            onChange={value => setMonth(value)}
            disabled={period !== 'day'}
          >
            {Array(12)
              .fill(null)
              .map((i, idx) => {
                return (
                  <Option value={idx + 1} key={String(idx)}>
                    {idx + 1}
                  </Option>
                );
              })}
          </Select>
        </Col>
        <Col xs={24} md={8}>
          <Select
            defaultValue={new Date().getFullYear()}
            style={{ width: 150 }}
            onChange={value => setYear(value)}
          >
            {Array(22)
              .fill(null)
              .map((i, idx) => {
                return (
                  <Option value={idx + 1998} key={String(idx)}>
                    {idx + 1998}
                  </Option>
                );
              })}
          </Select>
        </Col>
      </Row>
      <Row className="chart-btn">
        {false && <Button onClick={() => handleShow()}>Show</Button>}
      </Row>
      <Row className="chart-tab">
        {loading ? (
          <Tabs type="card">
            <TabPane tab="Chart" key="1">
              <ChartStatistic />
            </TabPane>
            <TabPane tab="Table" key="2">
              <TableStatistic />
            </TabPane>
          </Tabs>
        ) : (
          <Skeleton />
        )}
      </Row>
    </div>
  );
}

export default connect(state => {
  return {
    token: state.tokenReducer
  };
})(Statistic);
