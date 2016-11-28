import { getSelectedUsers } from './selectors.js';
import { usersClient } from '../../../core';
import { snackbarShow } from '../../Common/SnackBar/actions';

export const USERS_SET = 'USERS_SET';
export const USERS_SELECT = 'USERS_SELECT';

export const usersSet = (users) => {
  return {
    type: USERS_SET,
    users
  }
};

export const usersSelect = (users) => {
  return {
    type: USERS_SELECT,
    users
  }
};

export const usersDeleteSelected = () => {
  return (dispatch, getState) => {
    let users = getSelectedUsers(getState());

    usersClient.deleteUsers(users)
      .then((result) => {
        if (result.status == "OK") {
          dispatch(usersGetAll());
          dispatch(snackbarShow(result.message));
        }
      })
  }
};

export const usersGetAll = () => {
  return (dispatch) => {
    usersClient.getAllUsers()
    .then(({ users }) => {
      dispatch(usersSet(users))
    }).catch(error => {
      console.error(error)
    })
  }
};
