import { combineReducers } from 'redux';

import authReducer from './authReducer';
import bulletsReducer from './bulletsReducer';

export default combineReducers({
  auth: authReducer,
  bullet: bulletsReducer,
});
