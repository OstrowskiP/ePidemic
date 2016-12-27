import { getSelectedUsers } from './selectors.js';
import { usersClient } from '../../../core';
import { snackbarShow } from '../../Common/SnackBar/actions';
import _ from 'lodash'
import { updateUserForm } from '../../Common/actions';

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

export const usersSelectAndSetEdit = (users) => {
  return (dispatch, getState) => {
    dispatch(usersSelect(users));

    let user = _.first(getSelectedUsers(getState()));

    updateUserForm(dispatch, 'adminEditUserForm', user)
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

export const userEdit = (updatedValues) => {
  return (dispatch, getState) => {
    let user = _.first(getSelectedUsers(getState()));
    let updatedUser = _.assign(user, updatedValues);

    usersClient.updateUsers([updatedUser])
      .then((result) => {
        if (result.success == true) {
          dispatch(usersGetAll());
          dispatch(snackbarShow(result.message));
          dispatch(usersSelectClear());
          updateUserForm(dispatch, 'adminEditUserForm', null);
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
