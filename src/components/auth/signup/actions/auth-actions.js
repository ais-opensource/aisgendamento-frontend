import {
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUser
} from 'amazon-cognito-identity-js'
import config from '../../../config'

export function signIn(username, password) {
  const authenticationData = {
    Username: username,
    Password: password,
  }
  const userPool = new CognitoUserPool({
    UserPoolId: config.cognito.USER_POOL_ID,
    ClientId: config.cognito.APP_CLIENT_ID
  });
  const user = new CognitoUser({
    Username: authenticationData.Username,
    Pool: userPool
  })
  const authenticationDetails = new AuthenticationDetails(authenticationData);
  return new Promise((resolve, reject) => (
    user.authenticateUser(authenticationDetails, {
      onSuccess: (result) => resolve(result.getIdToken().getJwtToken()),
      onFailure: (error) => reject(`an error happened getting your token, ${error}`),
    })
  )).then((token) => { type: 'USER_TOKEN', payload: token})
    .catch((error) => { type: 'SIGN_IN_ERROR', payload: error})
}

export function signUp(username, password) {
  const userPool = new CognitoUserPool({
    UserPoolId: config.cognito.USER_POOL_ID,
    ClientId: config.cognito.APP_CLIENT_ID
  });
  const attributeEmail = new CognitoUserAttribute({ Name : 'email', Value : username });
  return new Promise((resolve, reject) => (
    userPool.signUp(username, password, [attributeEmail], null, (err, result) => {
      if (err) {
        reject(err)
        return
      }
    resolve(result.user)
   })
 )).then((user) => { type: 'USER', payload: user})
   .catch((error) => { type: 'SIGN_UP_ERROR', payload: error})
}

export function confirm(confirmationCode) {
  const userPool = new CognitoUserPool({
    UserPoolId: config.cognito.USER_POOL_ID,
    ClientId: config.cognito.APP_CLIENT_ID
  })
  const currentUser = userPool.getCurrentUser()
  return new Promise((resolve, reject) => {
    currentUser.confirmRegistration(confirmationCode, true, (error, result) => {
      if (error) {
        reject(error)
        return
      }
      resolve(result)
    })
  }).then((confirmation) => { type: 'USER_CONFIRMED', payload: confirmation })
    .catch((error) => { type: 'USER_CONFIRMED_ERROR', payload: error })
}
