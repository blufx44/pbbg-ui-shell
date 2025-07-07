import React, { useState } from 'react';
import "beercss";
import "material-dynamic-colors";

import { useRemoveQuestMutation, useGetQuestsQuery } from '../../redux/api';
/**
 * Base UI component for the Inventory.
 * 
 * @returns 
 */
export function Skills() {
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
      }
    </ul>
  );
}