import React, { useEffect, useState } from 'react';
import "beercss";
import "material-dynamic-colors";
import { useDispatch } from 'react-redux';

import { setModal } from '../../redux/ui-slice';

/**
 * Base UI component for the Inventory.
 * 
 * @returns 
 */
export function AccountModal() {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  useEffect(() => {
    dispatch(setModal(true));
  }, []);

  return (
    <dialog class={`modal active`} onClick={(event) => { event.stopPropagation() }} >
      <div style={{ height: '100%', width: '100%', alignSelf: 'start' }}>
        <nav class='padding'>
          <div class={`field ${error ? 'invalid' : ''} border small`}>
            <input type="text" />
            {error && <span class="error">Error text</span>}
          </div>
        </nav>
        <nav class='padding'>
          <div class={`field ${error ? 'invalid' : ''} border small`}>
            <input type="text" />
            {error && <span class="error">Error text</span>}
          </div>
        </nav>
      </div>
      <nav class="right-align no-space">
        <button class="transparent link" onClick={() => dispatch(setModal(false))}>Close</button>
      </nav>
    </dialog>
  );
}