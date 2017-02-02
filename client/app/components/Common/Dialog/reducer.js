import { DIALOG_SHOW, DIALOG_HIDE } from './actions';

const initialState = {
  isOpened: false,
  message: '',
  title: ''
};

const dialog= (state = initialState, action) => {
  switch (action.type) {

    case DIALOG_SHOW:
      return Object.assign({}, state, {
        isOpened: true,
        message: action.message,
        title: action.title
      });

    case DIALOG_HIDE:
      return Object.assign({}, state, {
        isOpened: false,
        message: '',
        title: ''
      });

    default:
      return state;
  }
};

export default dialog;
