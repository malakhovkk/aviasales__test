import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './containers/Menu';
import Logo from './containers/Logo';
import Vouchers from './containers/Vouchers';

function App() {
  return (
    <div className="main">
      <Logo/>
      <div className="content">
        <Menu/>
        <Vouchers/>
      </div>
    </div>
  );
}

export default App;
