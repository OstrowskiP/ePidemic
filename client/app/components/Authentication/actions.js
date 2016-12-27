export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS';
export const AUTHENTICATION_FAILURE = 'AUTHENTICATION_FAILURE';
import { authenticationNodeClient } from '../../core/index';
import { redirectTo } from '../Common/actions';

export const logoutRequest = () => {
  return {
    type: LOGOUT_REQUEST
  }
};

export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS
  }
};

export const logoutFailure = (message) => {
  return {
    type: LOGOUT_FAILURE
  }
};

export const authenticationFailure = () => {
  return {
    type: AUTHENTICATION_FAILURE
  }
};

export const authenticationSuccess = (currentUser) => {
  return {
    type: AUTHENTICATION_SUCCESS,
    currentUser
  }
};

export const logout = () => {
  return dispatch => {
    dispatch(logoutRequest());

    authenticationNodeClient.logout()
      .then(result => {
        if (result.success) {
          dispatch(logoutSuccess());
        }
      })
      .catch((error) => dispatch(logoutFailure(error)));
  }
};

export const authenticate = (redirect = true) => {
  return dispatch => {
    authenticationNodeClient.authenticate()
      .then(result => {
        if (result.success) {
          dispatch(authenticationSuccess(result.user));

          if (redirect)
            redirectTo('/')
        }
      })
      .catch(() => {
        dispatch(authenticationFailure());
      })
  }
};

export const clearError = () => {
  return {
    type: CLEAR_ERROR
  }
};
