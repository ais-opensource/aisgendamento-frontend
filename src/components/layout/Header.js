import React from 'react'
import './Header.css'
import logo from './logo.svg';
export class Header extends React.Component  {

  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>AISGENDAMENTO V. 1.0 </h2>
        <div className="menu">
          <a className="menu-item" href="/">agendamentos </a>
          <a className="menu-item" href="/experiencias">experiencias</a>
          <a className="menu-item" href="/login">login</a>
        </div>
      </div>
    )
  }
}
