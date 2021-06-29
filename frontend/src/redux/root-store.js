import { createStore, applyMiddleware } from 'redux'
import reduxMulti from 'redux-multi'
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'

import rootReducers from './root-reducers'


const middlewares = [
  reduxMulti,
  reduxThunk,
  reduxPromise
]

const store = applyMiddleware(...middlewares)(createStore)(rootReducers)

export default store;