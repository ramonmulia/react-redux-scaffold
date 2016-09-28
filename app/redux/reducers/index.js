import { combineReducers } from 'redux'
import userReducer from './userReducer'
import loadReducer from './loadReducer'

const rootReducer = combineReducers({
  user: userReducer,
  load: loadReducer
})

export default rootReducer
