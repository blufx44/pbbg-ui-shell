import React, { useState, useEffect } from 'react';
import "beercss";
import "material-dynamic-colors";
import { useSelector } from 'react-redux';

import { useRemoveQuestMutation, useGetQuestsQuery } from '../../redux/api';
import { QuestModal } from '../modals/quest-modal';
import { DeleteConfirmModal } from '../modals/delete-confim-modal';

/**
 * Base UI component for the Inventory.
 * 
 * @returns 
 */
export function Quests() {
  const globalOpen = useSelector((state) => state['ui'].globalOpen);
  const [selectedQuest, setSelectedQuest] = useState(undefined);
  const [deleteConfirm, setDeleteConfirm] = useState(undefined);
  //const { data, error, isLoading } = useGetQuestsQuery();
  //const [ removeQuest, { isLoading: isUpdating } ] =  useRemoveQuestMutation();
  const data = [
    {
      id: 1,
      name: 'Dragon Quest',
      description: 'This is the description of the quest.',
      tasks: [
        { details: 'Scream Leroy Jenkins', status: 'complete', location: '' },
        { details: 'Run into the cave by yourself', status: 'active', location: '' },
        { details: 'Get your whole team killed', status: '', location: '' },
        { details: 'Eat fried chicken', status: '', location: '' },
      ]
    },
    {
      id: 2,
      name: 'Generic Quest',
      description: 'This is the description of the quest.',
      tasks: [
        { details: 'Do the first step', status: 'active', location: '' },
        { details: 'Do the second step', status: '', location: '' },
        { details: 'Do the third step', status: '', location: '' },
        { details: 'Do the fourth step', status: '', location: '' },
      ]
    },];

  useEffect(() => {
    if (!globalOpen) {
      setSelectedQuest(undefined);
      setDeleteConfirm(undefined);
    }
  }, [globalOpen]);

  const handleDeleteConfirmation = (confirmDelete) => {
    if (confirmDelete) {
      // removeQuest(deleteConfirm);
    }
    setDeleteConfirm(undefined)
  }

  const handleLocationClick = (e, quest) => {
    e.stopPropagation();
  }

  const handleDeleteClick = (e, quest) => {
    e.stopPropagation();
    setSelectedQuest(undefined);
    setDeleteConfirm(quest)
  }

  const handleSelect = (e, quest) => {
    e.stopPropagation();
    setDeleteConfirm(undefined);
    setSelectedQuest(quest);
  }

  return (
    <div>
      <ul class="list no-space" style={{ height: '100%', width: '100%', alignSelf: 'start' }}>
        {
          data.map((_, i) =>
            <li key={i} style={{ flex: '0' }} onClick={(e) => handleSelect(e, _)}>
              <div class='horizontal'>
                <span style={{ alignContent: 'center' }}>{_.name}</span>
                <div>
                  <button class="circle transparent" onClick={(e) => handleLocationClick(e, _)}>
                    <i>location_on</i>
                  </button>
                  <button class="circle transparent" onClick={(e) => handleDeleteClick(e, _)}>
                    <i>delete</i>
                  </button>
                </div>
              </div>
            </li>
          )
        }
      </ul>
      {(selectedQuest !== undefined) && <QuestModal name={selectedQuest.name} description={selectedQuest.description} tasks={selectedQuest.tasks} />}
      {(deleteConfirm !== undefined) && <DeleteConfirmModal name={deleteConfirm.name} onConfirmation={(value) => handleDeleteConfirmation(value)} />}
    </div>
  );
}