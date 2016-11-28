import { authenticationNodeClient } from '../../../core/index';

const loginErrorMessage = 'Failed to login: Incorrect username or password';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  }
};

export const loginSuccess = (username, role) => {
  return {
    type: LOGIN_SUCCESS,
    username,
    role
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
      .then(({ userInfo }) => {
        let { username, role } = userInfo;

        localStorage.setItem('username', username);
        localStorage.setItem('role', role);
        dispatch(loginSuccess(username, role));
      })
      .catch(() => dispatch(loginFailure(loginErrorMessage)));
  }
};
