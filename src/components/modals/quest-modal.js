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
export function QuestModal(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setModal(true));
  }, []);

  return (
    <dialog class={`modal active`} onClick={(event) => { event.stopPropagation() }} >
      <h5>{props.name}</h5>
      <div>{props.description}</div>
      <ul class="list">
        {props.tasks.map(_ => {
          return (
            <li>
              {_.status === 'complete' && <i>task_alt</i>}
              {_.status === 'active' && <i>pending</i>}
              {_.details}
            </li>
          )
        })}
      </ul>
      <nav class="right-align no-space">
        <button class="transparent link" onClick={() => dispatch(setModal(false))}>Close</button>
      </nav>
    </dialog>
  );
}