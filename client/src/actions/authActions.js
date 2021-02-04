import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  // LOGIN_SUCCESS,
  // LOGIN_FAIL,
  // LOGOUT,
  AUTH_ERROR,
  USER_LOADED
} from './types';
import setAuthToken from '../utils/setAuthToken';

import API from '../utils/API';

// loads user

export const loadUser = () => async dispatch => {
  if (localStorage.token) setAuthToken(localStorage.token);

  try {
    const res = await API.get('/api/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }

}

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

// login user

export const login = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const res = await axios.post(`${api}/api/auth/login`, formData, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    loadUser();
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.msg
    });
  }
};

// logout

export const logout = () => async dispatch => {
  dispatch({
    type: LOGOUT
  });
};
