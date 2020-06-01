import {
  SET_BULLET_LOADING,
  GET_BULLETS,
  ADD_BULLET,
  UPDATE_BULLET,
  DELETE_BULLET,
  SET_CURRENT,
  BULLETS_ERROR,
} from '../actions/types';

const initialState = {
  bullets: null,
  current: null,
  loading: false,
  error: null,
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
    case SET_BULLET_LOADING:
      return {
        ...state,
        loading: true,
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
