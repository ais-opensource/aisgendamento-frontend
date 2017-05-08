import React from 'react'
import config from '../../../config'

import '../auth.css'

//Move everything to Actions...

export class SignUp extends React.Component {

  onSubmit(event) {
    event.preventDefault();

  }
  render() {
    return (
      <div className='login-container'>
        <div className="title">Registre-se</div>
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
