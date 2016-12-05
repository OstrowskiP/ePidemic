import { authenticationNodeClient } from '../../../core/index';
import { authenticate } from '../actions';

const loginErrorMessage = 'Failed to login: Incorrect username or password';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  }
};

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS
  }
};

export const loginFailure = (errorMessage) => {
  return {
    type: LOGIN_FAILURE,
    errorMessage
  }
};

export const login = (credentials) => {
  return dispatch => {
    dispatch(loginRequest());

    authenticationNodeClient.login(credentials)
      .then(() => {
        dispatch(loginSuccess());
        dispatch(authenticate());
      })
      .catch(() => dispatch(loginFailure(loginErrorMessage)));
  }
};
