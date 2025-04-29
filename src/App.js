import logo from './logo.svg';
import "beercss";
import "material-dynamic-colors";
import React from 'react';

import './App.css';
import { Menu } from './components/right-panel/menu';
import { Header } from './components/header/header';
import { LeftMenu } from './components/left-panel/menu';

function App() {
  return (
    <div class="App">
      <Header />
      <LeftMenu ></LeftMenu>
      <div class='responsive grid'>
      <div class={`s9`}>
      <div style={{ top: 0, left: 0, height: 'inherit', width: 'inherit' }}>
      <canvas width={'100%'} ></canvas>
    </div>
      </div>
      <div class='s3'>
        <Menu />
      </div>
    </div>
    </div >
  );
}

export default App;
