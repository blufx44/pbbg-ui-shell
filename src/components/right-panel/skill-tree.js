import React, { useRef, useState } from 'react';
import "beercss";
import "material-dynamic-colors";
import Xarrow, {useXarrow, Xwrapper} from "react-xarrows";

import { SkillNode } from './skill-node';

const MAX_ZOOM = 5;
const MIN_ZOOM = 0.1;
const SCROLL_SENSITIVITY = 0.005;
const treeData =           [{
  id: '10', 
  nodes: [
    {id: '20', nodes: []}, 
    {id: '30', nodes: [
      {id: 40, nodes: []},
      {id: 50, nodes: []},
      {id: 60, nodes: []}
      ]}
  ]
}];


/**
 * Base UI component for the Inventory.
 * 
 * @returns 
 */
export function SkillTree() {
  const skillTreeRef = useRef(undefined);
  const [zoom, setZoom] = useState(1);
  const [pinchDistance, setPinchDistance] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [cameraOffset, setCameraOffset] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const updateXarrow = useXarrow();

  /**
   * 
   * @param {*} e 
   * @returns 
   */
  const getLocation = (e) => {
    if (e.touches && e.touches.length === 1) {
      return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
    else if (e.clientX && e.clientY) {
      return { x: e.clientX, y: e.clientY };
    }
  }

  /**
   * 
   * @param {*} e 
   */
  const handleMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    updateXarrow();

    setIsDragging(true);
    setDragOffset({
      x: getLocation(e).x / zoom - cameraOffset.x,
      y: getLocation(e).y / zoom - cameraOffset.y
    });
  };

  /**
   * 
   * @param {*} e 
   */
  const handleMouseUp = (e) => {
    e.preventDefault();
    e.stopPropagation();
    updateXarrow();

    setIsDragging(false);
    setPinchDistance(null);
  };

  /**
   * 
   * @param {*} e 
   */
  const handleMouseMove = (e) => {
    updateXarrow();
    e.preventDefault();
    e.stopPropagation();

    if (isDragging) {
      setCameraOffset({
        x: getLocation(e).x / zoom - dragOffset.x,
        y: getLocation(e).y / zoom - dragOffset.y
      });
    }
  };

  /**
   * 
   * @param {*} e 
   * @param {*} listener 
   */
  const handleTouch = (e, listener) => {
    e.preventDefault();
    e.stopPropagation();
    updateXarrow();

    if (e.touches.length === 1) {
      listener(e);
    }
    else if (e.type === 'touchmove' && e.touches.length === 2) {
      setIsDragging(false);
      e.preventDefault();
      e.stopPropagation();

      let touch1 = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      let touch2 = { x: e.touches[1].clientX, y: e.touches[1].clientY };

      let dist = (touch1.x - touch2.x) ** 2 + (touch1.y - touch2.y) ** 2;

      if (pinchDistance === null) {
        setPinchDistance(dist);
      }
      else {
        handleZoom(e, (dist / pinchDistance) * zoom);
      }
    }

  };

  /**
   * 
   * @param {*} newZoom 
   */
  const handleZoom = (e, newZoom) => {
    //e.stopPropagation();
    //e.preventDefault();
    updateXarrow();

    if (!isDragging) {
      setZoom(Math.max(Math.min(newZoom, MAX_ZOOM), MIN_ZOOM));
    }
  };

  const getTree = (level, index) => {
    return <div style={{height: `${getHeight(level) * 50 * zoom}px`,display: 'flex', flexDirection: 'row'}}>
      {
        level.nodes.map(element => {
          return <div style={{justifyItems: 'center'}}>
            <div id={element.id} style={{
              anchorName: `--${element.id}`,
              backgroundColor: 'green',
              width: `${10 * zoom}px`,
              margin: `${1 * zoom / 5}em`,
              height: `${10 * zoom}px`,

            }} />
            {getTree(element, index+1)}
          </div>
        })
      }
    </div>;
  }

  const getWidth = (level) => {
    let count = Math.max(level.nodes.length - 1, 0);
    level.nodes.forEach(element => {
      count += getWidth(element);
    });
    return count;
  }

  const getHeight = (level) => {
    let count = level.nodes.length > 0 ? 1 : 0;
    let dependantHeight = 0;

    level.nodes.forEach(element => {
      dependantHeight = Math.max(dependantHeight, getHeight(element)) ;
    });
    return count + dependantHeight;
  }

  return (
    <Xwrapper>
    <div ref={skillTreeRef}
      style={{ height: '100%', width: '100%', overflow: 'hidden' }}
      onMouseLeave={(e) => handleMouseUp(e)}
      onMouseDown={(e) => handleMouseDown(e)}
      onTouchStart={(e) => handleTouch(e, handleMouseDown)}
      onMouseUp={(e) => handleMouseUp(e)}
      onTouchEnd={(e) => handleTouch(e, handleMouseUp)}
      onMouseMove={(e) => handleMouseMove(e)}
      onTouchMove={(e) => handleTouch(e, handleMouseMove)}
      onWheel={(e) => handleZoom(e, zoom - e.deltaY * SCROLL_SENSITIVITY)}
    >
      <div style={{
        position: 'absolute',
        left: `${cameraOffset.x}px`,
        top: `${cameraOffset.y}px`,
        minWidth: `${(getWidth({nodes: [{id: '10', nodes: [{id: '20', nodes: []}, {id: '30', nodes: [{id: 40, nodes: []}]}]}]}) + 1) * 50 * zoom}px`,
        minHeight: `${getHeight({nodes: [{id: '10', nodes: [{id: '20', nodes: []}, {id: '30', nodes: [{id: 40, nodes: []}]}]}]}) * 50 * zoom}px `
      }}>
        { treeData.map(_ => <SkillNode index={0} ref={undefined} zoom={zoom} element={_}/>)}
      </div>
      {/* {[{}].map(_ => {
        return <div style={{
          position: 'absolute',
          minBlockSize: 'clamp(0.125rem, 0.036rem + 0.238vw, 0.25rem)',
          backgroundImage: 'linear-gradient(to bottom, black, black), linear-gradient(to right, black, black), linear-gradient(to bottom, black, black)',
          backgroundSize: '2px, 50% 2px, 50% 2px',
          backgroundPosition: 'center, top left, bottom right',
          backgroundRepeat: 'no-repeat',
          insetBlockStart: `anchor(${'--10'} center)`,
          insetBlockEnd: `anchor(${'--20'} center)`,
          insetInlineStart: `anchor(${'--10'} right)`,
          insetInlineEnd: `anchor(${'--20'} left)`,
        }} />;
      })} */}
    </div>
    </Xwrapper>
  );
}