import { Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { DatasetContext } from '../dataset/datasetContext';
import Graph from './graph';

export default function Metrics() {
  const datasetContext = React.useContext(DatasetContext);

  let [goodCount, setGoodCount] = useState(0);
  let [badCount, setBadCount] = useState(0);
  let [total, setTotalCount] = useState(0);

  React.useEffect(() => {
    setGoodCount(datasetContext.getItemGoodCount());
    setBadCount(datasetContext.getItemBadCount());
    setTotalCount(datasetContext.getItemTotalCount());

  }, [datasetContext.dataset, datasetContext]);

  return (
    <React.Fragment>
      <Container>
        <Typography variant='h4' align='center'>Dataset Metrics</Typography>
      </Container>
      <Grid container>
        <Grid item xs={12} sm={4} md={12} xl={4}>
          <Container
            sx={{ 
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%'
            }}>

            <div>Total Images: {total}</div>
            <div>Good: {goodCount}</div>
            <div>Bad: {badCount}</div>
          </Container>
        </Grid>    
        <Grid item xs={12} sm={8} md={12} xl={8}>
          <Graph/>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}