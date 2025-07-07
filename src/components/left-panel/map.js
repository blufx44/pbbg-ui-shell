import React, { useEffect, useRef } from 'react';
import "beercss";
import "material-dynamic-colors";
import { useGetQuestsQuery } from '../../redux/api';

const data = [
  ['rgba(0,255,255,1)', 'rgba(0,255,0,1)', 'rgba(0,255,255,1)', 'rgba(0,255,0,1)', 'rgba(0,255,255,1)', 'rgba(0,255,0,1)', 'rgba(0,255,255,1)', 'rgba(0,255,0,1)', 'rgba(0,255,255,1)', 'rgba(0,255,0,1)'],
  ['rgba(0,255,0,1)', 'rgba(0,255,255,1)', 'rgba(0,255,0,1)', 'rgba(0,255,255,1)', 'rgba(0,255,0,1)', 'rgba(0,255,255,1)', 'rgba(0,255,0,1)', 'rgba(0,255,255,1)', 'rgba(0,255,0,1)', 'rgba(0,255,255,1)'],
  ['rgba(0,255,255,1)', 'rgba(0,255,0,1)', 'rgba(0,255,255,1)', 'rgba(0,255,0,1)', 'rgba(0,255,255,1)', 'rgba(0,255,0,1)', 'rgba(0,255,255,1)', 'rgba(0,255,0,1)', 'rgba(0,255,255,1)', 'rgba(0,255,0,1)'],
  ['rgba(0,255,0,1)', 'rgba(0,255,255,1)', 'rgba(0,255,0,1)', 'rgba(0,255,255,1)', 'rgba(0,255,0,1)', 'rgba(0,255,255,1)', 'rgba(0,255,0,1)', 'rgba(0,255,255,1)', 'rgba(0,255,0,1)', 'rgba(0,255,255,1)'],
  ['rgba(0,255,255,1)', 'rgba(0,255,0,1)', 'rgba(0,255,255,1)', 'rgba(0,255,0,1)', 'rgba(0,255,255,1)', 'rgba(0,255,0,1)', 'rgba(0,255,255,1)', 'rgba(0,255,0,1)', 'rgba(0,255,255,1)', 'rgba(0,255,0,1)'],
  ['rgba(0,255,0,1)', 'rgba(0,255,255,1)', 'rgba(0,255,0,1)', 'rgba(0,255,255,1)', 'rgba(0,255,0,1)', 'rgba(0,255,255,1)', 'rgba(0,255,0,1)', 'rgba(0,255,255,1)', 'rgba(0,255,0,1)', 'rgba(0,255,255,1)'],
  ['rgba(0,255,255,1)', 'rgba(0,255,0,1)', 'rgba(0,255,255,1)', 'rgba(0,255,0,1)', 'rgba(0,255,255,1)', 'rgba(0,255,0,1)', 'rgba(0,255,255,1)', 'rgba(0,255,0,1)', 'rgba(0,255,255,1)', 'rgba(0,255,0,1)'],
  ['rgba(0,255,0,1)', 'rgba(0,255,255,1)', 'rgba(0,255,0,1)', 'rgba(0,255,255,1)', 'rgba(0,255,0,1)', 'rgba(0,255,255,1)', 'rgba(0,255,0,1)', 'rgba(0,255,255,1)', 'rgba(0,255,0,1)', 'rgba(0,255,255,1)'],
  ['rgba(0,255,255,1)', 'rgba(0,255,0,1)', 'rgba(0,255,255,1)', 'rgba(0,255,0,1)', 'rgba(0,255,255,1)', 'rgba(0,255,0,1)', 'rgba(0,255,255,1)', 'rgba(0,255,0,1)', 'rgba(0,255,255,1)', 'rgba(0,255,0,1)'],
  ['rgba(0,255,0,1)', 'rgba(0,255,255,1)', 'rgba(0,255,0,1)', 'rgba(0,255,255,1)', 'rgba(0,255,0,1)', 'rgba(0,255,255,1)', 'rgba(0,255,0,1)', 'rgba(0,255,255,1)', 'rgba(0,255,0,1)', 'rgba(0,255,255,1)']
];

const camera = { x: 5, y: 5 };
const iconPosition = { x: 4, y: 10 };

/**
 * Base UI component for the Inventory.
 * 
 * @param {*} props 
 * @returns 
 */
export function Map(props) {
  const canvasRef = useRef(null);
  //const { data, error, isLoading } = useGetQuestsQuery();

  /**
   * 
   */
  const draw = () => {
    let ctx = canvasRef.current.getContext('2d');
    // Reset to default transformation
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    // Clear the canvas
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    // Get the size of 1em (font size)
    const computedStyle = window.getComputedStyle(canvasRef.current);
    const pxSize = parseFloat(computedStyle.fontSize);

    // Move canvas center to character location
    ctx.translate((-camera.x * pxSize) + (canvasRef.current.width / 2), (-camera.y * pxSize) + (canvasRef.current.height / 2));

    // Draw map
    data.forEach((column, i) => {
      column.forEach((row, j) => {
        ctx.fillStyle = row;
        ctx.fillRect(i * pxSize, j * pxSize, pxSize, pxSize);
      });
    });

    // Draw icon
    let iconX = Math.max((-camera.x * pxSize), ((-camera.x * pxSize) + (canvasRef.current.width / 2) + ((iconPosition.x+0.3) * pxSize - camera.x * pxSize)));
    //iconX = Math.min(iconX, (camera.x * pxSize) + (canvasRef.current.width / 2));

    let iconY = Math.max((-camera.y * pxSize), ((-camera.y * pxSize) + (canvasRef.current.height / 2) + ((iconPosition.y+0.65) * pxSize - camera.y * pxSize)));
    //iconY = Math.min(iconY, (camera.y * pxSize) + (canvasRef.current.height / 2));

    ctx.font = `${pxSize}px Material Icons`;
    ctx.fillStyle = 'black';
    ctx.fillText('\ue0c8', iconX, iconY);
  }

  useEffect(() => {
    if (canvasRef !== undefined) {
      draw();
    }
  }, [camera]);

  return (
    <div class='small-blur' style={{visibility: props.isOpen ? 'visible' : 'hidden', zIndex: props.isOpen ? '10' : '0'}}>
      <canvas ref={canvasRef} />
    </div>
  );
}