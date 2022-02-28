import { combineReducers } from 'redux'
import MyReducer from './MyReducer'

export default combineReducers({
  User: MyReducer
})