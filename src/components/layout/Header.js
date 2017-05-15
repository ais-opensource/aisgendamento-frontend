import React from 'react'
import './Header.css'
import logo from './logo.svg';
import { logout } from '../auth/actions/auth-actions'

export class Header extends React.Component  {

  constructor(props) {
    super(props)

    this.renderUserData = this.renderUserData.bind(this)
  }
  renderUserData() {
    const { userData } = this.props;
    if (userData) {
      return (
        <div className="user-data">
          {userData.username}
        </div>
      )
    }
    return null
  }

  logout() {

  }

  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {this.renderUserData()}
        <div>AISGENDAMENTO V. 1.0 </div>
        <div className="menu">
          <a className="menu-item" href="/">agendamentos </a>
          <a className="menu-item" href="/experiencias">experiencias</a>
          {this.props.userData ?
            <a className="menu-item" href="" onClick={this.logout}>logout</a> :
            <a className="menu-item" href="/login">login</a>
          }
        </div>
      </div>
    )
  }
}
