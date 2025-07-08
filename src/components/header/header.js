import "beercss";
import "material-dynamic-colors";
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Chat } from './chat';
import { SettingsModal } from "../modals/settings-modal";
import { setModal, setMapOpen, setMoveDPad } from '../../redux/ui-slice';
import { AccountMenu } from "./account-menu";
import { AccountModal } from "../modals/account-modal";

export function Header() {
  const [chatOpen, setChatOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const globalOpen = useSelector((state) => state['ui'].globalOpen);
  const [accountModalOpen, setAccountModalOpen] = useState(false);
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);
  const [preventOverride, setPreventOverride] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!globalOpen && !preventOverride) {
      setAccountModalOpen(false);
      setSettingsModalOpen(false);
      dispatch(setMoveDPad(false));
      setMenuOpen(false);
    }

    setPreventOverride(false);
  }, [globalOpen]);

  const handleMenuSelection = (option) => {
    setMenuOpen(false);
    if (option === 'logout') {
      return;
    } else if (option === 'account') {
      setAccountModalOpen(true);
    }
    else {
      setSettingsModalOpen(true);
    }
  };

  const handleMenuOpen = (e) => {
    e.stopPropagation();
    dispatch(setModal(false));

    if (!menuOpen) {
      setPreventOverride(true);
      setAccountModalOpen(false);
      setSettingsModalOpen(false);
      dispatch(setMoveDPad(false));
    }

    setMenuOpen(!menuOpen);
  };

  return (
    <header class='transparent'>
      <nav>
        <div class='max grid'>
          <div class='s1 horizontal'>
            <button class="circle transparent" onClick={() => dispatch(setMapOpen())}>
              <i>map</i>
            </button>
          </div>
          <div class='s8 horizontal' style={{ justifyContent: 'end' }}>
            <div class="max center-align horizontal">
              <caption style={{ alignContent: 'center' }}>chat text</caption>
              <button class="circle transparent" onClick={() => setChatOpen(true)}>
                <i class='small'>chat</i>
              </button>
            </div>
          </div>
          <div class='s3'>
            <button class="circle transparent" style={{ float: 'right' }} onClick={(e) => handleMenuOpen(e)}>
              <i class="extra">account_circle</i>
              {(menuOpen) && <AccountMenu onClick={(option) => handleMenuSelection(option)} />}
            </button>
          </div>
        </div>
      </nav>
      <Chat isOpen={chatOpen} onClose={() => setChatOpen(false)} />
      {settingsModalOpen && <SettingsModal />}
      {accountModalOpen && <AccountModal />}
    </header>
  );
}