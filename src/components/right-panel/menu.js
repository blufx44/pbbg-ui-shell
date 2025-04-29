import React, { useState } from 'react';
import "beercss";
import "material-dynamic-colors";
import { Inventory } from './inventory';
import { Quests } from './quests';
import { Settings } from './settings';
import { Actions } from './actions';

/**
 * Base UI component for the Inventory.
 * 
 * @returns 
 */
export function Menu() {
  const [active, setActive] = useState('Actions');

  return (
    <div style={{ display: 'flex', flexDirection: 'row-reverse', backgroundColor: 'Menu' }}>
      <div class="tabs vertical" style={{ height: '100%', justifyContent: 'start' }}>
        <a class={`vertical ${active === 'Actions' ? 'active' : ''}`} onClick={() => setActive('Actions')}>
          <img class="circle" src={''} />
          <caption>{'Actions'}</caption>
        </a>
        <a class={`vertical ${active === 'Inventory' ? 'active' : ''}`} onClick={() => setActive('Inventory')}>
          <img class="circle" src={''} />
          <caption>{'Inventory'}</caption>
        </a>
        <a class={`vertical ${active === 'Quests' ? 'active' : ''}`} onClick={() => setActive('Quests')}>
          <img class="circle" src={''} />
          <caption>{'Quests'}</caption>
        </a>
        <a class={`vertical ${active === 'Settings' ? 'active' : ''}`} onClick={() => setActive('Settings')}>
          <img class="circle" src={''} />
          <caption>{'Settings'}</caption>
        </a>
      </div>
      <div class={`page padding right ${active === 'Actions' ? 'active' : ''}`} style={{ width: '100%' }}>
        <Actions />
      </div>
      <div class={`page padding right ${active === 'Inventory' ? 'active' : ''}`} style={{ width: '100%' }}>
        <Inventory />
      </div>
      <div class={`page padding right ${active === 'Quests' ? 'active' : ''}`} style={{ width: '100%' }}>
        <Quests />
      </div>
      <div class={`page padding right ${active === 'Settings' ? 'active' : ''}`} style={{ width: '100%' }}>
        <Settings />
      </div>
    </div >
  );
}