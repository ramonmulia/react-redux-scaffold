import { combineReducers } from 'redux';
import userReducer from './userReducer';
import loadReducer from './loadReducer';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  user: userReducer,
  load: loadReducer,
  routing: routerReducer
});

export default rootReducer;
