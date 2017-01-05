import { USERS_SET, USERS_SELECT, USERS_SELECT_CLEAR } from './actions';

const initialState = {
  users: [],
  selectedUsers: []
};

const users = (state = initialState, action) => {
  switch (action.type) {

    case USERS_SET:
      return Object.assign({}, state, {
        users: action.users
      });

    case USERS_SELECT:
      return Object.assign({}, state, {
        selectedUsers: action.users
      });

    case USERS_SELECT_CLEAR:
      return Object.assign({}, state, {
        selectedUsers: []
      });

    default:
      return state
  }
};

export default users;
