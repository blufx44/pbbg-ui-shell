import React, { useEffect } from 'react';
import "beercss";
import "material-dynamic-colors";
import { useDispatch } from 'react-redux';
import { setModal } from '../../redux/ui-slice'; 

/**
 * Base UI component for the Inventory.
 * 
 * @returns 
 */
export function DeleteConfirmModal(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setModal(true));
  }, []);

  const handleConfirmation = (confirmation) => {
    dispatch(setModal(false));
    props.onConfirmation(confirmation);
  }

  return (
    <dialog class={`modal active`} onClick={(event) => {event.stopPropagation()}} >
      <h5>Do you want to abandon the {props.name}?</h5>
      <nav class="right-align no-space">
        <button class="transparent link" onClick={() => handleConfirmation(true)}>Yes</button>
        <button class="transparent link" onClick={() => handleConfirmation(false)}>No</button>
      </nav>
    </dialog>
  );
}