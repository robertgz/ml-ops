import React, { useState } from 'react';
import { Container, CssBaseline } from '@mui/material';
import ReactECharts from 'echarts-for-react';
import { DatasetContext } from '../dataset/datasetContext';

export default function Graph() {
  const datasetContext = React.useContext(DatasetContext);

  let [goodCount, setGoodCount] = useState(0);
  let [noneCount, setNoneCount] = useState(0);
  let [badCount, setBadCount] = useState(0);

  React.useEffect(() => {
    setGoodCount(datasetContext.getItemGoodCount());
    setNoneCount(datasetContext.getItemNoneCount());
    setBadCount(datasetContext.getItemBadCount());

  }, [datasetContext.dataset, datasetContext]);

  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Dataset Group',
        type: 'pie',
        startAngle: 270,
        radius: ['40%', '70%'],
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          formatter: '{c}',
          show: true,
          position: 'inner',
        },
        labelLine: {
          show: false
        },
        data: [
          { 
            value: goodCount > 0 ? goodCount : '',
            name: 'Good',
            itemStyle: { color: 'green'} 
          },
          { 
            value: noneCount > 0 ? noneCount : '',
            name: 'Not Grouped/None',
            itemStyle: { color: 'orange'}
          },
          { 
            value: badCount > 0 ? badCount : '',
            name: 'Bad',
            itemStyle: { color: 'red'}
          },
        ]
      }
    ]
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <ReactECharts option={option} opts={{renderer: 'svg'}}/>
      </Container>
    </React.Fragment>
  );
}
