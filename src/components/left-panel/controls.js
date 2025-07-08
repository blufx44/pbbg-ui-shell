import React from 'react';
import { useSelector } from 'react-redux';
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
  const dPadLocation = useSelector((state) => state['ui'].dPadLocation);
  const isMenuLeft = useSelector((state) => state['ui'].isMenuLeft);

  return (
    <div class="set small-blur" style={{
      width: '10em', 
      zIndex: '10', 
      position: dPadLocation.x !== null && dPadLocation.y !== null ? 'absolute' : 'relative', 
      left: !isMenuLeft ? dPadLocation.x : '', 
      right: isMenuLeft ? dPadLocation.x : '',
      top: dPadLocation.y}}>
      <nav class="o-pad">
        <a draggable={false} class="up" href="#" onClick={() => move('w')}></a>
        <a draggable={false} class="right" href="#" onClick={() => move('d')}></a>
        <a draggable={false} class="down" href="#" onClick={() => move('s')}></a>
        <a draggable={false} class="left" href="#" onClick={() => move('a')}></a>
      </nav>
    </div>
  );
}