import React, { useState } from 'react';
import Item from './item';

import { Box, Pagination } from '@mui/material';
import { DatasetContext } from '../dataset/datasetContext';

export default function ItemList() {
  const datasetContext = React.useContext(DatasetContext);
  const setItemGroup = datasetContext.setItemGroup;

  let [itemsPerPage, setItemsPerPage] = useState(6);
  let [showPagination, setShowPagination] = useState(false);
  let [currentPageNumber, setCurrentPageNumber] = useState(1);
  let [pageCount, setPageCount] = useState(0);

  let [items, setItems] = useState<React.ReactElement[]>();

  React.useEffect(() => {
    const startIndex = itemsPerPage * (currentPageNumber - 1);
    const endIndex = itemsPerPage * (currentPageNumber);

    const elements = datasetContext.dataset.slice(startIndex, endIndex).map((dataItem) => (
      <React.Fragment key={dataItem.id}>
        <Item data={dataItem} setGroup={setItemGroup}></Item>
      </React.Fragment>
    ));

    setItems(elements);
    setShowPagination(datasetContext.dataset.length > itemsPerPage)
    setPageCount(Math.ceil(datasetContext.dataset.length/itemsPerPage))
  }, [datasetContext.dataset, setItemGroup, itemsPerPage, currentPageNumber])

  function setPage(page: number) {
    setCurrentPageNumber(page);
  }

  return (
    <React.Fragment>
      <Box 
        sx={{ 
          display: 'flex',
          flexWrap: 'wrap',
        }}>
        {items}
      </Box>
      {showPagination && 
        <Pagination count={pageCount} page={currentPageNumber} onChange={(e, page) => setPage(page)} />
      }
    </React.Fragment>
  );
}
