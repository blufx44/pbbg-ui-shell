import React from 'react';
import "beercss";
import "material-dynamic-colors";

/**
 * Base UI component for the Inventory.
 * 
 * @param {*} props 
 * @returns 
 */
export function Chat(props) {
  return (
    <dialog class={`top small-blur ${props.isOpen ? 'active' : ''}`} style={{zIndex: '101'}}>
      <h5>Top</h5>
      <div>Some text here</div>
      <nav class="right-align">
        <button class="border" onClick={() => props.onClose()}>Cancel</button>
        <button>Confirm</button>
      </nav>
    </dialog>
  );
}