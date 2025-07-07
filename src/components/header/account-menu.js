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
export function AccountMenu(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setModal(true));
  }, []);

  const handleClick = (e, option) => {
    e.stopPropagation();
    props.onClick(option);
  }

  return (
    <menu class={'left no-wrap active'}>
      <li onClick={(e) => handleClick(e, 'account')}>Account</li>
      <li onClick={(e) => handleClick(e, 'settings')}>Settings</li>
      <li onClick={(e) => handleClick(e, 'logout')}>Logout</li>
    </menu>
  );
}