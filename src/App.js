import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'
import { connect } from 'react-redux'
import logo from './logo.svg';
import Agendamentos from './components/agendamentos/Agendamentos'
import { Experiencias } from './components/experiencias/Experiencias'
import { Login } from './components/auth/login/Login'
import { SignUp } from './components/auth/signup/SignUp'
import './App.css'

export class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>AISGENDAMENTO V. 1.0 </h2>
          </div>
          <div>
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

export default connect()(App)
