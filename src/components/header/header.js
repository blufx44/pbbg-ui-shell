import "beercss";
import "material-dynamic-colors";
import React, { useState } from 'react';

import { Chat } from './chat';

export function Header() {
  const [chatOpen, setChatOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header class='transparent'>
      <nav>
        <div class='max grid'>
          <div class='s1 horizontal'>
          </div>
          <div class='s8 horizontal' style={{justifyContent: 'end'}}>
            <div class="max center-align horizontal">
              <caption style={{ alignContent: 'center' }}>chat text</caption>
              <button class="circle transparent" onClick={() => setChatOpen(true)}>
                <i class='small'>chat</i>
              </button>
            </div>
          </div>
          <div class='s3'>
            <button class="circle transparent" style={{ float: 'right' }} onClick={() => setMenuOpen(true)}>
              <i class="extra">account_circle</i>
              <menu class={menuOpen === true ? 'active' : ''}>
                <li onClick={(e) => { e.stopPropagation(); setMenuOpen(false) }}>Item 1</li>
                <li onClick={(e) => { e.stopPropagation(); setMenuOpen(false) }}>Item 2</li>
                <li onClick={(e) => { e.stopPropagation(); setMenuOpen(false) }}>Item 3</li>
              </menu>
            </button>
          </div>
        </div>
      </nav>
      <Chat isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </header>
  );
}