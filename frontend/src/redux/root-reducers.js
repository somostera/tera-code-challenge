import { combineReducers } from 'redux'
import shelfReducers from './shelf/reducers'
import themeReducers from './theme/reducers'

export default combineReducers(Object.assign({}, shelfReducers, themeReducers))