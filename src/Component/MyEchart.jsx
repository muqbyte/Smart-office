import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const MyEchart = (props) => {
  const valueLevel=props.valueLevel;
  const getId=props.getId;
  const paramterValue=props.paramterValue;
  const maxValue=props.maxValue;

  useEffect(() => {
    const chartDom = document.getElementById(getId);
    const myChart = echarts.init(chartDom);
    const option = {
      tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
      },
      series: [
        {
          name: 'Pressure',
          type: 'gauge',
          min: 0,       // Set the minimum value
          max: maxValue,     // Set the maximum value
          detail: {
            formatter: '{value}'
          },
          data: [
            {
              value: valueLevel,
              name: paramterValue
            }
          ]
        }
      ]
    };

    myChart.setOption(option);

    // Clean up
    return () => {
      myChart.dispose();
    };
  }, []);

  return <div id={getId} style={{ width: '100%', height: '300px', boder:"black 2px solid"}}></div>;
};

export default MyEchart;
