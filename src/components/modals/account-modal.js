import React, { useEffect, useState } from 'react';
import "beercss";
import "material-dynamic-colors";
import { useDispatch } from 'react-redux';

import { setModal } from '../../redux/ui-slice';

/**
 * Base UI component for the Inventory.
 * 
 * @returns 
 */
export function AccountModal(props) {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState(props.name);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  useEffect(() => {
    dispatch(setModal(true));
  }, []);

  const handleRegister = async () => {
    let result = true; //await RegisterGuest(props.name, userName, newPassword);
    if (result) {
      dispatch(setModal(false));
    }
  };

  const handleChange = async () => {
    let result = true; // await ChangePassword(props.name, password, newPassword);
    if (result) {
      dispatch(setModal(false));
    }
  };

  return (
    <dialog class={`modal active`} onClick={(event) => { event.stopPropagation() }} >
      <div style={{ height: '100%', width: '100%', alignSelf: 'start' }}>
        {props.isGuest === true &&
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1em' }}>
            <h3>Register Account</h3>
            <nav class='padding' style={{justifyContent: 'center'}}>
              <div class={`field label border small`}>
                <input type="text" value={userName} onChange={(e) => { setUserName(e.target.value) }} />
                <label>User Name</label>
                <div></div>
              </div>
            </nav>
            <nav class='padding' style={{ display: 'flex', flexDirection: 'column' }}>
              <div class={`field label border small`}>
                <input type="password" value={newPassword} onChange={(e) => { setNewPassword(e.target.value) }} />
                <label>Password</label>
                <div></div>
              </div>
              <div class={`field label ${confirmNewPassword !== newPassword ? 'invalid' : ''} border small`}>
                <input type="password" value={confirmNewPassword} onChange={(e) => { setConfirmNewPassword(e.target.value) }} />
                <label>Confirm Password</label>
                <div></div>
                {confirmNewPassword !== newPassword && <span class="error">Passwords do not match</span>}
              </div>
            </nav>
            <nav class="right-align no-space">
              <button class="transparent link" disabled={newPassword === '' || newPassword !== confirmNewPassword} onClick={async () => await handleRegister()}>Register</button>
              <button class="transparent link" onClick={() => dispatch(setModal(false))}>Close</button>
            </nav>
          </div>
        }
        {props.isGuest === false &&
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1em' }}>
            <h3>Change Password</h3>
            <nav class='padding' style={{justifyContent: 'center'}}>
              <div class={`field label border small`}>
                <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <label>Current Password</label>
                <div></div>
              </div>
            </nav>
            <nav class='padding' style={{ display: 'flex', flexDirection: 'column' }}>
              <div class={`field label border small`}>
                <input type="password" value={newPassword} onChange={(e) => { setNewPassword(e.target.value) }} />
                <label>New Password</label>
                <div></div>
              </div>
              <div class={`field label ${confirmNewPassword !== newPassword ? 'invalid' : ''} border small`}>
                <input type="password" value={confirmNewPassword} onChange={(e) => { setConfirmNewPassword(e.target.value) }} />
                <label>Confirm New Password</label>
                <div></div>
                {confirmNewPassword !== newPassword && <span class="error">Passwords do not match</span>}
              </div>
            </nav>
            <nav class="right-align no-space">
              <button class="transparent link" disabled={newPassword === '' || newPassword !== confirmNewPassword} onClick={async () => await handleChange()}>Update</button>
              <button class="transparent link" onClick={() => dispatch(setModal(false))}>Close</button>
            </nav>
          </div>
        }
      </div>
    </dialog>
  );
}