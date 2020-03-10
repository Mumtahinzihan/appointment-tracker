import React from 'react';
import ProcessBar from './ProcessBar/ProcessBar';
import SideBarComponent from './Side-Bar/SideBarComponent.js';
import Customer from './Customer/Customer';
import Information from './Information/Information';
import ColorIcons from './ColorIcons/ColorIcons';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <SideBarComponent />
        <div className='content'>
          <Information />
          <ProcessBar />
          <div className="detail">
            <h4>Detail topic break down</h4>
            <ColorIcons />
            <Customer />
          </div>
        </div>
      </main>
    </div>
  );
}


export default App;
