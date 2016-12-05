import { getSelectedUsers } from './selectors.js';
import { usersClient } from '../../../core';
import { snackbarShow } from '../../Common/SnackBar/actions';
import _ from 'lodash'

export const USERS_SET = 'USERS_SET';
export const USERS_SELECT = 'USERS_SELECT';
export const USERS_SELECT_CLEAR = 'USERS_SELECT_CLEAR';

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

export const usersSelectClear = () => {
  return {
    type: USERS_SELECT_CLEAR,
  }
};

export const usersDeleteSelected = () => {
  return (dispatch, getState) => {
    let users = getSelectedUsers(getState());

    usersClient.deleteUsers(users)
      .then((result) => {
        if (result.success == true) {
          dispatch(usersGetAll());
          dispatch(snackbarShow(result.message));
          dispatch(usersSelectClear());
        }
      })
  }
};

export const usersActivateSelected = (active) => {
  return (dispatch, getState) => {
    let users = getSelectedUsers(getState());

    let updatedUsers = _.map(users, (user) => {
      return _.assign(user, { active });
    });

    usersClient.updateUsers(updatedUsers)
      .then((result) => {
        if (result.success == true) {
          dispatch(usersGetAll());
          dispatch(snackbarShow(result.message));
          dispatch(usersSelectClear());
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

export const userCreate = (user) => {
  return (dispatch) => {
    usersClient.createUser(user)
      .then((result) => {
        if (result.success == true) {
          dispatch(usersGetAll());
          dispatch(snackbarShow(result.message));
        }
      })
  }
};
