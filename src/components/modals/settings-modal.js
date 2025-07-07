import React, { useEffect } from 'react';
import "beercss";
import "material-dynamic-colors";
import { useDispatch } from 'react-redux';

import { setModal } from '../../redux/ui-slice';

/**
 * Base UI component for the Inventory.
 * 
 * @returns 
 */
export function SettingsModal() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setModal(true));
  }, []);

  return (
    <dialog class={`modal active`} onClick={(event) => { event.stopPropagation() }} >
      <div style={{ height: '100%', width: '100%', alignSelf: 'start' }}>
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
      <nav class="right-align no-space">
        <button class="transparent link" onClick={() => dispatch(setModal(false))}>Close</button>
      </nav>
    </dialog>
  );
}