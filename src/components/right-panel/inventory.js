import React from 'react';
import "beercss";
import "material-dynamic-colors";

import { InventoryItem } from './inventory-item';
import { useGetInventoryQuery } from '../../redux/api';
/**
 * Base UI component for the Inventory.
 * 
 * @returns 
 */
export function Inventory() {
  //const { data, error, isLoading } = useGetInventoryQuery();
  const data = [{},{},{},{},{},{}];

  return (
    <div class='grid' style={{width: '100%', alignSelf: 'start'}}>
      {
        data.map(_ =>
          <div class='s12 m6 l3'>
            <InventoryItem data={_} />
          </div>)
      }
    </div>
  );
}