import React from 'react';
import { connect } from 'react-redux';
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';
import { Empty } from 'antd';

function ChartStatistic({ data }) {
  const cols = {
    sold: { alias: 'time' },
    genre: { alias: 'total' }
  };
  return (
    <div>
      {data.length > 0 ? (
        <Chart width={600} height={400} data={data} scale={cols}>
          <Axis name="genre" title />
          <Axis name="sold" title />
          <Legend position="top" dy={-20} />
          <Tooltip />
          <Geom type="interval" position="genre*sold" color="genre" />
        </Chart>
      ) : (
        <Empty description={false} />
      )}
    </div>
  );
}

export default connect(state => {
  return {
    data: state.statistics
  };
})(ChartStatistic);
