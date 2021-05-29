import { combineReducers } from 'redux'
import marketingReducers from './marketing/reducers'
import themeReducers from './theme/reducers'

export default combineReducers(Object.assign({}, marketingReducers, themeReducers))