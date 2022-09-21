import React, { useState } from "react";
import { Schema } from './schema';
import { Dataset } from './dataset';

const DatasetContext = React.createContext({
  dataset: Dataset,
  setItemGroup: (id: string, group: string) => console.log('default'),
  getItemTotalCount: (): number => 0,
  getItemGoodCount: (): number => 0,
  getItemBadCount: (): number => 0,
  getItemNoneCount: (): number => 0,
});

interface DatasetProviderProps {
  children: React.ReactElement;
}

export default function DatasetProvider(props: DatasetProviderProps) {
  let [dataset, setDataset] = useState(Dataset);
  
  const setGroup = (id: string, group: string) => {
    const index = dataset.findIndex((item) => item.id === id);

    if (index < 0 || dataset[index].group === group) return;

    const datasetCopy: Schema[] = JSON.parse(JSON.stringify(dataset));

    datasetCopy[index].group = group; 

    setDataset(datasetCopy);
  };

  const getItemTypeCount = (type: string): number => {
    return dataset.filter((item) => item.group.toLocaleUpperCase() === type.toLocaleUpperCase()).length;
  }

  return (
    <DatasetContext.Provider 
      value={{
        dataset,
        setItemGroup: setGroup,
        getItemTotalCount: () => dataset.length,
        getItemGoodCount: () => getItemTypeCount('GOOD'),
        getItemBadCount: () => getItemTypeCount('BAD'),
        getItemNoneCount: () => getItemTypeCount(''),
      }}>
      {props.children}
    </DatasetContext.Provider>
  )
}

export { DatasetContext, DatasetProvider };
