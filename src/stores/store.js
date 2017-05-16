import { compose, applyMiddleware, createStore } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import createLogger from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import rootReducer from '../reducers/root-reducer'

const logger = createLogger();
const middleware = [ ReduxThunk, logger]
const mainStore = createStore(rootReducer, {}, compose(applyMiddleware(...middleware)))


export default mainStore;
