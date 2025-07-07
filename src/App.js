import logo from './logo.svg';
import "beercss";
import "material-dynamic-colors";
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';
import { Menu } from './components/right-panel/menu';
import { Header } from './components/header/header';
import { LeftMenu } from './components/left-panel/menu';
import { setModal } from './redux/ui-slice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        dispatch(setModal(false));
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div class="App" style={{display: 'flex', flexDirection: 'column'}} onClick={() => dispatch(setModal(false))}>
      <Header />
      <div class='responsive grid' style={{height: '100%', paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
      <LeftMenu ></LeftMenu>
        <div class={`s9`}>
          <div style={{ top: 0, left: 0, height: '100%', width: '100%' }}>
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
