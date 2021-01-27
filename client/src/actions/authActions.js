import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  // LOGIN_SUCCESS,
  // LOGIN_FAIL,
  // LOGOUT,
  // USER_LOADED,
  // AUTH_ERROR
} from './types';

import API from '../utils/API';

// register user

export const registerUser = formData => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await API.post('/api/auth/register', formData, config)
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    })
    
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.toString(),
    })
  }
}
