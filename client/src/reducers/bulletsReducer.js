import {
  SET_BULLET_LOADING,
  GET_BULLETS,
  ADD_BULLET,
  UPDATE_BULLET,
  DELETE_BULLET,
  SET_CURRENT,
  BULLETS_ERROR,
  SET_UPDATE,
  CLEAR_CURRENT,
} from '../actions/types';

const initialState = {
  bullets: null,
  current: null,
  loading: false,
  error: null,
  update: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BULLETS:
      return {
        ...state,
        loading: false,
        bullets: action.payload,
      };
    case ADD_BULLET:
      return {
        ...state,
        bullets: [...state.bullets, action.payload],
      };
    case UPDATE_BULLET:
      return {
        ...state,
        bullets: state.bullets.map((bullet) =>
          bullet.id === action.payload.id ? action.payload : bullet
        ),
        update: false,
        current: null,
      };
    case DELETE_BULLET:
      return {
        ...state,
        bullets: state.bullets.filter((bullet) => bullet.id !== action.payload),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
        update: false,
      };
    case SET_BULLET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_UPDATE:
      return {
        ...state,
        update: true,
        current: action.payload,
      };
    case BULLETS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
