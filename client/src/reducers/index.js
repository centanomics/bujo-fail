import { combineReducers } from 'redux';

import bulletsReducer from './bulletsReducer';

export default combineReducers({
  bullet: bulletsReducer,
});
