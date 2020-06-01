import {
  SET_BULLET_LOADING,
  GET_BULLETS,
  ADD_BULLET,
  UPDATE_BULLET,
  DELETE_BULLET,
  SET_CURRENT,
  CLEAR_CURRENT,
  BULLETS_ERROR,
  SET_UPDATE,
} from './types';

import API from '../utils/API';

// set bullet loading

const setBulletLoading = () => {
  return {
    type: SET_BULLET_LOADING,
  };
};

// load all bullets (temporarily all)

export const getBullets = () => async (dispatch) => {
  try {
    dispatch(setBulletLoading());
    const res = await API.get('/bullets');
    dispatch({
      type: GET_BULLETS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: BULLETS_ERROR,
      payload: err.toString(),
    });
  }
};

// add bullet

export const addBullet = (bullet) => async (dispatch) => {
  try {
    const res = await API.post(`/bullets`, bullet);
    dispatch({
      type: ADD_BULLET,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: BULLETS_ERROR,
      payload: err.toString(),
    });
  }
};

// update bullet by id

export const updateBullet = (bullet) => async (dispatch) => {
  try {
    const res = await API.put(`/bullets/${bullet.id}`, bullet);
    dispatch({
      type: UPDATE_BULLET,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: BULLETS_ERROR,
      payload: err.toString(),
    });
  }
};

// delete bullet by id

export const deleteBullet = (id) => async (dispatch) => {
  try {
    await API.delete(`/bullets/${id}`);
    dispatch({
      type: DELETE_BULLET,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: BULLETS_ERROR,
      payload: err.toString(),
    });
  }
};

// set current bullet

export const setCurrentBullet = (bullet) => async (dispatch) => {
  try {
    dispatch({
      type: SET_CURRENT,
      payload: bullet,
    });
  } catch (err) {
    dispatch({
      type: BULLETS_ERROR,
      payload: err.toString(),
    });
  }
};

// setup edit form

export const editBullet = (bullet) => (dispatch) => {
  dispatch({
    type: SET_UPDATE,
    payload: bullet,
  });
};

// cancel update

export const cancelUpdate = () => (dispatch) => {
  dispatch({
    type: CLEAR_CURRENT,
  });
};
