import {
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUser,
  CognitoUserAttribute,
} from 'amazon-cognito-identity-js'
import config from '../../../config'

const userPool = new CognitoUserPool({
  UserPoolId: config.cognito.USER_POOL_ID,
  ClientId: config.cognito.APP_CLIENT_ID
});

export function signIn(username, password, dispatch) {
  const authenticationData = {
    Username: username,
    Password: password,
  }

  const user = new CognitoUser({
    Username: authenticationData.Username,
    Pool: userPool
  })
  const authenticationDetails = new AuthenticationDetails(authenticationData);
  let call = new Promise((resolve, reject) => (
    user.authenticateUser(authenticationDetails, {
      onSuccess: (result) => resolve(result.getIdToken().getJwtToken()),
      onFailure: (error) => reject(`an error happened getting your token, ${error}`),
    })
  )).then((token) => {
    dispatch(signInDone({
      token: token,
      user: user,
    }))
  }).catch((error) => {
    dispatch({ type: 'SIGN_IN_ERROR', payload: error })
  })
  return {
    type: 'USER_TOKEN_PENDING'
  }
}

function signInDone(userData) {
  return {
    type: 'USER_TOKEN',
    payload: userData
  }
}

export function signUp(username, password) {

  const attributeEmail = new CognitoUserAttribute({ Name : 'email', Value : username });
  return new Promise((resolve, reject) => (
    userPool.signUp(username, password, [attributeEmail], null, (err, result) => {
      if (err) {
        reject(err)
        return
      }
    resolve(result)
   })
 )).then((user) => {
    return {
      type: 'USER',
      payload: user
    }
  })
  .catch((error) => {
    return {
      type: 'SIGN_UP_ERROR',
      payload: error,
    }
  })
}

export function confirm(user, confirmationCode) {

  return new Promise((resolve, reject) => {
    user.confirmRegistration(confirmationCode, true, (error, result) => {
      if (error) {
        reject(error)
        return
      }
      resolve(result)
    })
  }).then((confirmation) => {
    return {
      type: 'USER_CONFIRMED',
      payload: confirmation
    }
  })
}

export function getCurrentUser(username, dispatch) {
  console.log('get current user ->', username)
  const userData = {
    Username: username,
    Pool: userPool,
  }
  dispatch(getCurrentUserDone(new CognitoUser(userData)))
  return {
    type: 'USER_DATA_PENDING',
  }
}

function getCurrentUserDone(userAttributes) {
  return {
    type: 'USER_DATA',
    payload: userAttributes,
  }
}

function getCurrentUserError(error) {
  return {
    type: 'USER_ERROR',
    payload: error,
  }
}

export function logout() {
  return {
    type: 'USER_DATA',
    payload: null
  }
}
