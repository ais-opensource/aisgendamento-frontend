import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'
import { connect } from 'react-redux'
import Agendamentos from './components/agendamentos/Agendamentos'
import { Experiencias } from './components/experiencias/Experiencias'
import  Login  from './components/auth/login/Login'
import { SignUp } from './components/auth/signup/SignUp'
import { Header } from './components/layout/Header'
import { getCurrentUser } from './components/auth/actions/auth-actions'

import './App.css'

export class App extends Component {

  constructor(props) {
    super(props)
    this.getUserData = this.getUserData.bind(this)
  }

  getUserData() {
    const { userToken } = this.props.authReducer;

    if (userToken && userToken.user) {
      return {
        username: userToken.user.username,
      }
    }
    return null
  }


  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Header userData={this.getUserData()}/>
          <div className="main">
            <Route exact path="/" component={Agendamentos} />
            <Route path="/login" component={Login} />
            <Route path="/registrar-se" component={SignUp} />
            <Route path="/experiencias" component={Experiencias} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(store => {
  return {
    authReducer: store.authReducer,
  }
})(App)
