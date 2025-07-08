import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "beercss";
import "material-dynamic-colors";

import { Map } from './map';
import { Controls } from './controls';
import { setDPadLocation } from '../../redux/ui-slice';


/**
 * Base UI component for the Inventory.
 * 
 * @param {*} props 
 * @returns 
 */
export function LeftMenu(props) {
  const dispatch = useDispatch();
  const controlRef = useRef(null);
  const mapOpen = useSelector((state) => state['ui'].mapOpen);
  const isMenuLeft = useSelector((state) => state['ui'].isMenuLeft);
  const isMovingDPad = useSelector((state) => state['ui'].isMovingDPad);

  const handleMouseSetLocation = (e) => {
    if (isMovingDPad) {
      e.stopPropagation();
      const computedStyle = window.getComputedStyle(controlRef.current);
      const pxSize = parseFloat(computedStyle.fontSize);

      if (e.buttons === 1) {

        let x = isMenuLeft ? window.innerWidth - e.pageX - pxSize - 5*pxSize : e.pageX - pxSize - 5*pxSize;
        let y = e.pageY - (window.innerHeight - controlRef.current.offsetHeight) - 5*pxSize;

        x = Math.min(Math.max(0, x), controlRef.current.offsetWidth - 10*pxSize);
        y = Math.min(Math.max(0, y), controlRef.current.offsetHeight - 10*pxSize);

        dispatch(setDPadLocation({ x: x, y: y }));
      }
    }
  }

  const handleTouchSetLocation = (e) => {
    if (isMovingDPad && e.touches.length > 0) {
      e.stopPropagation();
      const computedStyle = window.getComputedStyle(controlRef.current);
      const pxSize = parseFloat(computedStyle.fontSize);

      let x = isMenuLeft ? window.innerWidth - e.touches[0].pageX - pxSize - 5*pxSize : e.touches[0].pageX - pxSize - 5*pxSize;
      let y = e.touches[0].pageY - (window.innerHeight - controlRef.current.offsetHeight) - 5*pxSize;

      x = Math.min(Math.max(0, x), controlRef.current.offsetWidth - 10*pxSize);
      y = Math.min(Math.max(0, y), controlRef.current.offsetHeight - 10*pxSize);

      dispatch(setDPadLocation({ x: x, y: y }));
    }
  }

  return (
    <div style={{
      position: 'absolute',
      right: !isMenuLeft ? '' : '1em',
      left: !isMenuLeft ? '1em' : '',
      top: '0px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{ height: '25%' }}>
        <Map isOpen={mapOpen} />
      </div>
      <div ref={controlRef}
        onClick={(e) => handleMouseSetLocation(e)}
        onMouseDown={(e) => handleMouseSetLocation(e)}
        onMouseUp={(e) => { e.stopPropagation() }}
        onMouseMove={(e) => handleMouseSetLocation(e)}
        onTouchStart={(e) => handleTouchSetLocation(e)}
        onTouchMove={(e) => handleTouchSetLocation(e)}
        style={{
          height: '75%',
          width: '100%',
          justifyItems: 'center',
          border: isMovingDPad ? 'dashed purple medium' : '',
          zIndex: isMovingDPad ? '10' : '',
        }}>
        <Controls />
      </div>
    </div>);
}