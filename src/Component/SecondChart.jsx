import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const SecondChart = (props) => {
  const temperatureLevel=props.temperatureLevel;
  useEffect(() => {
    const chartDom = document.getElementById('main');
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
          max: 100,     // Set the maximum value
          detail: {
            formatter: '{value}'
          },
          data: [
            {
              value: temperatureLevel,
              name: 'SCORE'
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

  return <div id="main" style={{ width: '26%', height: '300px', border:"black 2px solid"}}></div>;
};

export default SecondChart;
