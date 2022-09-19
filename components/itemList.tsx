import React, { useState } from 'react';
import Item from './item';

import { Box } from '@mui/material';
import { DatasetContext } from '../dataset/datasetContext';

export default function ItemList() {
  const datasetContext = React.useContext(DatasetContext);
  const setItemGroup = datasetContext.setItemGroup;

  let [items, setItems] = useState<React.ReactElement[]>();

  React.useEffect(() => {
    const elements = datasetContext.dataset.map((dataItem) => (
      <React.Fragment key={dataItem.id}>
        <Item data={dataItem} setGroup={setItemGroup}></Item>
      </React.Fragment>
    ));

    setItems(elements);
  }, [datasetContext.dataset, setItemGroup])

  return (
    <React.Fragment>
      <Box 
        sx={{ 
          display: 'flex',
          flexWrap: 'wrap',
        }}>
        {items}
      </Box>
    </React.Fragment>
  );
}
