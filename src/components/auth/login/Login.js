import React from 'react'

import '../auth.css'




export class Login extends React.Component {

  constructor(props) {
    super(props)

  }

  onSubmit(event) {
    event.preventDefault();

  }

  render() {
    return (
      <div className='login-container'>
        <div className="title">Login</div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="form-item">
            <input type='text' className='input-form' name='email' placeholder="e-mail"/>
          </div>
          <div className="form-item">
            <input type='password' className='input-form' name='password' placeholder="senha"/>
          </div>
          <div className='form-item'>
            <input type='submit' className='submit-form' value='Entrar' />
          </div>
        </form>
      </div>
    )
  }
}
