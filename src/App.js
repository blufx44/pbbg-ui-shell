import logo from './logo.svg';
import "beercss";
import "material-dynamic-colors";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { Menu } from './components/right-panel/menu';
import { Header } from './components/header/header';
import { LeftMenu } from './components/left-panel/menu';
import { setModal } from './redux/ui-slice';

function App() {
  const dispatch = useDispatch();
  const isMenuLeft = useSelector((state) => state['ui'].isMenuLeft);

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
    <div class="App" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }} onClick={() => dispatch(setModal(false))}>
      <Header />
      <div class='responsive grid' style={{ height: '100%', paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em' }}>
        <LeftMenu />
        {isMenuLeft && <div class='s3'>
          <Menu />
        </div>}
        <div class={`s9`}>
          <div style={{ top: 0, left: 0, height: '100%', width: '100%' }}>
            <canvas width={'100%'} ></canvas>
          </div>
        </div>
        {!isMenuLeft && <div class='s3'>
          <Menu />
        </div>}
      </div>
    </div >
  );
}

export default App;
