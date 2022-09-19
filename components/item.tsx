import * as React from 'react';
import { Box, Button, Grid } from '@mui/material';
import Image from 'next/image';

interface ItemProps {
  data: {
    id: string;
    filePath: string;
    group: string;
  };
  setGroup: (id: string, group: string) => void;
}

export default function Item(props: ItemProps) {

  function setGroup(group: string) {
    props.setGroup(props.data.id, group);
  }

  const goodButton = (
    <Button 
      size="small" color="success" 
      variant={(props.data.group === 'good') ? 'contained' : 'outlined'}
      onClick={() => setGroup('good')}
    >Good</Button>
  );
  const badButton = (
    <Button size="small" color="error"
      variant={(props.data.group === 'bad') ? 'contained' : 'outlined'}
      onClick={() => setGroup('bad')}
    >Bad</Button>
  );
  const unGroupButton = (
    <Button size="small" color="warning"
      variant={(props.data.group === '') ? 'contained' : 'outlined'}
      onClick={() => setGroup('')}
    >None</Button>
  );

  return (
    <Box 
      sx={{padding: 1, width: 250, minWidth: 250, border: '2px solid #ccc', margin: 0.5}}
    >
      <Grid container spacing={0} sx={{padding: 1}}>
        <Grid item xs={12}>
          <Image
            src={props.data.filePath}
            alt="Image from the dataset"
            width={200}
            height={200}
          />
        </Grid>
        <Grid item xs={12}>Choose Group</Grid>
        <Grid item xs={4}>{goodButton}</Grid>
        <Grid item xs={4}>{unGroupButton}</Grid>
        <Grid item xs={4}>{badButton}</Grid>
      </Grid>
    </Box>
  );
}
