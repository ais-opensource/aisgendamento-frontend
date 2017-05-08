import { combineReducers } from 'redux'
import experienciaReducer from './experiencia-reducer';
import authReducer from './auth-reducer'

const rootReducer = combineReducers({
  experienciaReducer,
  authReducer,
})

export default rootReducer;
