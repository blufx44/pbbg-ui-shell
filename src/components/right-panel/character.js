import React, { useEffect, useRef, useState } from 'react';
import "beercss";
import "material-dynamic-colors";

import { useRemoveQuestMutation, useGetQuestsQuery } from '../../redux/api';
/**
 * Base UI component for the Inventory.
 * 
 * @returns 
 */
export function Character() {
  const [deleteConfirm, setDeleteConfirm] = useState('');
  const canvasRef = useRef(undefined);

  //const { data, error, isLoading } = useGetQuestsQuery();
  //const [ removeQuest, { isLoading: isUpdating } ] =  useRemoveQuestMutation();
  const data = [{ property: 'HP', value: 50, max: 100 }, { property: 'Defense', value: 100 }, { property: 'Attack', value: 45 }];

  useEffect(() => {
    if (canvasRef !== undefined) {
      const ctx = canvasRef.current.getContext('2d');
      ctx.fillStyle = 'red';
      ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  }, [canvasRef]);


  const handleDelete = () => {
    // removeQuest(deleteConfirm);
    setDeleteConfirm('')
  }

  // Examples
  // Character Image
  // Equipment slots [{type: Head, max: 1, items[{}]}]
  // -> option to unequip item
  // Stats [{name: Health, max: 100, value 95}, {name: speed, max: undefined, value: 10}]

  return (
    <div>
      <div>
        <canvas ref={canvasRef}></canvas>
        <div class="grid">
          {data.map((_) => {

            if (_.max) {
              return <div class="s6" style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{marginRight: '0.5em'}}>{_.property}:</div>
                <article style={{padding: 0, width: '100%', marginBlockStart: 0}}>
                  <progress class="max orange-text" value={_.value} max={_.max}></progress>
                  <div>{_.value}/{_.max}</div>
                </article>
              </div>
            } else {
              return <div class="s6" style={{textAlign: 'left'}}>{_.property}: {_.value}</div>
            }
          })}
        </div>
      </div>

    </div>
  );
}