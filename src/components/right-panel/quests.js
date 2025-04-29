import React, { useState } from 'react';
import "beercss";
import "material-dynamic-colors";

import { useRemoveQuestMutation, useGetQuestsQuery } from '../../redux/api';
/**
 * Base UI component for the Inventory.
 * 
 * @returns 
 */
export function Quests() {
  const [deleteConfirm, setDeleteConfirm] = useState('');
  //const { data, error, isLoading } = useGetQuestsQuery();
  //const [ removeQuest, { isLoading: isUpdating } ] =  useRemoveQuestMutation();
  const data = [{}, {}];

  const handleDelete = () => {
    // removeQuest(deleteConfirm);
    setDeleteConfirm('')
  }

  return (
    <ul class="list no-space" style={{height: '100%', width: '100%', alignSelf: 'start'}}>
      {
        data.map((_, i) =>
          <li key={i} style={{flex: '0'}} >
            <details>
              <summary class='horizontal'>
                <span>Quest Name</span>
                <button class="circle transparent" onClick={() => { }}>
                  <i>location_on</i>
                </button>
                <button class="circle transparent" onClick={() => setDeleteConfirm('id')}>
                  <i>delete</i>
                </button>
              </summary>
              <p>Details about the quest here</p>
            </details>
            <dialog class={`modal ${deleteConfirm !== '' ? 'active' : ''}`} >
              <h5>Modal</h5>
              <div>Some text here</div>
              <nav class="right-align no-space">
                <button class="transparent link" onClick={() => setDeleteConfirm('')}>Cancel</button>
                <button class="transparent link" onClick={() => handleDelete()}>Confirm</button>
              </nav>
            </dialog>
          </li>
        )
      }
    </ul>
  );
}