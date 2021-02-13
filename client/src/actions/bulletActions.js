const { 
  SET_BULLET_LOADING,
  GET_BULLETS,
  ADD_BULLET,
  UPDATE_BULLET,
  DELETE_BULLET,
  SET_CURRENT,
  CLEAR_CURRENT,
  BULLETS_ERROR,
  SET_UPDATE
} = require("./types");

const API = require('../utils/API');
const { setAuthToken } = require('../utils/API');

