import { SNACKBAR_SHOW, SNACKBAR_HIDE } from './actions';

const initialState = {
  isOpened: false,
  message: ''
};

const snackbar = (state = initialState, action) => {
  switch (action.type) {

    case SNACKBAR_SHOW:
      return Object.assign({}, state, {
        isOpened: true,
        message: action.message
      });

    case SNACKBAR_HIDE:
      return Object.assign({}, state, {
        isOpened: false,
        message: ''
      });

    default:
      return state;
  }
};

export default snackbar;
