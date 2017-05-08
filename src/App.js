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


  getUserData() {
    const { userToken } = this.props.authReducer;
    if (userToken) {
      console.log(userToken.user.getUserAttributes(function(error, result) {
        if (error) {
          console.log('errior -> ', error)
        }else {
          console.log('result ->', result)
        }

      }))
    }
  }
  render() {
    if (this.props.authReducer.userToken) {
      this.getUserData()
    }
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
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
