import _ from 'lodash';

export const getErrorMessage = state => state.authentication.errorMessage;
export const getIsAuthenticated = state => state.authentication.isAuthenticated;

export const getIsAdmin = state => {
  let currentUser = state.authentication.currentUser;

  if (_.isEmpty(currentUser))
    return false;

  return state.authentication.currentUser.role == 'admin';
};

export const getIsOperator = state => {
  let currentUser = state.authentication.currentUser;

    if (_.isEmpty(currentUser))
    return false;

  return currentUser.role == 'operator';
};

export const getCurrentUserRole = state => {
  if (_.isEmpty(state.authentication.currentUser))
    return 'user';

  return state.authentication.currentUser.role;
};

export const getIsCompleted = state => state.authentication.isCompleted;
