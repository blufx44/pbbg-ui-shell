import React from 'react';
import "beercss";
import "material-dynamic-colors";

/**
 * Base UI component for the Inventory.
 * 
 * @returns 
 */
export function Settings() {

  return (
    <div style={{height: '100%', width: '100%', alignSelf: 'start'}}>
      <nav class='padding'>
        <i>volume_off</i>
        <label class="slider">
          <input type="range" />
            <span></span>
        </label>
        <i>volume_up</i>
      </nav>
      <nav class='padding'>
        <i>music_off</i>
        <label class="slider">
          <input type="range" />
            <span></span>
        </label>
        <i>music_note</i>
      </nav>
    </div>
  );
}