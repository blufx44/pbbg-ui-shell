import React, { useState } from 'react';
import "beercss";
import "material-dynamic-colors";
import { Inventory } from './inventory';
import { Quests } from './quests';
import { Actions } from './actions';
import { Skills } from './skills';
import { Character } from './character';

/**
 * Base UI component for the Inventory.
 * 
 * @returns 
 */
export function Menu() {
  const [active, setActive] = useState('Actions');

  return (
    <div style={{ display: 'flex', flexDirection: 'row-reverse', backgroundColor: 'Menu', height: '100%' }}>
      <div class="tabs vertical" style={{ height: '100%', justifyContent: 'start' }}>
        <a class={`vertical ${active === 'Actions' ? 'active' : ''}`} onClick={() => setActive('Actions')}>
          <img class="circle" src={''} />
          <caption>{'Actions'}</caption>
        </a>
        <a class={`vertical ${active === 'Inventory' ? 'active' : ''}`} onClick={() => setActive('Inventory')}>
          <img class="circle" src={''} />
          <caption>{'Inventory'}</caption>
        </a>
        <a class={`vertical ${active === 'Character' ? 'active' : ''}`} onClick={() => setActive('Character')}>
          <img class="circle" src={''} />
          <caption>{'Character'}</caption>
        </a>
        <a class={`vertical ${active === 'Skills' ? 'active' : ''}`} onClick={() => setActive('Skills')}>
          <img class="circle" src={''} />
          <caption>{'Skills'}</caption>
        </a>
        <a class={`vertical ${active === 'Quests' ? 'active' : ''}`} onClick={() => setActive('Quests')}>
          <img class="circle" src={''} />
          <caption>{'Quests'}</caption>
        </a>
      </div>
      <div class={`page padding right ${active === 'Actions' ? 'active' : ''}`} style={{ width: '100%' }}>
        <Actions />
      </div>
      <div class={`page padding right ${active === 'Inventory' ? 'active' : ''}`} style={{ width: '100%' }}>
        <Inventory />
      </div>
      <div class={`page padding right ${active === 'Character' ? 'active' : ''}`} style={{ width: '100%' }}>
        <Character />
      </div>
      <div class={`page padding right ${active === 'Skills' ? 'active' : ''}`} style={{ width: '100%' }}>
        <Skills />
      </div>
      <div class={`page padding right ${active === 'Quests' ? 'active' : ''}`} style={{ width: '100%' }}>
        <Quests />
      </div>
    </div >
  );
}