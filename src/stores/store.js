import { applyMiddleware, createStore } from 'redux'
import createLogger from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import rootReducer from '../reducers/root-reducer'

const logger = createLogger();
const middleware = [ ReduxThunk, logger]
const mainStore = createStore(rootReducer, {}, applyMiddleware(...middleware))


export default mainStore;
