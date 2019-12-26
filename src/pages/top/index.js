import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { Select, Row, Col, Tabs, message, Skeleton, InputNumber } from 'antd';

import './index.scss';
import ChartStatistic from './ChartTop';
import TableStatistic from './TableTop';
import { getTopByDMY, getAllTop, getTopByNumber } from '../../api/services/top';
import { setAllTop } from '../../actions/top';

const { Option } = Select;
const { TabPane } = Tabs;

function Statistic({ token, dispatch }) {
  const [period, setPeriod] = useState('day');
  const [type, setType] = useState('users');
  const [day, setDay] = useState(new Date().getDate());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    switch (period) {
      case 'day':
        getTopByDMY(
          token || localStorage.getItem('access-token'),
          type,
          day,
          month,
          year
        )
          .then(res => {
            let arr = [];
            if (type === 'users') {
              arr =
                res.data.length > 0
                  ? res.data[0].tutors.map(i => {
                      return { item: i.name, count: i.total };
                    })
                  : [];
            } else {
              arr =
                res.data.length > 0
                  ? res.data[0].tags.map(i => {
                      return { item: i.tagName, count: i.total };
                    })
                  : [];
            }
            dispatch(setAllTop(arr));
            setLoading(true);
          })
          .catch(err => {
            if (err.response) {
              message.error(err.response.data.error);
            } else {
              message.error(err.message);
            }
          });
        break;
      case 'all':
        getAllTop(token, type)
          .then(res => {
            let arr = [];
            if (type === 'users') {
              arr =
                res.data.length > 0
                  ? res.data[0].tutors.map(i => {
                      return { item: i.name, count: i.total };
                    })
                  : [];
            } else {
              arr =
                res.data.length > 0
                  ? res.data[0].tags.map(i => {
                      return { item: i.tagName, count: i.total };
                    })
                  : [];
            }
            dispatch(setAllTop(arr));
            setLoading(true);
          })
          .catch(err => {
            if (err.response) {
              message.error(err.response.data.error);
            } else {
              message.error(err.message);
            }
          });
        break;
      default:
        getTopByNumber(token, type, period, month, year)
          .then(res => {
            let arr = [];
            if (type === 'users') {
              arr =
                res.data.length > 0
                  ? res.data[0].tutors.map(i => {
                      return { item: i.name, count: i.total };
                    })
                  : [];
            } else {
              arr =
                res.data.length > 0
                  ? res.data[0].tags.map(i => {
                      return { item: i.tagName, count: i.total };
                    })
                  : [];
            }
            dispatch(setAllTop(arr));
            setLoading(true);
          })
          .catch(err => {
            if (err.response) {
              message.error(err.response.data.error);
            } else {
              message.error(err.message);
            }
          });
        break;
    }
  }, [token, dispatch, type, day, month, year, period]);

  const maxDay = () => {
    return 31;
  };

  const maxNum = value => {
    switch (value) {
      case 'day':
        return 12;
      case 'week':
        return 48;
      case 'month':
        return 12;
      case 'quarter':
        return 4;
      default:
        return 1;
    }
  };

  return (
    <div className="chart-container">
      <Row className="chart-select">
        <Col xs={24} md={4}>
          <Select
            defaultValue="users"
            style={{ width: 150 }}
            onChange={value => setType(value)}
          >
            <Option value="users">User</Option>
            <Option value="tags">Tag</Option>
          </Select>
        </Col>
        <Col xs={24} md={4}>
          <Select
            defaultValue="day"
            style={{ width: 150 }}
            onChange={value => setPeriod(value)}
          >
            <Option value="day">Day</Option>
            <Option value="week">Week</Option>
            <Option value="month">Month</Option>
            <Option value="quarter">Quater</Option>
            <Option value="all">All</Option>
          </Select>
        </Col>
        <Col xs={24} md={4}>
          <InputNumber
            disabled={period !== 'day'}
            min={1}
            max={maxDay(month)}
            defaultValue={new Date().getDate()}
            onChange={value => setDay(value)}
          />
        </Col>
        <Col xs={24} md={4}>
          <InputNumber
            disabled={period === 'all'}
            min={1}
            max={maxNum(period)}
            defaultValue={new Date().getMonth() + 1}
            onChange={value => setMonth(value)}
          />
        </Col>
        <Col xs={24} md={4}>
          <Select
            disabled={period === 'all'}
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
