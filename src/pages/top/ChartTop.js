import React from 'react';
import { connect } from 'react-redux';
import { Chart, Geom, Axis, Tooltip, Coord, Label, Legend } from 'bizcharts';
import DataSet from '@antv/data-set';

function chart({ data }) {
  const { DataView } = DataSet;

  const dv = new DataView();
  dv.source(data).transform({
    type: 'percent',
    field: 'count',
    dimension: 'item',
    as: 'percent'
  });
  const cols = {
    percent: {
      formatter: val => {
        const value = `${(val * 100).toFixed(2)}%`;
        return value;
      }
    }
  };
  return (
    <div>
      <Chart
        height={window.innerHeight}
        data={dv}
        scale={cols}
        padding={[80, 100, 80, 80]}
        forceFit
      >
        <Coord type="theta" radius={0.75} />
        <Axis name="percent" />
        <Legend
          position="right"
          offsetY={-window.innerHeight / 2 + 120}
          offsetX={-100}
        />
        <Tooltip
          showTitle={false}
          itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
        />
        <Geom
          type="intervalStack"
          position="percent"
          color="item"
          tooltip={[
            'item*percent',
            (item, percent) => {
              const per = `${(percent * 100).toFixed(2)}%`;
              return {
                name: item,
                value: per
              };
            }
          ]}
          style={{
            lineWidth: 1,
            stroke: '#fff'
          }}
        >
          <Label
            content="percent"
            formatter={(val, item) => {
              const i = `${item.point.item}: ${val}`;
              return i;
            }}
          />
        </Geom>
      </Chart>
    </div>
  );
}

export default connect(state => {
  return {
    data: state.tops
  };
})(chart);
