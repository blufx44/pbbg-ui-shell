import React, { useEffect } from 'react';
import "beercss";
import "material-dynamic-colors";
import { useDispatch, useSelector } from 'react-redux';

import { setModal, flipMenus } from '../../redux/ui-slice';

/**
 * Base UI component for the Inventory.
 * 
 * @returns 
 */
export function SettingsModal() {
  const dispatch = useDispatch();
  const isMenuLeft = useSelector((state) => state['ui'].isMenuLeft);

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
        <nav class='padding'>
          <label class="checkbox icon">
            <span style={{ marginRight: '1em' }}>Menu Location:</span>
            <input type="checkbox" value={isMenuLeft} onClick={() => dispatch(flipMenus())} />
            <span>
              {!isMenuLeft && <i>east</i>}
              {isMenuLeft && <i>west</i>}
            </span>
          </label>
        </nav>
      </div>
      <nav class="right-align no-space">
        <button class="transparent link" onClick={() => dispatch(setModal(false))}>Close</button>
      </nav>
    </dialog>
  );
}