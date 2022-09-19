import { Grid, Paper } from '@mui/material';
import * as React from 'react';
import ItemList from '../components/itemList';
import Metrics from '../components/metrics';

export default function Home() {
  return (
    <Grid container spacing={2} sx={{padding: 1}}>
      <Grid item xs={12} md={4}>
        <Paper>
          <Metrics />
        </Paper>
      </Grid>
      <Grid item xs={12} md={8}>
        <Paper>
          <ItemList />
        </Paper>
      </Grid>
    </Grid>
  );
}
