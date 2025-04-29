import React, { useState } from 'react';
import "beercss";
import "material-dynamic-colors";
import { Map } from './map';
import { Controls } from './controls';


/**
 * Base UI component for the Inventory.
 * 
 * @param {*} props 
 * @returns 
 */
export function LeftMenu(props) {
  const [mapOpen, setMapOpen] = useState(false);

  return (<nav class="left transparent">
    <header>
      <button class="circle transparent" onClick={() => setMapOpen(!mapOpen)}>
        <i>map</i>
      </button>
    </header>
    <a>
      {
        mapOpen && 
        <Map />
      }
    </a>
    <a style={{ marginRight: 'auto' }}>
      <Controls />
    </a>
  </nav>);
}