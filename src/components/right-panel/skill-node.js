import React, { useRef, useState, useEffect } from 'react';
import "beercss";
import "material-dynamic-colors";
import Xarrow from "react-xarrows";

/**
 * Base UI component for the Inventory.
 * 
 * @returns 
 */
export function SkillNode(props) {
  const [height, setHeight] = useState(0);
  const [line, setLine] = useState(undefined);
  const nodeRef = useRef(undefined);

  useEffect(() => {
    setHeight(getHeight(props.element.nodes));
    if (props.ref !== undefined && nodeRef !== undefined) {
      setLine(<Xarrow
        key={props.ref.current.id + nodeRef.current.id}
        start={props.ref}
        end={nodeRef}
        headSize={0}
      />);
    }
  }, []);

  useEffect(() => {
    setHeight(getHeight(props.element.nodes));
  }, [props.zoom]);

  const getHeight = (nodes) => {
    let count = nodes.length > 0 ? 1 : 0;
    let dependantHeight = 0;

    nodes.forEach(element => {
      dependantHeight = Math.max(dependantHeight, getHeight(element.nodes));
    });
    return (count + dependantHeight);
  }

  return (
    <div style={{ height: `${height * 50 * props.zoom}px`, display: 'flex', flexDirection: 'row' }}>
      <div key={props.element.id} style={{ justifyItems: 'center' }}>
        <div id={props.element.id}
          ref={nodeRef}
          style={{
            backgroundColor: 'green',
            width: `${10 * props.zoom}px`,
            margin: `${1 * props.zoom / 5}em`,
            height: `${10 * props.zoom}px`,
          }} />
        {props.element.nodes.length > 0 &&
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {
              props.element.nodes.map(node =>
                <SkillNode key={node.id} index={props.index + 1} zoom={props.zoom} ref={nodeRef} element={node} />
              )
            }
          </div>
        }
      </div>
      {
        line !== undefined && line
      }
    </div>
  );
}