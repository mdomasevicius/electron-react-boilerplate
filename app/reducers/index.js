// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import items from './item-reducers';

const rootReducer = combineReducers({
  counter,
  items,
  routing
});

export default rootReducer;
