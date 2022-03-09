import { combineReducers } from 'redux'
import MyReducer from './MyReducer';
import {ProfileReducer}  from "./ProfileReducer";

 const rootReducer = combineReducers({
  MyReducer,
  ProfileReducer


})
export default rootReducer;