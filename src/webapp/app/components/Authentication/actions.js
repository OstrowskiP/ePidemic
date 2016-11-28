export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
export const CLEAR_ERROR = 'CLEAR_ERROR';
import { authenticationNodeClient } from '../../core/index';

export const logoutRequest = () => {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: false
  }
};

export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  }
};

export const logoutFailure = (message) => {
  return {
    type: LOGOUT_FAILURE,
    isFetching: false,
    isAuthenticated: true
  }
};

export const logout = () => {
  return dispatch => {
    dispatch(logoutRequest());

    authenticationNodeClient.logout()
      .then(result => {
        localStorage.removeItem('username');
        localStorage.removeItem('role');
        dispatch(logoutSuccess());
      })
      .catch((error) => dispatch(logoutFailure(error)));
  }
};

export const clearError = () => {
  return {
    type: CLEAR_ERROR
  }
};
