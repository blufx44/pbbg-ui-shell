import React, { useState } from 'react';
import { useSelector } from 'react-redux';
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
  const mapOpen = useSelector((state) => state['ui'].mapOpen);

  return (
    <div style={{ position: 'absolute', left: '1em', top: '0px', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: '25%' }}>
        <Map isOpen={mapOpen} />
      </div>
      <div style={{ height: '75%', width: '100%', justifyItems: 'center' }}>
        <Controls />
      </div>
    </div>);
}