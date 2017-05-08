const initialState = {
  userToken: null,
  currentUser: null,
  loading: false,
  userAttributes: null,
}


const authReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'USER_TOKEN_PENDING':
      return {
        ...state,
        loading: true,
      }
    case 'USER_TOKEN':
      return {
        ...state,
        userToken: action.payload
      }
    case 'USER_DATA':
      return {
        ...state,
        userAttributes: action.payload
      }
    case 'SIGN_UP_ERROR':
      return {
        ...state,
        error: action.payload
      }
    case 'SIGN_IN_ERROR':
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}


export default authReducer
