import React from 'react'
import { connect } from 'react-redux'
import { signIn } from '../actions/auth-actions'
import '../auth.css'

export class Login extends React.Component {

  constructor(props) {
    super(props)

  }

  onSubmit(event) {
    event.preventDefault();
    const signinData = {
      username: event.target.email.value,
      password: event.target.password.value,
    }
    this.props.dispatch(signIn(signinData.username, signinData.password, this.props.dispatch))
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



export default connect(store => {
  return {
    authReducer: store.authReducer
  }
})(Login)
