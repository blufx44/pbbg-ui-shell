import React from 'react';
import "beercss";
import "material-dynamic-colors";

import { useGetQuestsQuery } from '../../redux/api';
/**
 * Base UI component for the Inventory.
 * 
 * @returns 
 */
export function Actions() {
  //const { data, error, isLoading } = useGetQuestsQuery();
  const data = [{}];

  return (
    <ul class="list no-space" style={{height: '100%', width: '100%', alignSelf: 'start'}}>
      {
        data.map(_ =>
          <li class='vertical'>
            <button class="small-round small vertical">
              <img src="/favicon.png" />
              <span>Action</span>
            </button>
          </li>
        )
      }
    </ul>
  );
}