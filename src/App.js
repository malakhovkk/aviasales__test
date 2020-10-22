import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './containers/Menu/Menu';
import Logo from './components/Logo';
import Vouchers from './containers/Vouchers/Vouchers';

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
