import React from 'react';
import "beercss";
import "material-dynamic-colors";
import { useUpdateLocationMutation } from '../../redux/api';

/**
 * Base UI component for the DPad Movement Controls.
 * 
 * @returns 
 */
export function Controls() {
  const [move, { isLoading: isUpdating }] = useUpdateLocationMutation();

  return (
    <div class="set small-blur" style={{width: '10em'}}>
      <nav class="o-pad">
        <a class="up" href="#" onClick={() => move('w')}></a>
        <a class="right" href="#" onClick={() => move('d')}></a>
        <a class="down" href="#" onClick={() => move('s')}></a>
        <a class="left" href="#" onClick={() => move('a')}></a>
      </nav>
    </div>
  );
}